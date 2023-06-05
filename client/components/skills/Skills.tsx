'use client';

import { Skill } from '../skill/Skill';
import { Spring } from '../spring/Spring';
import { Typography } from '@material-tailwind/react';
import { MVerticalTabs } from '../verticalTabs/VerticalTabs';
import { motion } from 'framer-motion';
export const Skills = () => {
  const animation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="container py-16 border-t-blue-500 z-10"
    >
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full">
        <div>
          <div className="order-1 md:order-2 flex flex-col h-full">
            <motion.div custom={1} variants={animation} className="mb-8">
              {' '}
              <Typography
                className="text-center mb-8 dark:text-white"
                variant="h2"
                color="blue-gray"
              >
                My Skills
              </Typography>
              <p className="mt-4 text-blue-gray-800 text-sm dark:text-blue-gray-100 bg-blue-gray-50 dark:bg-blue-gray-900 rounded-lg">
                See fully what skills I have and perform, to develop the project for you.
              </p>
            </motion.div>
            <MVerticalTabs custom={2} variants={animation} />
          </div>
        </div>
        <div>
          {' '}
          <Spring />
        </div>
      </div>
    </motion.section>
  );
};

// const skills = [
//   { title: 'HTML' },
//   { title: 'CSS / SCSS / SASS' },
//   { title: 'JavaScript' },
//   { title: 'TypeScript' },
//   { title: 'React' },
//   { title: 'Node.js' },
//   { title: 'Next.js' },
//   { title: 'Redux-toolkit' },
//   { title: 'Express.js' },
//   { title: 'MongoDB' },
//   { title: 'Firebase' },
//   { title: 'Git / Github / Gitlab' },
//   { title: 'Tailwind CSS' },
//   { title: 'Bootstrap' },
//   { title: 'Material UI' },
//   { title: 'Css module' },
//   { title: 'Styled components' },
//   { title: 'REST API' },
//   { title: 'Figma' },
//   { title: 'IndexedDB' },
//   { title: 'Gulp' },
//   { title: 'BEM Methodology' },
// ];
