'use client';

import * as React from 'react';

export default function AdFooter() {
  return (
    <footer className='pb-2 pt-20'>
      <div className='bg-neutral-900 p-6 text-center dark:bg-neutral-100'>
        <a
          className='font-semibold text-neutral-600 dark:text-neutral-400'
          href='http://localhost:3000/'
        >
          Moon Education
        </a>
      </div>
    </footer>
  );
}