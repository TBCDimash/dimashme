import type { InferGetServerSidePropsType, NextPage } from 'next';
import NextImage from 'next-image-export-optimizer';

import { WorkMeta } from '../../../lib/work';
import { Block } from '../../../components/WorkBlocks/Block';
import { Heading } from '../../../components/WorkBlocks/Heading';
import { Container } from '../../../components/WorkBlocks/Container';
import { InfoGrid } from '../../../components/WorkBlocks/InfoGrid';
import { Text } from '../../../components/WorkBlocks/Text';
import { getNextProject } from '../../../components/WorkBlocks/getNextProject';
import { WorkSeo } from '../../../components/WorkBlocks/WorkSeo';

import intro from './images/intro.png';

export const meta: WorkMeta = {
  slug: 'spincoza',
  order: 3,
  variant: 'title-on-right',
  projectName: 'Spinza.co.za casino',
  title: 'Spinza.co.za casino',
  description:
    'Successfully developed and launched spinza.co.za casino platform at Tabella, achieving comprehensive project milestones from inception to go-live.',
  image660x503: '/images/work/spincoza/thumb-1.png',
  ogImage: '/images/work/spincoza/og-image.png',
};

export const getStaticProps = async () => {
  return await getNextProject(meta.slug);
};

const Casinos = ({ nextProject }: InferGetServerSidePropsType<typeof getStaticProps>): React.ReactElement => {
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
                  <Text size="12" text="Timeline" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="2021" />
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="My role" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="Key developer" />
                <div sx={{ mb: '6px' }}>
                  <Text size="12" text="Tech stack" withBottomPadding={false} isCaps />
                </div>
                <Text size="18" text="PHP/Laravel" withBottomPadding={false} />
                <Text size="18" text="Javascript" withBottomPadding={false} />
                <Text size="18" text="CSS/SCSS" withBottomPadding={false} />
                <Text size="18" text="Webpack" withBottomPadding={false} />
              </div>
            }
            right={
              <div>
                <Heading size="140" color="text" text="Spinza.co.za Casino" />
                <a href="https://spinza.co.za/">
                  <Text size="18" text="spinza.co.za" />
                </a>
                <Text size="18" text="In this project, my role was multifaceted, involving:" />
                <Text
                  size="18"
                  text="- Direct collaboration with the Product Owner to align development objectives and project vision."
                />
                <Text
                  size="18"
                  text="- Working closely with Backend, Design, and SEO teams to integrate comprehensive functionalities and optimize user experience."
                />
                <Text
                  size="18"
                  text="- Coordinating the entire development process among team members, facilitating smooth communication and efficient workflow."
                />
                <Text
                  size="18"
                  text="- The primary objective was to successfully build, develop, and deliver spin.co.za casino websites, overseeing the project from conceptualization to launch."
                />
              </div>
            }
          />
        </Block>
      </Container>
    </WorkSeo>
  );
};

export default Casinos;
