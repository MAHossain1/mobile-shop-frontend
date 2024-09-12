import NavBar from '@/components/ui/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Mobile Shop Admin',
};

export default async function userDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen max-w-screen-xl	mx-auto">{children}</main>
    </div>
  );
}
