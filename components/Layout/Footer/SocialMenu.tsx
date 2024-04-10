import React from 'react';
import { Link } from 'theme-ui';
import { BsDot } from 'react-icons/bs';
import { socials } from '../../../config';

interface SocialMenuProps {
  variant: 'normal' | 'short';
}

export function SocialMenu({ variant }: SocialMenuProps): React.ReactElement {
  return (
    <nav sx={{ display: 'flex', alignItems: 'center' }}>
      {socials.map((menuItem, index) => {
        const isLast = index === socials.length - 1;
        return (
          <React.Fragment key={menuItem.text}>
            <Link href={menuItem.url} variant="capsSmall" target="_blank">
              {variant === 'normal' ? menuItem.text : menuItem.text.slice(0, 2)}
            </Link>
            {!isLast && <BsDot sx={{ mx: '10px', width: '16px', height: '16px', fill: 'text' }} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
