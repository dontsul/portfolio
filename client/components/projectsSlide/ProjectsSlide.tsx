'use client';

import { Carousel } from '../carousel/Carousel';
import { motion } from 'framer-motion';
import { Typography } from '@material-tailwind/react';

export const ProjectsSlide = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="containder py-16 z-10"
      id="projects"
    >
      <motion.div variants={textAnimation}>
        <Typography className="text-center mb-8 dark:text-white" variant="h2" color="blue-gray">
          My Projects
        </Typography>
      </motion.div>
      <Carousel />
    </motion.section>
  );
};
