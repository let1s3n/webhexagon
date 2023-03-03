import React from "react";

import NavBar from '@/components/modules/NavBar/navBar'
import Footer from '@/components/modules/Footer/footer'

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
