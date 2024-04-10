import React from 'react';
import NextLink from 'next/link';
import { Grid, Link, Text } from 'theme-ui';

import { contactMail, mailSubject, popoverMenu } from '../../../config';
import { Animation } from './Animation';
import { UseMenuValues } from './useMenu';
import { Container } from '../Container';
import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';
import { Logo } from '../Header/Logo';
import { CloseIcon } from './CloseIcon';
import { SocialMenu } from '../Footer/SocialMenu';
import { useRouter } from 'next/router';

type MenuProps = UseMenuValues;

export function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps): React.ReactElement {
  const router = useRouter();
  return (
    <Animation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
      <div sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Container fullWidth>
            <div
              sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', py: ['30px'] }}
            >
              <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <ThemeToggle />
              </div>
              <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Logo variant="primary"></Logo>
              </div>
              <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
            </div>
          </Container>
          <div sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Container>
              <div sx={{ mb: '40px' }}>
                {popoverMenu.map(menuItem => (
                  <div
                    key={menuItem.text}
                    sx={{ display: 'flex', justifyContent: 'center', mb: ['4px', '4px', '4px'] }}
                  >
                    <NextLink href={menuItem.url} passHref>
                      <Link variant="unstyled" onClick={() => setIsMenuOpen(false)} sx={{ position: 'relative' }}>
                        <Text
                          variant="heading"
                          sx={{
                            display: 'inline-block',
                            fontSize: ['100px', '100px', '120px'],
                            transition: '0.3s',
                            opacity: 1,
                            ':hover': {
                              opacity: 0.8,
                              letterSpacing: '1px',
                            },
                          }}
                        >
                          {menuItem.text}
                        </Text>
                        {router.pathname === menuItem.url && (
                          <div
                            sx={{
                              position: 'absolute',
                              left: '50%',
                              top: '50%',
                              transform: 'translateX(-50%) translateY(-50%)',
                              width: ['150px', '150px', '180px'],
                              height: '6px',
                              background: 'primary',
                            }}
                          ></div>
                        )}
                      </Link>
                    </NextLink>
                  </div>
                ))}
              </div>
              <div sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href={`mailto:${contactMail}?subject=${mailSubject}`} variant="unstyled">
                  <Text variant="normal" sx={{ fontSize: ['12px', '12px', '16px'] }}>
                    Email me on <Text sx={{ color: 'primary' }}>{contactMail}</Text>
                  </Text>
                </Link>
              </div>
            </Container>
          </div>
          <Container>
            <div sx={{ display: 'flex', justifyContent: 'center', py: '30px' }}>
              <SocialMenu variant="normal" />
            </div>
          </Container>
        </div>
      </div>
    </Animation>
  );
}
