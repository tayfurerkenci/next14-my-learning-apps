import Link from 'next/link';
import { Suspense } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

import HeaderAuth from '@/components/header-auth';
import SearchInput from '@/components/search-input';

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Reddit-Clone
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        {/* SearchInput is a client component and using useSearchParams hook.
        We have to wrap it with Suspense to avoid SSR errors. */}
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
        <NavbarItem></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
