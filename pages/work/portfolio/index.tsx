import type { InferGetServerSidePropsType, NextPage } from 'next';
import NextImage from 'next-image-export-optimizer';

import { WorkMeta } from '../../../lib/work';
import { Block } from '../../../components/WorkBlocks/Block';
import { Heading } from '../../../components/WorkBlocks/Heading';
import { Container } from '../../../components/WorkBlocks/Container';
import { InfoGrid } from '../../../components/WorkBlocks/InfoGrid';
import { Text } from '../../../components/WorkBlocks/Text';
import { getNextProject } from '../../../components/WorkBlocks/getNextProject';

import intro from './images/intro.png';

import { WorkSeo } from '../../../components/WorkBlocks/WorkSeo';

export const meta: WorkMeta = {
  slug: 'portfolio',
  order: 1,
  variant: 'title-on-right',
  projectName: 'My personal portfolio',
  title: 'My personal portfolio',
  description:
    "Welcome to my digital playground, a creative lab where React, Next.js, and TypeScript blend seamlessly. It's not just a portfolio; it's where I experiment and push the limits. Dive into a world where coding isn't just about solving problems—it's about exploring new horizons and creating something truly unique.",
  image660x503: '/images/work/portfolio/thumb-1.png',
  ogImage: '/images/work/portfolio/og-image.png',
};

export const getStaticProps = async () => {
  return await getNextProject(meta.slug);
};

const Work = ({ nextProject }: InferGetServerSidePropsType<typeof getStaticProps>): React.ReactElement => {
  return (
    <WorkSeo meta={meta}>
      <Container nextProject={nextProject}>
        <Block>
          <div sx={{ transform: 'translateY(9px)' }}>
            <Heading size="180" color="text" withBottomPadding={false} text={meta.projectName} />
          </div>
          <NextImage src={intro} placeholder="blur" />
        </Block>

        <Block>
          <InfoGrid
            left={
              <div>
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="Link" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="https://dimash.me" />
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="Timeline" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="2023 – now" />

                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="Tech stack" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="React" withBottomPadding={false} />
                <Text size="18" text="Next.js" withBottomPadding={false} />
                <Text size="18" text="Theme UI" withBottomPadding={false} />
                <Text size="18" text="Framer Motion" withBottomPadding={false} />
              </div>
            }
            right={
              <div>
                <Heading size="140" color="text" text="My personal portfolio" />
                <Text
                  size="18"
                  text="Welcome to my digital playground, a creative lab where React, Next.js, and TypeScript blend seamlessly. It's not just a portfolio; it's where I experiment and push the limits. Dive into a world where coding isn't just about solving problems—it's about exploring new horizons and creating something truly unique."
                />
                <Text
                  size="18"
                  text="
Recently, I've been diving into Framer Motion, and I've cooked up something fun. If you hit that hamburger menu, you're in for a cool animation surprise. It's all about adding a dash of flair to the mix! Take a look on the video below"
                />
                <div sx={{ mb: 40 }}>
                  <video width="100%" height="" controls autoPlay preload="none">
                    <source src="/images/work/portfolio/showcase.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <Text
                  size="18"
                  text="Although design isn't my main arena, I've poured all my coding experience and design efforts into this project. It's out there for everyone to see, so if you're curious, please take a moment to check it out!"
                />
              </div>
            }
          />
        </Block>
      </Container>
    </WorkSeo>
  );
};

export default Work;
