import React from 'react';
import { Grid, Heading, Link, Text } from 'theme-ui';
import NextImage from 'next-image-export-optimizer';
import { Container } from '../../Layout/Container';

import face from './face.png';

import { HiOutlineArrowDown } from 'react-icons/hi';

export function AboutSection(): React.ReactElement {
  return (
    <div sx={{ mt: ['60px', '60px', '120px'] }}>
      <div sx={{ mb: ['100px', '100px', '240px'] }}>
        <Container mobileFriendly>
          <div sx={{ display: ['block', 'block', 'flex'], alignItems: 'center', mb: '40px' }}>
            <div
              sx={{
                order: [1, 1, 2],
                position: 'relative',
                zIndex: 1,
                maxWidth: ['335px', '335px'],
                transform: ['translateX(0)', 'translateX(0)', 'translateX(30px)'],
              }}
            >
              <Heading variant="heading" sx={{ fontSize: ['72px', '72px', '90px', '120px'] }}>
                let&apos;s make something awesome
              </Heading>
            </div>
            <div
              sx={{
                order: [2, 2, 1],
                position: 'relative',
                zIndex: 0,
                transform: ['translateY(-20px)', 'translateY(-20px)', 'translateY(0)'],
                minWidth: ['100%', '100%', '230px', '380px'],
                width: ['100%', '100%', '230px', '380px'],
              }}
            >
              <NextImage src={face} width={580} height={600} placeholder="blur" />
            </div>
            <div sx={{ order: [3, 3, 3], maxWidth: ['100%', '100%', '530px'], ml: 'auto' }}>
              <div sx={{ mb: ['20px', '20px', '40px'] }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  Experienced Frontend Developer with a passion for creating cutting-edge web applications. My journey
                  in tech is fueled by a desire to build dynamic and responsive web solutions, primarily using ReactJS
                </Text>
              </div>
              <div sx={{ mb: ['20px', '20px', '40px'] }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  Currently, I am dedicated to expanding my expertise into mobile app development through React Native,
                  aiming to deliver seamless, cross-platform user experiences.
                </Text>
              </div>
              <Text variant="normal" sx={{ fontSize: '18px' }}>
                Always Learning: I&apos;ve maintained a keen curiosity about the latest technologies, such as React and
                Laravel, ensuring our projects remain at the forefront of innovation. My approach to development is
                collaborative, working hand in hand with various teams to achieve shared goals.
              </Text>
            </div>
          </div>
          <Grid
            columns={[1, 1, 2]}
            sx={{
              maxWidth: '613px',
              rowGap: '40px',
              columnGap: '80px',
              mx: 'auto',
              transform: ['translateX(0)', 'translateX(0)', 'translateX(100px)', 'translateX(170px)'],
            }}
          >
            <div>
              <div sx={{ mb: '16px' }}>
                <Text variant="capsSmallPrimary">Teach stack</Text>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  01
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    React JS
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  02
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    JavaScript/TypeScript
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  03
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    CSS/SCSS
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  04
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    Laravel/PHP
                  </Text>
                </div>
              </div>
            </div>

            <div>
              <div sx={{ mb: '16px' }}>
                <Text variant="capsSmallPrimary">Soft skills</Text>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  05
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    Problem-Solvin
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  06
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    Open-Door Team Ally
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  07
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    Eager to Learn
                  </Text>
                </div>
              </div>
              <div sx={{ display: 'flex', mb: '20px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  08
                </Text>
                <div sx={{ ml: '10px' }}>
                  <Text variant="normal" sx={{ fontSize: '18px' }}>
                    Transparent
                  </Text>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </div>

      <div sx={{ mb: ['120px', '120px', '200px'] }}>
        <Container mobileFriendly>
          <div sx={{ display: ['block', 'block', 'flex'] }}>
            <div sx={{ mb: ['40px', '40px', 0], mr: [0, 0, '60px'] }}>
              <Heading variant="heading" sx={{ fontSize: ['72px', '72px', '90px', '120px'] }}>
                Certifications
              </Heading>
            </div>
            <div sx={{ ml: 'auto', maxWidth: ['100%', '100%', '504px'] }}>
              <div sx={{ mb: '30px' }}>
                <Text variant="normal" sx={{ fontSize: '18px' }}>
                  In my quest to enhance my React expertise, I took significant strides by completing the Joy of React
                  course. This endeavor allowed me to bridge knowledge gaps in crucial areas, particularly in
                  understanding hooks, memoization, Context, and Component API Design. The course also shed light on
                  Next.js, dived into the intricacies of global state management with Redux. Through this learning
                  journey, I have significantly bolstered my React knowledge, equipping myself with a more robust skill
                  set.
                </Text>
              </div>

              <div sx={{ display: 'flex' }}>
                <Link
                  href="https://www.linkedin.com/in/dimash-k/details/certifications/"
                  variant="capsSmall"
                  target="_blank"
                  sx={{ fontSize: '18px', ':hover': { '.icon': { transform: 'rotate(270deg)' } } }}
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
                    <span sx={{ ml: '8px' }}>See certifications</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
