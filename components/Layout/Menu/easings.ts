export const easings: Record<
  | 'noEasing'
  | 'power2In'
  | 'power2Out'
  | 'power2InOut'
  | 'power3In'
  | 'power3Out'
  | 'power3InOut'
  | 'power4In'
  | 'power4Out'
  | 'power4InOut',
  [number, number, number, number]
> = {
  noEasing: [0.32, 0.94, 0.6, 1.0],
  power2In: [0.4, 0.0, 0.68, 0.06],
  power2Out: [0.32, 0.94, 0.6, 1.0],
  power2InOut: [0.66, 0.0, 0.34, 1.0],
  power3In: [0.52, 0.0, 0.74, 0.0],
  power3Out: [0.26, 1.0, 0.48, 1.0],
  power3InOut: [0.76, 0.0, 0.24, 1.0],
  power4In: [0.64, 0.0, 0.78, 0.0],
  power4Out: [0.22, 1.0, 0.36, 1.0],
  power4InOut: [0.84, 0.0, 0.16, 1.0],
};
