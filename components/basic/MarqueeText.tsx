import React from 'react';
import Marquee from 'react-fast-marquee';
import { Text } from 'theme-ui';
import useFontFaceObserver from 'use-font-face-observer';

interface MarqueeTextProps {
  text: string;
  repeatText?: number;
}

export function MarqueeText({ text, repeatText = 7 }: MarqueeTextProps): React.ReactElement {
  const isFontLoaded = useFontFaceObserver([
    {
      family: 'ChampionGothic',
    },
  ]);

  return (
    <div
      sx={{
        py: ['20px', '20px', '25px', '30px'],
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'primary',
      }}
    >
      {isFontLoaded ? (
        <Marquee gradient={false} speed={25} sx={{ overflow: 'hidden' }}>
          <Text variant="headingPrimary" sx={{ fontSize: ['128px', '128px', '150px', '200px'], ml: '16px' }}>
            {` ${text} `.repeat(repeatText)}
          </Text>
        </Marquee>
      ) : (
        <Text variant="headingPrimary" sx={{ fontSize: ['128px', '128px', '150px', '200px'], ml: '16px' }}></Text>
      )}
    </div>
  );
}
