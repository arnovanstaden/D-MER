
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '@lib/firebase'
import { LoginCredentials } from '@types';
import { enqueueSnackbar } from 'notistack';
import { usePathname, useRouter } from 'next/navigation';

interface IUseAuth {
  user: any,
  login: (loginData: LoginCredentials) => void;
}

export const useAuth = (): IUseAuth => {
  const nextRouter = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);

  const authStateChanged = async (user: User | null) => {
    if (!user) {
      setUser(null)
      nextRouter.replace('/admin/login')
      return;
    }

    setUser(user);
    if (pathname === '/admin/login') {
      nextRouter.replace('/admin');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, []);

  const login = async (loginData: LoginCredentials) => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then(async (userCredential) => {
        enqueueSnackbar('Welcome back!')
      })
      .catch(() => {
        enqueueSnackbar('Incorrect Login Credentials');
        throw Error('Incorrect Login Credentials');
      })
  };

  return { login, user }
}