'use client';

import * as React from 'react';

export default function AdFooter() {
  return (
    <footer className='z-50 relative'>
      <div className='bg-neutral-900 p-6 text-center dark:bg-neutral-100'>
        <a
          className='font-semibold text-neutral-600 dark:text-neutral-400'
          href={`${process.env.BASE_URL}/`}
        >
          Moon Education
        </a>
      </div>
    </footer>
  );
}
