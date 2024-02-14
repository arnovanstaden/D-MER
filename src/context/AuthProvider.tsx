import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { enqueueSnackbar } from 'notistack';
import { LoginCredentials } from '@types'; // Ensure this type is correctly defined in your project
import { useRouter } from 'next/navigation'; // Correct import path
import { auth } from '@lib/firebase'; // Ensure Firebase is correctly initialized here
import Loader from '@components/UI/Loader';
import { errorNotification } from '@utils/notifications';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (loginData: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true, // Start with true to indicate loading on initial render
  login: async () => { },
  logout: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Correct initial state
  const router = useRouter();

  const login = async (loginData: LoginCredentials) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      enqueueSnackbar('Welcome back!', { variant: 'success' });
      router.push('/admin');
    } catch (e) {
      console.error(e)
      errorNotification('Error logging in. Please try again.', e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    const auth = getAuth();
    setIsLoading(true);
    await signOut(auth)
      .then(() => router.push('/admin/login'))
      .catch((error) => {
        throw new Error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/admin/login');
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
      <Loader open={isLoading} />
    </AuthContext.Provider>
  );
};
