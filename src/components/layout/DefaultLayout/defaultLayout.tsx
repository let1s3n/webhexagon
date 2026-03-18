import Footer from '@/components/modules/Footer/footer';
import NavBar from '@/components/modules/NavBar/navBar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
