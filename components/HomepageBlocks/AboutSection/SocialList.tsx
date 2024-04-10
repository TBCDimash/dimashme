import React from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Link } from 'theme-ui';

import { socials } from '../../../config';

export function SocialList(): React.ReactElement {
  return (
    <div sx={{ display: 'flex', justifyContent: ['center', 'center', 'flex-end'] }}>
      <nav
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '20px',
          width: '100%',
          maxWidth: '338px',
        }}
      >
        {socials.map(socialItem => {
          return (
            <React.Fragment key={socialItem.text}>
              <Link
                href={socialItem.url}
                variant="capsSmall"
                target="_blank"
                sx={{ ':hover': { '.icon': { transform: 'rotate(270deg)' } } }}
              >
                <div sx={{ display: 'flex', alignItems: 'center' }}>
                  <HiOutlineArrowDown
                    className="icon"
                    sx={{
                      width: '17px',
                      height: '17px',
                      stroke: 'primary',
                      transform: 'rotate(225deg)',
                      transition: '.3s',
                    }}
                  />
                  <span sx={{ ml: '4px' }}>{socialItem.text}</span>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}
