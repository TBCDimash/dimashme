import React from 'react';
import NextLink from 'next/link';
import { Link } from 'theme-ui';

interface LogoProps {
  variant: 'primary' | 'text';
}

export function Logo({ variant }: LogoProps): React.ReactElement {
  return (
    <NextLink href="/" passHref>
      <Link
        sx={{
          fontFamily: 'heading',
          fontSize: ['26px', '30px'],
          color: variant === 'primary' ? 'primary' : 'text',
          textDecoration: 'none',
          textTransform: 'uppercase',
          '::after': {
            content: '""',
            display: 'block',
            width: 0,
            height: '3px',
            background: variant === 'primary' ? 'primary' : 'text',
            transition: 'width .3s',
          },
          ':hover::after': {
            width: '100%',
          },
        }}
      >
        Dimash Kamerdinov
      </Link>
    </NextLink>
  );
}
