import { SVGProps } from 'react';

export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={10} height={10} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.877 9.66V2.694L9.13 5.947 10 5.078 5.262.34.523 5.078l.87.87 3.254-3.255v6.968h1.23Z"
        sx={{ fill: 'primary' }}
      />
    </svg>
  );
}
