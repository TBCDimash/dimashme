import React from 'react';
import NextLink from 'next/link';
import { Link } from 'theme-ui';

import { menu } from '../../../config';
import { useRouter } from 'next/router';

export function MenuDesktop(): React.ReactElement {
  const router = useRouter();

  return (
    <nav sx={{ display: 'flex' }}>
      {menu.map((menuItem, index) => {
        const isFirst = index === 0;
        const isCurrent = menuItem.url === router.pathname;
        return (
          <div key={menuItem.text} sx={{ ml: isFirst ? 0 : '40px' }}>
            <NextLink href={menuItem.url} passHref>
              <Link variant={isCurrent ? 'capsSmallActive' : 'capsSmall'}>{menuItem.text}</Link>
            </NextLink>
          </div>
        );
      })}
    </nav>
  );
}
