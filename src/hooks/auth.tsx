
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '@lib/firebase'
import { ILogin } from '@types';
import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';

interface IUseAuth {
  user: any,
  login: (loginData: ILogin) => void;
}

export const useAuth = (): IUseAuth => {
  toast('test')
  const nextRouter = useRouter();
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null);

  const authStateChanged = async (user: User | null) => {
    if (!user) {
      setUser(null)
      nextRouter.replace('/admin/login')
      return;
    }

    setUser(user);
    if (pathname === '/admin/login') {
      nextRouter.replace('/admin')
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe()
  }, []);

  const login = async (loginData: ILogin) => {
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then(async (userCredential) => {
        toast('Welcome back!')
      })
      .catch(() => {
        toast('Incorrect Login Credentials');
        throw Error('Incorrect Login Credentials');
      })
  };

  return { login, user }
}