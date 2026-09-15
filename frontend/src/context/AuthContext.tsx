/**
 * Auth Context
 *
 * Provides authentication state and methods to the entire app.
 * Wraps the app with user session data and login/logout functions.
 *
 * Usage:
 *   import { useAuth } from '@/context/AuthContext';
 *   const { user, login, logout, isAuthenticated } = useAuth();
 *
 * @owner Team Member 1 — Authentication
 */

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// TODO: Import from types when defined
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (_email: string, _password: string) => Promise<void>;
  register: (_name: string, _email: string, _password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Check for existing session (JWT in localStorage)
    // const token = localStorage.getItem('skillforge_token');
    // if (token) { fetchUser(); }
    setIsLoading(false);
  }, []);

  const login = async (_email: string, _password: string) => {
    // TODO: Call authService.login() and store token
    console.log('Login not implemented yet');
  };

  const register = async (_name: string, _email: string, _password: string) => {
    // TODO: Call authService.register() and store token
    console.log('Register not implemented yet');
  };

  const logout = () => {
    // TODO: Clear token and user state
    setUser(null);
    // localStorage.removeItem('skillforge_token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
