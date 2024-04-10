import * as React from 'react';
import { SVGProps } from 'react';
import { useThemeUI } from 'theme-ui';

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useThemeUI();
  return (
    <svg width={46} height={31} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.5 17.527v.5h35.161l-8.484 8.484-.354.354.354.353 2.495 2.495.353.353.354-.353 13.596-13.596.353-.354-.353-.353L30.379 1.814l-.354-.354-.353.354-2.495 2.494-.354.354.354.353 8.484 8.484H.5V17.527Z"
        stroke={`${theme.colors?.primary}`}
      />
    </svg>
  );
};
