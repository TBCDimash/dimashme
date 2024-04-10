import React from 'react';
import { Grid, Paragraph, Text } from 'theme-ui';
import { Container } from '../Layout/Container';

import { MarqueeText } from '../basic/MarqueeText';

export function WorksIntroSection(): React.ReactElement {
  return (
    <div>
      <div sx={{ mb: ['40px', '40px', '60px', '80px'] }}>
        <MarqueeText text="Featured Works" />
      </div>
      <Container mobileFriendly>
        <Grid columns={[1, 1, 'auto 1fr']} gap={0}>
          <div sx={{ width: ['100%', '100%', '405px', '537px'], mb: ['40px', '40px', '0'] }}>
            <Text variant="normalPrimary" sx={{ fontSize: '24px' }}>
              Business-Driven
              <br />
              Technically Sound
              <br />
              User-Centric
            </Text>
          </div>
          <div sx={{ ml: [0, 0, '64px'], maxWidth: ['520px', '520px', '520px', '615px'], justifySelf: ['end'] }}>
            <Paragraph variant="normal" sx={{ mb: ['18px'], fontSize: '18px' }}>
              Specializing in React and Next.js, I bridge brand goals with state-of-the-art digital solutions. My work
              prioritizes business objectives, leveraging modern web technologies to meet and surpass these targets.
            </Paragraph>
            <Paragraph variant="normal" sx={{ fontSize: '18px' }}>
              My development process is deeply embedded in user-centric methodologies, ensuring the creation of engaging
              and intuitive web applications. This approach guarantees that our projects are not only technologically
              sophisticated but also perfectly aligned with user needs, transforming brand visions into accessible
              digital experiences
            </Paragraph>
          </div>
        </Grid>
      </Container>
    </div>
  );
}
