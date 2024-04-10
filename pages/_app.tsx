import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import 'normalize.css/normalize.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import { theme } from '../theme/theme';
import { GlobalStyles } from '../theme/global-styles';
import { Layout } from '../components/Layout';
import { CursorContextProvider } from '../components/Layout/Cursor/context';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CursorContextProvider>
        <GlobalStyles />
        <Layout>
          <GoogleAnalytics trackPageViews gaMeasurementId="UA-74292462-5" />
          <Component {...pageProps} />
        </Layout>
      </CursorContextProvider>
    </ThemeProvider>
  );
}

export default App;
