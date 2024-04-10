import type { InferGetServerSidePropsType, NextPage } from 'next';
import NextImage from 'next-image-export-optimizer';
import NextLink from 'next/link';

import { WorkMeta } from '../../../lib/work';
import { Block } from '../../../components/WorkBlocks/Block';
import { Heading } from '../../../components/WorkBlocks/Heading';
import { Container } from '../../../components/WorkBlocks/Container';
import { InfoGrid } from '../../../components/WorkBlocks/InfoGrid';
import { Text } from '../../../components/WorkBlocks/Text';
import { Link } from 'theme-ui';
import { ContentGrid } from '../../../components/WorkBlocks/ContentGrid';
import { getNextProject } from '../../../components/WorkBlocks/getNextProject';
import { WorkSeo } from '../../../components/WorkBlocks/WorkSeo';

import intro from './images/intro.png';

export const meta: WorkMeta = {
  slug: 'threejsmasonry',
  order: 2,
  variant: 'title-on-left',
  projectName: 'R3F Massonory Galery',
  title: 'R3F Masonry Gallery',
  description:
    'Dynamic 3D gallery using React and Three.js for an immersive display of visuals. It offers a responsive, interactive layout for showcasing portfolios or art, blending web development with 3D graphics effectively.',
  image822x624: '/images/work/threejsmasonry/thumb-1.png',
  ogImage: '/images/work/threejsmasonry/og-image.png',
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
                <div sx={{ mb: '40px' }}>
                  <Text size="12" text="Demo" withBottomPadding={false} isCaps />
                  <a href="https://threejs-masonary-grid.netlify.app/" target="_blank" rel="noreferrer">
                    <Text size="18" text="threejs-masonary-grid.netlify.app" isCaps withBottomPadding={false} />
                  </a>
                </div>
                <div sx={{ mb: '40px' }}>
                  <Text size="12" text="Github" withBottomPadding={false} isCaps />
                  <a href="https://github.com/TBCDimash/threejs-masonry/" target="_blank" rel="noreferrer">
                    <Text size="18" text="TBCDimash/threejs-masonry" isCaps withBottomPadding={false} />
                  </a>
                </div>
                <div sx={{ mb: '40px' }}>
                  <Text size="12" text="Timeline" withBottomPadding={false} isCaps />
                  <Text size="18" text="2022" />
                </div>
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="My role" withBottomPadding={false} isCaps />
                  <Text size="18" text="Frontend developer" />
                </div>
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="Tech stack" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="React" withBottomPadding={false} />
                <Text size="18" text="React three fiber" withBottomPadding={false} />
                <Text size="18" text="Three.js" withBottomPadding={false} />
                <Text size="18" text="React spring" withBottomPadding={false} />
              </div>
            }
            right={
              <div>
                <Heading size="140" color="text" text="R3F Massonory Galery" />
                <Text
                  size="24"
                  text="Dynamic 3D gallery using React and Three.js for an immersive display of visuals. It offers a responsive, interactive layout for showcasing portfolios or art, blending web development with 3D graphics effectively."
                />
              </div>
            }
          />
        </Block>

        {/* text*/}
        <Block>
          <ContentGrid
            left={<Heading size="140" color="text" withBottomPadding={false} text="Challenge" />}
            right={
              <Text
                withBottomPadding={false}
                size="18"
                text="Jumping into React Three Fiber and Three.js was a whole new adventure for me. It was tough at first, no doubt, but totally gripping. Figuring out how to work with 2D/3D stuff on the web canvas pushed me in ways I didn't expect, making me both scratch my head and get excited about what I could create next. It's been a mix of challenge and thrill, and I'm just getting started!"
              />
            }
          />
        </Block>

        {/* text*/}
        <Block>
          <ContentGrid
            left={<Heading size="140" color="text" withBottomPadding={false} text="Interesting learnings" />}
            right={
              <div>
                <Text
                  size="18"
                  text="A cool thing I picked up was how the 3D world ditches pixels for points. For a frontend dev like me, thinking in pixels just feels more natural. So, I tweaked the camera settings until one point matched up with one pixel. Made my life a whole lot easier!"
                />
                <Text
                  withBottomPadding={false}
                  size="18"
                  text="If you are interested in how I did this, feel free to check out the code in the repo (it's public):"
                />
                <a
                  href="https://github.com/TBCDimash/threejs-masonry/blob/master/src/components/Camera.js#L35"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="18" text="threejs-masonry" isCaps />
                </a>
                <div sx={{ mb: 40 }}>
                  <video width="100%" height="" controls preload="none">
                    <source src="/images/work/threejsmasonry/showcase.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            }
          />
        </Block>
      </Container>
    </WorkSeo>
  );
};

export default Work;
