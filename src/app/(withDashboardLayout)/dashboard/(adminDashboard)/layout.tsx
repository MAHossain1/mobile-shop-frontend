import type { Metadata } from 'next';
import Sidebar from '../dashboardComponent/Sidebar';

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
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 overflow-auto">{children}</main>
    </div>
  );
}
