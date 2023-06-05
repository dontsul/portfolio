'use client ';
import { motion, useScroll } from 'framer-motion';

export const LineScroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      {' '}
      <motion.div style={{ scaleX: scrollYProgress }} />
    </div>
  );
};
