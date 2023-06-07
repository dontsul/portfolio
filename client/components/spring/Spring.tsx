import { FC, useState } from 'react';
import { motion, useMotionValue, MotionValue } from 'framer-motion';
import { Square } from './square/Square';
const images = [
  ['html.png', 'css.png', 'js.png', 'react.png', 'redux.png'],
  ['ts.png', 'nodejs.png', 'mongodb.png', 'express.png', 'git.png'],
  ['github.png', 'gitlab.png', 'firebase.png', 'tailwind.png', 'materialui.png'],
  ['bootstrap.png', 'sass.png', 'nextjs.png', 'styled.png', 'webpack.png'],
  ['gulp.png', 'rest.png', 'figma.png', 'npm.png', 'vscode.png'],
];

export const Spring: FC = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const skillsAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.1,
      rotate: '360deg',
      x: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" className="max-w-full z-50">
      <motion.div
        animate={{ '--base-hue': 360 } as any}
        initial={{ '--base-hue': 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
        style={{ width: '100%', height: '100%' }}
      >
        <motion.div
          variants={skillsAnimation}
          className="gap-5"
          style={{
            display: 'grid',

            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            margin: '0 auto',
            position: 'relative',
            perspective: 500,
          }}
        >
          {images.map((row, rowIndex) =>
            row.map((image, colIndex) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
                image={image}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
