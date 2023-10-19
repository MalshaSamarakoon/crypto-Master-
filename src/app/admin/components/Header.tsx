'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Image from 'next/image';
import Accent from '@/app/components/Accent';

type HeaderProps = {
  large?: boolean;
};

export default function AdHeader({ large = false }: HeaderProps) {
  const router = useRouter();

  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'bg-dark sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      <a
        href='#skip-nav'
        className={clsx(
          'rounded-sm p-2 transition',
          'font-medium text-black dark:text-white',
          'dark:bg-dark bg-white',
          'dark:hover:text-primary-300 group',
          'focus:ring-primary-300 focus:outline-none focus:ring',
          'absolute left-4 top-4',
          '-translate-y-16 focus:translate-y-0'
        )}
      >
        <Accent>Skip to main content</Accent>
      </a>

      <div className='from-primary-200 via-primary-300 to-primary-400 h-2 bg-gradient-to-tr' />

      <div className='bg-dark'>
        <nav
          className={clsx(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <div className='flex items-center'>
            <Image src='/images/Logo.PNG' alt='Logo' width={40} height={40} />
          </div>

          <ul className='flex items-center space-x-3 text-xs md:space-x-10 md:text-base'>
           LOGIN
          </ul>
        </nav>
      </div>
    </header>
  );
}


