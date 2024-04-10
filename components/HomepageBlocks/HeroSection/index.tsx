import React from 'react';
import { Text } from 'theme-ui';
import NextImage from 'next-image-export-optimizer';

import { Container } from '../../Layout/Container';
import { ArrowDownIcon } from '../../basic/ArrowDownIcon';
import { AnimatedDiv, AnimatedText } from '../../basic/AnimatedText';
import { contactMail, mailSubject } from '../../../config';
import { BorderRadiusLink } from '../../basic/BorderRadiusLink';
import face1 from './face1.jpg';
import face1Mobile from './face1-mobile.png';

export function HeroSection(): React.ReactElement {
  return (
    <Container>
      <div sx={{ display: 'flex', flexDirection: 'column', minHeight: ['0', 'calc(100vh - 158px)'] }}>
        <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <div sx={{ width: '100%', px: [0, 0, 0, '45px'], mb: ['0', '70px', 0] }}>
            <div
              sx={{
                display: 'flex',
                justifyContent: ['center', 'center', 'flex-start'],
                alignItems: 'flex-end',
                mb: ['10px', '10px', '10px', '10px'],
              }}
            >
              <AnimatedText
                text="Dimash Kamerdinov"
                customVariant="heading"
                customSx={{ lineHeight: '.85', fontSize: ['19vw', '115px', '130px', '190px'], color: 'primary' }}
              />
              <div sx={{ display: ['none', 'none', 'block'], ml: '20px' }}>
                <AnimatedDiv animationDelay={0.02 * 'dimash kamerdinov'.length}>
                  <NextImage src={face1} width="165" height="165" placeholder="blur" />
                </AnimatedDiv>
              </div>
            </div>
            <div sx={{ display: ['block', 'block', 'none'], maxWidth: '530px', mx: 'auto', mb: '15px', px: '10px' }}>
              <AnimatedDiv animationDelay={0.02 * 'dimash kamerdinov'.length}>
                <NextImage src={face1} placeholder="blur" layout="fill" />
              </AnimatedDiv>
            </div>
            <div
              sx={{
                display: 'flex',
                justifyContent: ['center', 'center', 'flex-end'],
                alignItems: 'flex-end',
                mb: ['10px', '10px', '10px', '10px'],
              }}
            >
              <AnimatedText
                customVariant="heading"
                text="Frontend Engineer"
                animationDelay={0.2}
                customSx={{ lineHeight: '.85', fontSize: ['20vw', '125px', '160px', '190px'] }}
              />
            </div>
          </div>
        </div>
        <div
          sx={{ display: ['none', 'none', 'flex'], justifyContent: 'space-between', alignItems: 'center', mt: '30px' }}
        >
          <Text variant="normalCaps" sx={{ fontSize: '10px' }}>
            <div sx={{ display: 'flex', alignItems: 'center' }}>
              <ArrowDownIcon sx={{ mr: '6px' }} />
              <span>Scroll to discover</span>
            </div>
          </Text>
          <BorderRadiusLink href={`mailto:${contactMail}?subject=${mailSubject}`} text="Let's talk" withArrow={true} />
        </div>
      </div>
    </Container>
  );
}
