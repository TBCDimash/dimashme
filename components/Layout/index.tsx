import React from 'react';

import { CursorWrapper } from './Cursor';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Header } from './Header';
import { useMenu } from './Menu/useMenu';
import useFontFaceObserver from 'use-font-face-observer';

export function Layout({ children }: React.PropsWithChildren): React.ReactElement {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const isFontLoaded = useFontFaceObserver([
    {
      family: 'ChampionGothic',
    },
  ]);

  return (
    <CursorWrapper>
      <div sx={{ display: isFontLoaded ? 'block' : 'none' }}>
        <div
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            overflow: 'hidden',
          }}
        >
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main sx={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </div>
      </div>
    </CursorWrapper>
  );
}
