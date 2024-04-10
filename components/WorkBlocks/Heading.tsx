import React from 'react';
import { Text } from 'theme-ui';

interface HeadingProps {
  text: string;
  size: '100' | '140' | '180';
  color: 'primary' | 'text';
  withBottomPadding?: boolean;
}

export function Heading({ text, size, color, withBottomPadding = true }: HeadingProps): React.ReactElement {
  return (
    <div sx={{ overflow: 'hidden', pb: withBottomPadding ? '40px' : undefined }}>
      <Text
        variant="heading"
        sx={{
          fontSize:
            size === '100'
              ? ['72px', '72px', '100px']
              : size === '140'
              ? ['72px', '72px', '140px']
              : ['100px', '100px', '180px'],
          color,
        }}
      >
        {text}
      </Text>
    </div>
  );
}
