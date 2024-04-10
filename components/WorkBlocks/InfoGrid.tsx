import React from 'react';
import { Grid } from 'theme-ui';

interface InfoGridProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export function InfoGrid({ left, right }: InfoGridProps): React.ReactElement {
  return (
    <Grid columns={[1, 1, 1, '3fr 3fr 5fr 1fr']} sx={{ columnGap: 0, rowGap: '40px' }}>
      <div sx={{ alignSelf: 'start' }}>{left}</div>
      <div></div>
      <div>{right}</div>
    </Grid>
  );
}
