import React from 'react';
import { Heading, Link, useThemeUI } from 'theme-ui';
import NextLink from 'next/link';

import { AnimatedText } from '../basic/AnimatedText';
import { Container as LayoutContainer } from '../Layout/Container';
import { CursorProjectWrapper } from '../Layout/Cursor/CursorProjectWrapper';
import { WorkMeta } from '../../lib/work';

interface ContainerProps {
  nextProject: WorkMeta;
}

export function Container({ children, nextProject }: React.PropsWithChildren<ContainerProps>): React.ReactElement {
  const { theme } = useThemeUI();

  return (
    <LayoutContainer mobileFriendly>
      <div sx={{ mt: ['80px', '80px', '120px'] }}>{children}</div>
      <div sx={{ pt: ['80px', '80px', '120px'] }}>
        <CursorProjectWrapper>
          <NextLink href={`/work/${nextProject.slug}`} passHref>
            <Link variant="unstyled">
              <div sx={{ display: 'flex', justifyContent: 'center' }}>
                <AnimatedText
                  text="next project"
                  customVariant="heading"
                  customSx={{
                    fontSize: ['110px', '170px', '250px', '360px'],
                    WebkitTextStroke: `1px ${theme.colors?.primary}`,
                    color: 'background',
                  }}
                />
              </div>
              <div sx={{ display: 'flex', justifyContent: 'center', transform: 'translateY(-75%)' }}>
                <div>
                  <Heading variant="heading" sx={{ fontSize: ['72px', '72px', '198px'] }}>
                    {nextProject.projectName}
                  </Heading>
                </div>
              </div>
            </Link>
          </NextLink>
        </CursorProjectWrapper>
      </div>
    </LayoutContainer>
  );
}
