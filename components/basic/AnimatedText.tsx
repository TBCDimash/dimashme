import React from 'react';
import { Text, ThemeUICSSObject } from 'theme-ui';
import { motion } from 'framer-motion';
import { easings } from '../Layout/Menu/easings';

const MotionText = motion(Text);

interface AnimatedTextProps {
  text: string;
  animationDelay?: number;
  customSx?: ThemeUICSSObject;
  customVariant: string;
}

const commonAnimationDelay = 0.5;

function generateItemVariants(animationDelay?: number) {
  const delay = animationDelay ? { delay: animationDelay } : {};
  return {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 1,
        ease: easings.power3Out,
        ...delay,
      },
    },
  };
}

export function AnimatedText({
  text,
  animationDelay = 0,
  customVariant,
  customSx,
}: AnimatedTextProps): React.ReactElement {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: animationDelay + commonAnimationDelay,
        staggerChildren: 0.02,
      },
    },
  };

  return (
    <motion.div
      sx={{
        overflow: 'hidden',
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {text.split('').map((char, index) => {
        if (char === ' ') {
          return (
            <Text key={`${char}-${index}`} variant={customVariant} sx={customSx}>
              {' '}
            </Text>
          );
        }
        return (
          <MotionText
            key={`${char}-${index}`}
            variant={customVariant}
            sx={{
              display: 'inline-block',
              ...customSx,
            }}
            variants={generateItemVariants()}
          >
            {char}
          </MotionText>
        );
      })}
    </motion.div>
  );
}

interface AnimatedDivProps {
  animationDelay?: number;
}
export function AnimatedDiv({
  children,
  animationDelay,
}: React.PropsWithChildren<AnimatedDivProps>): React.ReactElement {
  return (
    <div sx={{ overflow: 'hidden' }}>
      <motion.div
        variants={generateItemVariants(animationDelay ? animationDelay + commonAnimationDelay : commonAnimationDelay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
