import { Metadata } from 'next';
import * as React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Moon Education Center',
  description: 'guiding individuals on their journey to financial success',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
 
      <Header/>
        {children}
        <Footer/>
  </>
  );
}
