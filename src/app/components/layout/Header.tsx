'use client';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import Image from 'next/image';
import Accent from '@/app/components/Accent';
import UnstyledLink from '@/components/links/UnstyledLink';

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  //#region  //*=========== Route Functionality ===========
  const router = useRouter();
  const arrOfRoute = router.route ? router.route.split('/') : [];
  const baseRoute = arrOfRoute.length > 1 ? '/' + arrOfRoute[1] : '';

  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
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
  //#endregion  //*======== Scroll Shadow ===========

  return (
    <header
      className={clsx(
        'bg-dark sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      {/* Skip Navigation */}
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

      {/* Gradient List */}

      <div className='bg-dark'>
        <nav
          className={clsx(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <div className='flex items-center'>
            {' '}
            {/* Logo container */}
            <Image src='/images/Logo.PNG' alt='Logo' width={150} height={120} />
          </div>

          <ul className='flex items-center space-x-3 text-xs md:space-x-10 md:text-base'>
            {' '}
            {/* Navigation items container */}
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx(
                    'rounded-sm py-2 transition-colors',
                    'text-hover-gold font-medium text-white',
                    'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring'
                  )}
                >
                  <span
                    className={clsx(
                      'transition-colors',
                      'bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0',
                      href === baseRoute &&
                        '!bg-primary-300/50 dark:from-primary-300 dark:to-primary-400 dark:bg-gradient-to-tr dark:bg-clip-text dark:text-transparent'
                    )}
                  >
                    {label}
                  </span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/pages/about', label: 'About' },
  { href: '/pages/courses', label: 'Courses' },
  { href: '/pages/services/', label: 'Services' },
];
