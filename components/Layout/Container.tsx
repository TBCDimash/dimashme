import React from 'react';

interface ContainerProps {
  withPadding?: boolean;
  mobileFriendly?: boolean;
  fullWidth?: boolean;
}

export function Container({
  children,
  withPadding = true,
  mobileFriendly = false,
  fullWidth = false,
}: React.PropsWithChildren<ContainerProps>): React.ReactElement {
  return (
    <div
      sx={{
        px: withPadding ? ['20px', '40px', '60px'] : undefined,
        // TODO: move to theme, check header mobile icon as well
        maxWidth: fullWidth
          ? '100%'
          : [mobileFriendly ? '560px' : '1440px', mobileFriendly ? '600px' : '1440px', '1440px'],
        width: '100%',
        mx: 'auto',
      }}
    >
      {children}
    </div>
  );
}
