import React from 'react';
import { Paragraph, Link } from 'theme-ui';
import { HiOutlineArrowDown } from 'react-icons/hi';

import { Container } from '../Layout/Container';
import { BorderRadiusLink } from '../basic/BorderRadiusLink';
import { contactMail, mailSubject } from '../../config';

export function LetsTalkSection(): React.ReactElement {
  return (
    <Container>
      <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <Paragraph variant="normal" sx={{ fontSize: ['16px', '16px', '18px'], mb: ['16px', '16px', '50px'] }}>
          Ready for your next project?
        </Paragraph>
        <div
          sx={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            mb: ['16px', '16px', '24px'],
            transform: ['translateX(12px)', 'translateX(24px)', 'translateX(35px)'], //
          }}
        >
          <Link
            href={`mailto:${contactMail}?subject=${mailSubject}`}
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
            Let’s talk
          </Link>
          <HiOutlineArrowDown
            sx={{
              ml: ['4px', '8px', '10px'],
              width: ['20px', '40px', '60px'],
              height: ['20px', '40px', '60px'],
              stroke: 'primary',
              transform: 'rotate(225deg)',
            }}
          />
        </div>
        <div sx={{ display: 'flex', justifyContent: 'center' }}>
          <BorderRadiusLink
            href={`mailto:${contactMail}?subject=${mailSubject}`}
            text={contactMail}
            withArrow={false}
          />
        </div>
      </div>
    </Container>
  );
}
