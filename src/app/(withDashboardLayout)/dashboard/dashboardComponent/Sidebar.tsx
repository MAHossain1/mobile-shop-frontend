'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, ShoppingCart, Box, List, Menu, X } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', icon: <Home size={24} />, href: '/' },
    {
      label: 'Products',
      icon: <Box size={24} />,
      href: '/dashboard/admin/mobiles',
    },
    {
      label: 'Add Product',
      icon: <List size={24} />,
      href: '/dashboard/admin/add-mobile',
    },
    {
      label: 'Orders',
      icon: <ShoppingCart size={24} />,
      href: '/dashboard/admin/orders',
    },
  ];

  return (
    <div>
      {/* Sidebar Toggle Button for Mobile */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white shadow-md transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:w-64 lg:flex lg:flex-col lg:justify-between`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b border-gray-700 lg:hidden mb-4">
            <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            {menuItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center p-4 hover:bg-gray-700 transition duration-200`}
              >
                {item.icon}
                <span className="ml-4">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-700 lg:hidden">
            {/* Optional additional content for mobile view */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
