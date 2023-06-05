'use client';
import styles from './styles.module.css';
import { motion, useScroll } from 'framer-motion';

interface ScrollProps {
  children: JSX.Element;
}

export default function Scroll({ children }: ScrollProps) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
      {children}
    </>
  );
}
