'use client';

import * as React from 'react';

export default function AdFooter() {
  return (
<footer className='z-50 relative '>
      <div style={{ backgroundColor: '#a67d21' }} className=' p-6 text-center '>
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
