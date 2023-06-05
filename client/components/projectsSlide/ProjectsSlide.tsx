'use client';

import { v4 as uuidv4 } from 'uuid';
import { Carousel } from '../carousel/Carousel';
import { motion } from 'framer-motion';

import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

const projects = [
  { title: 'Online-shop', id: uuidv4() },
  { title: 'CRM-transportation', id: uuidv4() },
  { title: 'Notes-app', id: uuidv4() },
  { title: 'Posts-app', id: uuidv4() },
  { title: 'Animation-app', id: uuidv4() },
  { title: 'Landing-page', id: uuidv4() },
  { title: 'Shop', id: uuidv4() },
  { title: 'Food-shop', id: uuidv4() },
  { title: 'Countries-flags', id: uuidv4() },
  { title: 'Pokemon', id: uuidv4() },
  { title: 'Marvel', id: uuidv4() },
  { title: 'Movies', id: uuidv4() },
  { title: 'Shop-characters', id: uuidv4() },
  { title: 'Dashboard', id: uuidv4() },
  { title: 'Med-clinic', id: uuidv4() },
  { title: 'The Ham', id: uuidv4() },
  { title: 'Forkio', id: uuidv4() },
];

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
    <motion.section initial="hidden" whileInView="visible" className="containder py-16 z-10">
      <motion.div variants={textAnimation}>
        <Typography className="text-center mb-8 dark:text-white" variant="h2" color="blue-gray">
          My Projects
        </Typography>
      </motion.div>
      <Carousel />
    </motion.section>
  );
};
