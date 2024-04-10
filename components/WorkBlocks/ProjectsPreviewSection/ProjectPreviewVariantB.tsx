import React from 'react';
import { Grid, Heading, Link, Paragraph, Text, useThemeUI } from 'theme-ui';
import NextImage from 'next-image-export-optimizer';
import NextLink from 'next/link';

import { Container } from '../../Layout/Container';
import { CursorProjectWrapper } from '../../Layout/Cursor/CursorProjectWrapper';
import { WorkMetaDataCommon } from '../types';
import { ArrowRightIcon } from './ArrowRightIcon';

export interface WorkPreviewVariantBProps extends WorkMetaDataCommon {
  variant: 'title-on-right';
  image660x503: string;
}

export function ProjectPreviewVariantB({
  title,
  description,
  slug,
  image660x503,
}: WorkPreviewVariantBProps): React.ReactElement {
  const { theme } = useThemeUI();
  return (
    <Container withPadding={false} mobileFriendly>
      <Grid
        columns={[1, 1, '760fr 93fr 588fr', '660fr 163fr 598fr']}
        px={['20px', '40px', '0']}
        mb={['40px', '40px', '40px', '60px']}
        gap={0}
      >
        {/* Text */}
        <div
          sx={{
            gridRow: [1],
            gridColumn: ['1 / span 1', '1 / span 1', '3 / span 1'],
            mr: [0, 0, '60px', '60px'],
            mb: ['40px', '40px', '40px', '60px'],
          }}
        >
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
        <div
          sx={{
            gridRow: [2, 2, 1, 1],
            gridColumn: ['1 / span 1'],
            justifySelf: [undefined, undefined, 'end'],
          }}
        >
          <CursorProjectWrapper>
            <NextLink href={`/work/${slug}`} passHref>
              <Link variant="unstyledNoCursor">
                <NextImage src={image660x503} width={660} height={503} placeholder="blur" />
              </Link>
            </NextLink>
          </CursorProjectWrapper>
        </div>
      </Grid>
    </Container>
  );
}
