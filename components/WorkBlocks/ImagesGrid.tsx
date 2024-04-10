import React from 'react';
import { Grid } from 'theme-ui';

export function ImagesGrid({ children }: React.PropsWithChildren): React.ReactElement {
  return (
    <Grid columns={[1, 1, 2]} sx={{ columnGap: '40px', rowGap: '40px' }}>
      {children}
    </Grid>
  );
}
