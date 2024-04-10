import React from 'react';
import { Grid, Heading, Link, Paragraph, Text, useThemeUI } from 'theme-ui';
import NextImage from 'next-image-export-optimizer';
import NextLink from 'next/link';

import { Container } from '../../Layout/Container';
import { CursorProjectWrapper } from '../../Layout/Cursor/CursorProjectWrapper';
import { WorkMetaDataCommon } from '../types';
import { ArrowRightIcon } from './ArrowRightIcon';

export interface WorkPreviewVariantAProps extends WorkMetaDataCommon {
  variant: 'title-on-left';
  image822x624: string;
}

export function ProjectPreviewVariantA({
  title,
  slug,
  description,

  image822x624,
}: WorkPreviewVariantAProps): React.ReactElement {
  const { theme } = useThemeUI();

  return (
    <Container withPadding={false} mobileFriendly>
      <Grid
        columns={[1, 1, '620fr 0 822fr', '540fr 80fr 822fr']}
        px={['20px', '40px', '0']}
        mb={['40px', '40px', '40px', '60px']}
        gap={0}
      >
        {/* Text */}
        <div sx={{ ml: [0, 0, '60px', '60px'], mb: ['40px', '40px', '40px', '60px'], mr: [0, 0, '16px', '40px'] }}>
          <CursorProjectWrapper>
            <NextLink href={`/work/${slug}`} passHref>
              <Link variant="unstyledNoCursor">
                <Heading variant="heading" sx={{ fontSize: ['90px', '90px', '90px', '140px'], mb: ['40px'] }}>
                  {title}
                </Heading>
              </Link>
            </NextLink>
          </CursorProjectWrapper>
          <Paragraph variant="normal" sx={{ ml: [0, 0, 0, '100px'], width: ['100%', '100%', '100%', '315px'] }}>
            {description}
          </Paragraph>
        </div>
        <div></div>
        {/* Image 1 */}
        <div sx={{ justifySelf: [undefined, undefined, 'end'] }}>
          <CursorProjectWrapper>
            <NextLink href={`/work/${slug}`} passHref>
              <Link variant="unstyledNoCursor">
                <NextImage src={image822x624} width={822} height={624} />
              </Link>
            </NextLink>
          </CursorProjectWrapper>
        </div>
      </Grid>
    </Container>
  );
}
