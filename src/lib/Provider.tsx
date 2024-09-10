'use client';

import { store } from '@/redux/store';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { AuthProvider } from './AuthProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {' '}
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Toaster />
        <Provider store={store}>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
