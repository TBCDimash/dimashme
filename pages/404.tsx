import type { NextPage } from 'next';
import { Link, Paragraph } from 'theme-ui';
import NextLink from 'next/link';

import { BorderRadiusLink } from '../components/basic/BorderRadiusLink';
import { Container } from '../components/Layout/Container';
import { Seo } from '../components/SEO/Seo';

const NotFound: NextPage = () => {
  return (
    <>
      <Seo title="404" />
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 211px)',
        }}
      >
        <Container>
          <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <Paragraph variant="normal" sx={{ fontSize: ['16px', '16px', '18px'], mb: ['16px', '16px', '50px'] }}>
              Error 404. Page not found.
            </Paragraph>
            <div
              sx={{
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                mb: ['16px', '16px', '24px'],
              }}
            >
              <NextLink href="/" passHref>
                <Link
                  sx={{
                    fontFamily: 'heading',
                    fontSize: ['130px', '200px', '300px', '360px'],
                    lineHeight: '.85',
                    color: 'primary',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    '::after': {
                      content: '""',
                      // mt: ['16px', '16px', '24px'],
                      display: 'block',
                      width: 0,
                      height: '5px',
                      background: 'primary',
                      transition: 'width .3s',
                    },
                    ':hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  you’re lost
                </Link>
              </NextLink>
            </div>
            <div sx={{ display: 'flex', justifyContent: 'center' }}>
              <NextLink href="/" passHref>
                <BorderRadiusLink text="go home" withArrow={false} />
              </NextLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
