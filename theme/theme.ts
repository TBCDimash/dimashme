import type { Theme } from 'theme-ui';

export const theme: Theme = {
  config: {
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: false,
  },
  breakpoints: ['600px', '900px', '1200px', '1440px'],
  fonts: {
    body: 'NeueMontreal, sans-serif',
    heading: 'ChampionGothic, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 400,
  },
  lineHeights: {
    body: 1.5,
    heading: 0.9,
  },
  colors: {
    text: '#FFFFFF',
    textReverse: '#363636',
    textPale: '#E7E8DB',
    background: '#181818',
    backgroundReverse: '#ECEAE6',
    primary: '#FFC579',
    modes: {
      light: {
        text: '#363636',
        textReverse: '#FFFFFF',
        textPale: '#363636',
        background: '#ECEAE6',
        backgroundReverse: '#181818',
        primary: '#dc7600',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontSize: '30px',
      textTransform: 'uppercase',
      color: 'text',
      lineHeight: 0.9,
    },
    headingPrimary: {
      variant: 'text.heading',
      color: 'primary',
    },
    normal: {
      fontFamily: 'body',
      fontSize: '18px',
      color: 'textPale',
    },
    normalPrimary: {
      variant: 'text.normal',
      color: 'primary',
    },
    normalCaps: {
      variant: 'text.normal',
      textTransform: 'uppercase',
    },
    capsSmall: {
      variant: 'text.normal',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
    capsSmallPrimary: {
      variant: 'text.capsSmall',
      color: 'primary',
    },
  },
  links: {
    normalPrimary: {
      textDecoration: 'none',
      color: 'primary',
      fontSize: '18px',
    },
    unstyled: {
      textDecoration: 'none',
    },
    unstyledNoCursor: {
      variant: 'links.unstyled',
      cursor: 'none',
    },
    normalCaps: {
      variant: 'text.normalCaps',
      textDecoration: 'none',
      '::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: '2px',
        background: 'text',
        transition: 'width .3s',
      },
      ':hover::after': {
        width: '100%',
      },
    },
    capsSmall: {
      variant: 'text.capsSmall',
      textDecoration: 'none',
      '::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: '2px',
        background: 'text',
        transition: 'width .3s',
      },
      ':hover::after': {
        width: '100%',
      },
    },
    capsSmallActive: {
      variant: 'text.capsSmall',
      textDecoration: 'none',
      '::after': {
        content: '""',
        display: 'block',
        height: '2px',
        background: 'text',
        transition: 'width .3s',
        width: '100%',
      },
    },
    capsSmallPrimary: {
      variant: 'text.capsSmallPrimary',
      textDecoration: 'none',
      '::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: '2px',
        background: 'primary',
        transition: 'width .3s',
      },
      ':hover::after': {
        width: '100%',
      },
    },
    button: {
      variant: 'text.capsSmall',
      textDecoration: 'none',
      px: '24px',
      py: '6px',
      borderRadius: '20px',
      border: '1px solid',
      borderColor: 'text',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
};
