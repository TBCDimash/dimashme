import React from 'react';

import { Text as TIText } from 'theme-ui';

interface TextProps {
  text: string;
  size: '12' | '16' | '18' | '24';
  isCaps?: boolean;
  isItalic?: boolean;
  withBottomPadding?: boolean;
}

export function Text({
  text,
  size,
  isItalic = false,
  isCaps = false,
  withBottomPadding = true,
}: TextProps): React.ReactElement {
  return (
    <div sx={{ overflow: 'hidden', pb: withBottomPadding ? ['40px'] : undefined }}>
      <TIText
        variant="normal"
        sx={{
          fontSize:
            size === '12'
              ? ['12px']
              : size === '16'
              ? ['16px', '16px', '16px']
              : size === '18'
              ? ['18px']
              : ['20px', '20px', '24px'],
          textTransform: isCaps ? 'uppercase' : undefined,
          fontStyle: isItalic ? 'italic' : undefined,
        }}
      >
        {text}
      </TIText>
    </div>
  );
}
