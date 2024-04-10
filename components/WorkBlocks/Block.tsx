import React from 'react';

interface BlockProps {}

export function Block({ children }: React.PropsWithChildren<BlockProps>): React.ReactElement {
  return <div sx={{ mb: ['40px', '40px', '120px'] }}>{children}</div>;
}
