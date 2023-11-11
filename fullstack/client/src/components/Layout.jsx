import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <main>
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout