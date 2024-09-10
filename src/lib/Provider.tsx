'use client';

import { persistor, store } from '@/redux/store';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {' '}
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Toaster />
        <Provider store={store}>
          {/* <AuthProvider></AuthProvider> */}
          {/* {children} */}

          <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
