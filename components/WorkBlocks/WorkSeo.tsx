import React from 'react';
import { productionUrl } from '../../config';
import { WorkMeta } from '../../lib/work';
import { Seo } from '../SEO/Seo';

interface WorkSeoProps {
  meta: WorkMeta;
}

export function WorkSeo(props: React.PropsWithChildren<WorkSeoProps>): React.ReactElement {
  const { children, meta } = props;

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        image={`${productionUrl}${meta.ogImage}`}
        pageRelativeUrl={`/work/${meta.slug}`}
      />
      {children}
    </>
  );
}
