'use client';

import { AuthProvider } from 'src/context/AuthProvider';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AdminLayout;
