import { SVGProps } from 'react';

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.767 2v10.366L4.005 8.605 3 9.609l5.477 5.478 5.478-5.478-1.005-1.004-3.762 3.761V2H7.767Z"
        sx={{ fill: 'primary' }}
      />
    </svg>
  );
}
