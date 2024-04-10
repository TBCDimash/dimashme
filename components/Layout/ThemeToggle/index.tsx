import React from 'react';
import { useColorMode } from 'theme-ui';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export function ThemeToggle(): React.ReactElement {
  const [loaded, setLoaded] = React.useState(false);
  const [currentTheme, setTheme] = useColorMode();

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded ? (
    <button
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '44px',
        height: '22px',
        border: 'none',
        background: 'transparent',
        padding: '0',
        margin: '0',
        cursor: 'pointer',
      }}
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  ) : (
    <></>
  );
}
