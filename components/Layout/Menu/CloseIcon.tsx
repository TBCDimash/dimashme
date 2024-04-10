import { SVGProps } from 'react';

export const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path sx={{ stroke: 'text' }} d="m1.522.646 22.627 22.628M.815 23.274 23.442.646" />
    </svg>
  );
};
