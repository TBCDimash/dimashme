import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { UseMenuValues } from './useMenu';
import { easings } from './easings';

type AnimationProps = UseMenuValues;

export function Animation({ children, isMenuOpen }: React.PropsWithChildren<AnimationProps>): React.ReactElement {
  const curtainAnimationTimes = transformDurationsToTimes([0, 0.8, 0.3, 0, 0.2, 0.3, 0.8]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = '';
      }}
    >
      {isMenuOpen && (
        <div
          key="menu"
          sx={{
            // TODO: move to theme
            zIndex: 10000,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
          }}
        >
          <motion.div
            sx={{
              zIndex: 10,
              position: 'relative',
              background: 'background',
              height: '100%',
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 0,
                delay: 1.2,
              },
            }}
          >
            {children}
          </motion.div>
          <motion.div
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            initial={{ zIndex: 15 }}
            animate={{
              zIndex: 5,
              transition: {
                zIndex: {
                  duration: 0,
                  delay: curtainAnimationTimes.duration,
                },
              },
            }}
            exit={{
              zIndex: 15,
              transition: {
                zIndex: {
                  duration: 0,
                },
              },
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                sx={{ fill: 'primary' }}
                vectorEffect="non-scaling-stroke"
                initial={{
                  d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
                }}
                animate={{
                  d: [
                    'M 0 100 V 100 Q 50 100 100 100 V 100 z',
                    'M 0 100 V 50 Q 50 0 100 50 V 100 z',
                    'M 0 100 V 0 Q 50 0 100 0 V 100 z',
                    'M 0 0 V 100 Q 50 100 100 100 V 0 z',
                    'M 0 0 V 100 Q 50 100 100 100 V 0 z',
                    'M 0 0 V 50 Q 50 0 100 50 V 0 z',
                    'M 0 0 V 0 Q 50 0 100 0 V 0 z',
                  ],
                }}
                exit={{
                  d: [
                    'M 0 0 V 0 Q 50 0 100 0 V 0 z',
                    'M 0 0 V 50 Q 50 100 100 50 V 0 z',
                    'M 0 0 V 100 Q 50 100 100 100 V 0 z',
                    'M 0 100 V 0 Q 50 0 100 0 V 100 z',
                    'M 0 100 V 0 Q 50 0 100 0 V 100 z',
                    'M 0 100 V 50 Q 50 100 100 50 V 100 z',
                    'M 0 100 V 100 Q 50 100 100 100 V 100 z',
                  ],
                }}
                transition={{
                  d: {
                    type: 'keyframes',
                    ease: [
                      easings.power4In,
                      easings.power2Out,
                      easings.power4In,
                      easings.power4In,
                      easings.power2In,
                      easings.power4Out,
                    ],
                    ...curtainAnimationTimes,
                  },
                }}
                onAnimationStart={() => {
                  document.body.style.overflow = 'hidden';
                }}
              />
            </svg>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function transformDurationsToTimes(durations: number[]): { times: number[]; duration: number } {
  let totalDuration = 0;
  const times = durations
    .map(duration => {
      totalDuration += duration;
      return totalDuration;
    })
    .map(time => {
      return time / totalDuration;
    });

  return { times, duration: totalDuration };
}
