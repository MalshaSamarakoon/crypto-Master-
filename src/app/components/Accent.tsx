'use client';

import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-600',
        'bg-clip-text text-transparent'
      )}
    >
      {children}
    </span>
  );
}
