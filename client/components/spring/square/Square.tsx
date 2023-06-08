import * as React from 'react';
import { motion, useSpring, MotionValue } from 'framer-motion';
import { distance } from '@popmotion/popcorn';

interface ActiveSquare {
  row: number;
  col: number;
}

interface SquareProps {
  active: ActiveSquare;
  setActive: React.Dispatch<React.SetStateAction<ActiveSquare>>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  image: string;
}
export const Square: React.FC<SquareProps> = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  image,
}) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className="w-[30px] h-[30px]  sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] p-0 title:text-red z-50"
      style={{
        backgroundImage: `url('/skills/${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',

        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    />
  );
};
