import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

import { useCursorContext } from './context';

export function CursorProjectWrapper({ children }: React.PropsWithChildren): React.ReactElement {
  const { setCursorVariant, cursorVariant } = useCursorContext();

  useEffect(() => {
    return () => setCursorVariant('default');
  }, [setCursorVariant]);

  return (
    <motion.div
      onMouseEnter={() => cursorVariant !== 'project' && setCursorVariant('project')}
      onMouseLeave={() => cursorVariant !== 'default' && setCursorVariant('default')}
      onClick={() => cursorVariant !== 'default' && setCursorVariant('default')}
      sx={{ cursor: isMobile ? 'auto' : 'none' }}
    >
      {children}
    </motion.div>
  );
}
