import { NextSeo } from 'next-seo';
import { productionUrl } from '../../config';

interface SeoProps {
  title?: string;
  description?: string;
  pageRelativeUrl?: string;
  image?: string;
}

export function Seo(props: SeoProps): React.ReactElement {
  return (
    <NextSeo
      title={props.title ?? 'Dimash Kamerdinov'}
      description={
        props.description ??
        'Showcasing the cutting-edge web and mobile app projects developed by Dimash Kamerdinov, an expert in React and Next.js.'
      }
      openGraph={{
        url: props.pageRelativeUrl ? `${productionUrl}${props.pageRelativeUrl}` : 'https://dimash.me',
        title: props.title ?? 'Dimash Kamerdinov',
        description:
          props.description ??
          'Showcasing the cutting-edge web and mobile app projects developed by Dimash Kamerdinov, an expert in React and Next.js',
        images: [
          {
            url: props.image ?? `${productionUrl}/images/meta/og-image.png`,
            width: 1200,
            height: 630,
            alt: props.title ?? 'Dimash Kamerdinov',
          },
        ],
      }}
      twitter={{
        handle: '@vjkamer',
        cardType: 'summary_large_image',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${productionUrl}/images/meta/favicon.ico`,
        },
      ]}
    />
  );
}
