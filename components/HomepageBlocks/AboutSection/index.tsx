import React from 'react';
import NextImage from 'next-image-export-optimizer';
import { Grid, Paragraph } from 'theme-ui';

import { Container } from '../../Layout/Container';
import { SocialList } from './SocialList';
import { AnimatedDiv, AnimatedText } from '../../basic/AnimatedText';

export function AboutSection(): React.ReactElement {
  return (
    <Container>
      <Grid columns={[1, 1, 'auto 1fr']} gap="0">
        {/* Heading */}
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: ['center', 'center', 'center', 'flex-start'],
            justifyContent: 'center',
            mb: ['32px', '32px', 0],
          }}
        >
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: ['center', 'center', 'flex-start'],
              mb: ['10px', '10px', '20px', '25px'],
            }}
          >
            <div>
              <AnimatedText
                text="Bringing Pixels"
                customVariant="heading"
                customSx={{
                  lineHeight: '.85',
                  fontSize: ['25vw', '180px', '140px', '187px'],
                }}
                animationDelay={0.02}
              />
            </div>
          </div>
          <div sx={{ display: 'flex', alignItems: 'center', justifyContent: ['center', 'center', 'flex-start'] }}>
            <AnimatedText
              customVariant="heading"
              text="to Life"
              animationDelay={0.1}
              customSx={{ color: 'primary', lineHeight: '.85', fontSize: ['36vw', '215px', '167.75px', '221px'] }}
            />
          </div>
        </div>
        {/* Text */}
        <div sx={{ justifySelf: ['auto', 'auto', 'flex-start'], alignSelf: ['start'] }}>
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', 'column', 'column', 'row'],
              mx: 'auto',
              ml: ['auto', 'auto', '64px'],
              maxWidth: ['520px', '520px', '520px', '615px'],
            }}
          >
            <div sx={{ width: ['100%', '100%', '100%', '50%'] }}>
              <Paragraph variant="normal" sx={{ mb: '18px' }}>
                A Frontend Engineer skilled in creating websites that are both beautiful and functional, blending design
                and usability seamlessly.
              </Paragraph>
              <Paragraph variant="normal" sx={{ mb: ['18px', '18px', '18px', '5px'] }}>
                I carefully adjust every detail to hit pixel perfection, making sure sites not only look great but work
                perfectly too.
              </Paragraph>
            </div>
            <div sx={{ width: ['100%', '100%', '100%', '50%'], ml: [0, 0, 0, '35px'] }}>
              <Paragraph variant="normal" sx={{ mb: ['18px', '18px', '5px', 0] }}>
                Like climbing a mountain, each step brings tougher challenges, but I keep going, overcoming every
                challenge on my way up.
              </Paragraph>
            </div>
          </div>
        </div>
        {/* Socials */}
        <div sx={{ mt: '40px' }}>
          <SocialList />
        </div>
      </Grid>
    </Container>
  );
}
