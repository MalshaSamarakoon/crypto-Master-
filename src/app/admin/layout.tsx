import { Metadata } from 'next';
import * as React from 'react';
import AdFooter from './components/Footer';
import AdHeader from './components/Header';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Admin- Moon Education',
  description: 'Pre-built components with awesome default',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
  <AdHeader/>
  {children}
  <AdFooter/>

  </>
  );
}
