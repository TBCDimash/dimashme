import { SVGProps } from 'react';
import { useThemeUI } from 'theme-ui';

export function MenuIcon(
  props: SVGProps<SVGSVGElement> & {
    color?: 'text' | 'textReverse';
  }
) {
  const { color = 'text' } = props;

  return (
    <svg width={28} height={35} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path sx={{ stroke: color }} strokeWidth={2} d="M0 12.5h28M0 20.5h28" />
    </svg>
  );
}
