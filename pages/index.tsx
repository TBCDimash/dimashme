import type { InferGetServerSidePropsType } from 'next';

import { HeroSection } from '../components/HomepageBlocks/HeroSection';
import { AboutSection } from '../components/HomepageBlocks/AboutSection';
import { WorksIntroSection } from '../components/HomepageBlocks/WorksIntroSection';
import { ProjectsPreviewSection } from '../components/WorkBlocks/ProjectsPreviewSection';
import { LetsTalkSection } from '../components/HomepageBlocks/LetsTalkSection';
import { getWorkData } from '../lib/work';
import { Seo } from '../components/SEO/Seo';

export const getStaticProps = async () => {
  const allWorkData = await getWorkData();

  return {
    props: {
      allWorkData,
    },
  };
};

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const { allWorkData } = props;
  return (
    <div>
      <Seo />
      <div>
        <HeroSection />
      </div>
      <div sx={{ mt: ['140px', '140px', '360px'] }}>
        <AboutSection />
      </div>
      <div sx={{ mt: ['140px', '140px', '280px'] }}>
        <WorksIntroSection />
      </div>
      <div sx={{ mt: ['140px', '140px', '240px'] }}>
        <ProjectsPreviewSection projects={allWorkData} />
      </div>
      <div
        sx={{
          mt: ['110px', '105px', '170px', '140px'],
          mb: ['60px', '60px', '160px'],
        }}
      >
        <LetsTalkSection />
      </div>
    </div>
  );
};

export default Home;
