import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'ChampionGothic';
        src: url('/fonts/champion-gothic/ChampionGothic-Bantamweight.woff') format('woff');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'NeueMontreal';
        src: url('/fonts/neue-montreal/NeueMontreal-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);
