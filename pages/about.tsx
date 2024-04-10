import type { NextPage } from 'next';

import { AboutSection } from '../components/AboutPageBlocks/AboutSection';
import { Seo } from '../components/SEO/Seo';
import { productionUrl } from '../config';

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="About"
        pageRelativeUrl="/about"
        description="Dimash Kamerdinov: Expert Frontend Developer for Web & Mobile Apps"
        image={`${productionUrl}/images/meta/og-image.png`}
      />
      <AboutSection />
    </>
  );
};

export default Home;
