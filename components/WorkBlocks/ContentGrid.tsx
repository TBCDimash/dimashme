import React from 'react';
import { Grid } from 'theme-ui';

interface ContentGridProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export function ContentGrid({ left, right }: ContentGridProps): React.ReactElement {
  return (
    <Grid columns={[1, 1, 1, '4fr 2fr 5fr 1fr']} sx={{ columnGap: 0, rowGap: '10px' }}>
      <div>{left}</div>
      <div></div>
      <div>{right}</div>
      <div></div>
    </Grid>
  );
}
