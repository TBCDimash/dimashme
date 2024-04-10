import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text } from 'theme-ui';
import { isMobile } from 'react-device-detect';

import { useCursorContext } from './context';

export function CursorWrapper({ children }: React.PropsWithChildren): React.ReactElement {
  const { cursorVariant } = useCursorContext();
  const [isInitialized, setIsInitialized] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const transitionMove =
    mousePosition.x !== 0 && mousePosition.y !== 0 ? { type: 'spring', mass: 0.6 } : { duration: 0 };

  const variants = {
    initial: {
      opacity: 0,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        duration: 0,
      },
    },
    default: {
      opacity: 1,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      fontSize: '6px',
      transition: transitionMove,
    },
    project: {
      opacity: 1,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      fontSize: '16px',
    },
  };

  const mobileVariants = {
    initial: {
      opacity: 0,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        duration: 0,
      },
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      onMouseMove={event => {
        if (!isInitialized) {
          setTimeout(() => {
            setIsInitialized(true);
          }, 50);
        }
        setMousePosition({ x: event.clientX, y: event.clientY });
      }}
    >
      {children}
      <motion.div
        variants={isMobile ? mobileVariants : variants}
        sx={{
          opacity: 0,
          position: 'fixed',
          top: 0,
          left: 0,
          // Move to theme
          zIndex: 5000,
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'primary',
          color: 'black',
          borderRadius: '100%',
          pointerEvents: 'none',
        }}
        animate={isInitialized ? cursorVariant : 'initial'}
        transition={spring}
      >
        <Text
          variant="normalCaps"
          sx={{
            fontSize: 'inherit',
            // TODO: move to theme
            color: 'textReverse',
            pointerEvents: 'none',
          }}
        >
          {cursorVariant === 'project' && 'View'}
        </Text>
      </motion.div>
    </motion.div>
  );
}
