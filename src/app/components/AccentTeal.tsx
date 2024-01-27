'use client';

import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function AccentTeal({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-teal-300 via-teal-400 to-teal-600',
        'bg-clip-text text-transparent'
      )}
    >
      {children}
    </span>
  );
}
