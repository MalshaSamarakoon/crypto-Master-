import { Metadata } from 'next';
import * as React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
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
