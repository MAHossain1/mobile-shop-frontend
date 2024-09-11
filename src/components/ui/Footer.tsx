'use client';

import React from 'react';
import { Link } from '@nextui-org/react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-2">Mobile SHOP</h3>
            <p className="text-gray-400">Find Your Best Choice!</p>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="#" color="primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" color="primary">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" color="primary">
                  Customers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" color="primary">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" color="primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" color="primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" color="primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" color="primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            &copy; 2024 Mobile SHOP. All rights reserved by Mobile SHOP.
          </p>
        </div>
      </div>
    </footer>
  );
}
