import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

interface AuthStateType {
  session: Session | null;
  signIn: () => void;
  signOut: () => void;
}

const AuthState = createContext<AuthStateType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      if (session) await syncUserToDB(session);
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        if (session) await syncUserToDB(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value: AuthStateType = {
    session,
    signIn,
    signOut,
  };
  return <AuthState.Provider value={value}>{children}</AuthState.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthState);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const syncUserToDB = async (session: Session) => {
  const { user } = session;

  const { data } = await supabase
    .from('users')
    .select('id')
    .eq('id', user.id)
    .maybeSingle();

  if (!data) {
     await supabase.from('users').insert([
      {
        id: user.id,
        email: user.email,
      },
    ]);
  }
};