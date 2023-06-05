'use client';
import { motion } from 'framer-motion';
import { Photo } from '../photo/Photo';
import { Typography } from '@material-tailwind/react';

export const About = () => {
  const photoAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        // delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="grid gap-10 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 container py-16 z-10 overflow-x-hidden"
    >
      <motion.div variants={photoAnimation} className="order-2  md:order-1">
        <Photo outline={true} />
      </motion.div>
      <motion.div custom={2} variants={textAnimation} className="order-1 md:order-2">
        <Typography className="text-center mb-8 dark:text-white " variant="h2" color="blue-gray">
          About Me
        </Typography>

        <p className="mt-4 text-blue-gray-800 text-sm dark:text-blue-gray-100 bg-blue-gray-50 dark:bg-blue-gray-900 rounded-lg">
          I am a Junior front-end developer with a desire to learn and develop in a team
          environment. I completed the &ldquo;Front-end&ldquo; course at the DAN.IT Education. I am
          a developer with solid theoretical base experience in creating responsive websites. I
          actively practice Frontend and delve into the Backend.
        </p>
      </motion.div>
    </motion.section>
  );
};
