import React from 'react';
import { Grid, Text, Link } from 'theme-ui';
import NextLink from 'next/link';

import { ArrowUpIcon } from '../../basic/ArrowUpIcon';
import { Container } from '../Container';
import { SocialMenu } from './SocialMenu';

export function Footer(): React.ReactElement {
  return (
    <div sx={{ borderTop: '1px solid', borderColor: 'text' }}>
      <Container fullWidth>
        <Grid py="40px" columns={[`2fr 1fr`, 2, 3]} gap="30px 0">
          {/* Main */}
          <div sx={{ display: 'flex' }}>
            <NextLink href="/" passHref>
              <Link variant="capsSmall">Dimash Kamerdinov ©</Link>
            </NextLink>
          </div>
          {/* Social desktop */}
          <div
            sx={{
              display: ['none', 'flex'],
              justifyContent: [undefined, 'flex-end', 'center'],
            }}
          >
            <SocialMenu variant="normal" />
          </div>
          {/* Social mobile */}
          <div
            sx={{
              display: ['flex', 'none'],
              justifyContent: ['flex-end'],
            }}
          >
            <SocialMenu variant="short" />
          </div>
          {/* Back to top */}
          <div
            sx={{
              gridColumn: ['span 2', 'span 2', 'span 1'],
              display: ['none', 'none', 'flex'],
              justifyContent: ['center', 'center', 'flex-end'],
              alignItems: 'center',
            }}
          >
            <Text variant="capsSmall" sx={{ cursor: 'pointer' }}>
              <ArrowUpIcon sx={{ mr: '6px' }} />
              <span
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
              >
                Back to top
              </span>
            </Text>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
