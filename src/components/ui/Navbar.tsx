'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks';
import { logout, selectUser } from '@/redux/features/auth/authSlice';
import { ShoppingCart } from 'lucide-react';
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavBar() {
  const { selectedItems } = useAppSelector(store => store.cart);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dispatch = useDispatch();

  const user = useAppSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menuItems = ['Profile', 'Dashboard', 'Log Out'];

  const routeMap: Record<string, string> = {
    user: '/dashboard',
    admin: '/dashboard/admin',
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Mobile Shop</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" aria-current="page">
              Mobile Shop
            </Link>
          </p>
        </NavbarBrand>

        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/mobiles" aria-current="page">
            All Mobiles
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user?.userEmail && (
            <Link href={routeMap[user.role] || '/'}>Dashboard</Link>
          )}
        </NavbarItem>

        <NavbarItem>
          <Badge content={selectedItems} color="danger">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {user?.userEmail ? (
          <NavbarItem>
            <Button onClick={handleLogout} color="secondary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
