import React from 'react';
import { Text } from 'theme-ui';

import { Container } from '../../Layout/Container';
import { ArrowDownIcon } from '../../basic/ArrowDownIcon';
import { AnimatedText } from '../../basic/AnimatedText';

export function HeroSection(): React.ReactElement {
  return (
    <Container>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: ['100%', '100%', 'calc(100vh - 108px)'],
          mt: ['80px', '80px', 0],
          mb: ['160px', '160px', 0],
        }}
      >
        <div sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <div
            sx={{
              display: 'flex',
              justifyContent: ['start', 'center', 'space-between'],
              width: '100%',
              alignItems: 'flex-end',
            }}
          >
            <div>
              <AnimatedText
                text="I'm creating"
                customVariant="heading"
                customSx={{ color: 'primary', lineHeight: '.85', fontSize: ['70px', '150px', '150px', '180px'] }}
              />
              <div sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AnimatedText
                  text="dynamic web app"
                  customVariant="heading"
                  customSx={{ color: 'primary', lineHeight: '.85', fontSize: ['70px', '150px', '150px', '180px'] }}
                  animationDelay={0.02 * "I'm creating".length}
                />
              </div>
            </div>
            <div
              sx={{
                display: ['none', 'none', 'flex'],
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '10px',
              }}
            >
              <Text variant="normalCaps" sx={{ fontSize: '10px' }}>
                <div sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowDownIcon sx={{ mr: '6px' }} />
                  <span>Scroll to discover</span>
                </div>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
