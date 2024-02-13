
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from '@lib/firebase'
import { LoginCredentials } from '@types';
import { enqueueSnackbar } from 'notistack';
import { usePathname, useRouter } from 'next/navigation';

interface IUseAuth {
  user: User | null,
  login: (loginData: LoginCredentials) => void;
  logout: () => void;
}

export const useAuth = (): IUseAuth => {
  const nextRouter = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console
      if (!user) {
        setUser(null)
        nextRouter.replace('/admin/login');
        return;
      }

      if (pathname === '/admin/login') {
        nextRouter.replace('/admin');
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (loginData: LoginCredentials) => {
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then(async (userCredential) => {
        enqueueSnackbar('Welcome back!')
        setUser(userCredential.user);
      })
      .catch(() => {
        enqueueSnackbar('Incorrect Login Credentials');
        throw Error('Incorrect Login Credentials');
      });
  }

  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
      nextRouter.replace('/admin/login');
    }).catch((error) => {
      console.error(error)
    })
  };

  return { login, user, logout }
}