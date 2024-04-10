import type { InferGetServerSidePropsType } from 'next';
import { LetsTalkSection } from '../../components/HomepageBlocks/LetsTalkSection';
import { Seo } from '../../components/SEO/Seo';
import { HeroSection } from '../../components/WorkBlocks/HeroSection';
import { ProjectsPreviewSection } from '../../components/WorkBlocks/ProjectsPreviewSection';
import { productionUrl } from '../../config';

import { getWorkData } from '../../lib/work';

export const getStaticProps = async () => {
  const allWorkData = await getWorkData();

  return {
    props: {
      allWorkData,
    },
  };
};

const Work = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const allWorks = props.allWorkData;

  return (
    <div>
      <Seo
        title="Work"
        pageRelativeUrl="/work"
        description="Dimash Kamerdinov: React & Next.js Developer | Web & Mobile Apps Portfolio"
        image={`${productionUrl}/images/meta/og-image.png`}
      />
      <HeroSection />
      <div sx={{ mb: ['140px', '140px', '240px'] }}>
        <ProjectsPreviewSection projects={allWorks} />
      </div>
      <div sx={{ mb: ['60px', '60px', '160px'] }}>
        <LetsTalkSection />
      </div>
    </div>
  );
};

export default Work;
