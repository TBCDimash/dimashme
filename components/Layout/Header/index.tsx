import React, { useState } from 'react';
import { Text, Grid } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';

import { Container } from '../Container';
import { MenuIcon } from '../../basic/MenuIcon';
import { Logo } from './Logo';
import { MenuDesktop } from './MenuDesktop';
import { UseMenuValues } from '../Menu/useMenu';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { ThemeToggle } from '../ThemeToggle';

type HeaderProps = UseMenuValues;

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps): React.ReactElement {
  const [isHeaderInViewport, setIsHeaderInViewport] = useState(true);

  return (
    <Container fullWidth>
      <motion.div
        onViewportEnter={() => setIsHeaderInViewport(true)}
        onViewportLeave={() => setIsHeaderInViewport(false)}
      >
        <Grid as="header" columns={[2, 2, '1fr auto 1fr']} py={['30px']}>
          {/* Theme Toggle */}
          <div sx={{ display: ['none', 'none', 'flex'], alignItems: 'center' }}>
            <ThemeToggle />
          </div>
          {/* Logo mobile */}
          <div sx={{ display: ['flex', 'flex', 'none'], justifyContent: 'flex-start' }}>
            <Logo variant="text" />
          </div>
          {/* Logo desktop */}
          <div sx={{ display: ['none', 'none', 'flex'], justifyContent: 'center' }}>
            <Logo variant="primary" />
          </div>
          {/* Menu desktop */}
          <div sx={{ display: ['none', 'none', 'flex'], justifyContent: 'flex-end', alignItems: 'center' }}>
            <MenuDesktop />
          </div>
          {/* Menu mobile */}
          <div sx={{ display: ['flex', 'flex', 'none'], justifyContent: 'flex-end', alignItems: 'center' }}>
            <div
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <MenuIcon />
            </div>
          </div>
        </Grid>
      </motion.div>
      <div
        sx={{
          position: 'fixed',
          // TODO: move to theme
          zIndex: 2000,
          // TODO: take from theme
          right: ['22px', '40px', '60px', '60px'],
          top: '30px',
        }}
      >
        <AnimatePresence>
          {!isHeaderInViewport && (
            <motion.div
              onClick={() => {
                setIsMenuOpen(true);
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: ['75px', '75px', '95px'],
                height: ['75px', '75px', '95px'],
                bg: 'text',
                borderRadius: '100%',
                cursor: 'pointer',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MenuIcon color="textReverse" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
