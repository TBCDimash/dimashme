import React, { useRef } from 'react';
import { Text } from 'theme-ui';
import { motion } from 'framer-motion';

import { Container } from '../components/Layout/Container';
import { easings } from '../components/Layout/Menu/easings';

function Playground(): React.ReactNode {
  const env = process.env.NODE_ENV;
  const isDevelopment = env === 'development';

  if (!isDevelopment) {
    return null;
  }

  return (
    <Container>
      <motion.div
        sx={{
          width: '500px',
          height: '500px',
          background: 'red',
        }}
        onMouseMove={event => {
          console.log(event.pageX);
          console.log(event.pageY);
        }}
      ></motion.div>
    </Container>
  );
}

export default Playground;

const MotionText = motion(Text);
