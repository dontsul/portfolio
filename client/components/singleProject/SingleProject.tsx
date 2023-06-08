'use client';

import { FC } from 'react';

import { ProjectProps } from '../projectsList/project/Project';
import Image from 'next/image';
import { Round } from '../round/Round';
import { motion } from 'framer-motion';

export const SingleProject: FC<ProjectProps> = ({ project }) => {
  const URL = process.env.NEXT_PUBLIC_URL;

  const blocksAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };
  const techAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.4,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const photoAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flex flex-col pt-12 pb-16 md:pt-18 z-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <motion.div variants={photoAnimation} className="col-span-3 lg:col-span-2 z-10">
          <Image
            className="rounded-md z-10"
            src={`${URL}images/projects/${project.image}`}
            alt={project.title}
            width={1000}
            height={800}
          />
        </motion.div>
        <div className="col-span-3 lg:col-span-1 z-10">
          <motion.h2
            custom={1}
            variants={blocksAnimation}
            className="sm:text-lg md:text-2xl font-bold mb-4 dark:text-white z-10"
          >
            {project.title}
          </motion.h2>
          <motion.p
            custom={2}
            variants={blocksAnimation}
            className="mb-4 text-blue-gray-800 text-xs dark:text-blue-gray-100 z-10 bg-blue-gray-50 dark:bg-blue-gray-900 rounded-lg"
          >
            {project.description}
          </motion.p>
          <motion.div custom={3} variants={blocksAnimation} className="mb-4">
            <strong className="text-blue-gray-800 text-md dark:text-blue-gray-100 z-10">
              Technologies used:
            </strong>
            <ul>
              {project.technologies.map((t: string, index: number) => {
                return (
                  <motion.li
                    custom={index + 1}
                    variants={techAnimation}
                    key={project._id}
                    className="flex items-center mb-2"
                  >
                    <Round />
                    <span className="text-blue-gray-800 text-xs dark:text-blue-gray-100 z-10">
                      {t}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
          <motion.div custom={4} variants={blocksAnimation} className="mb-4">
            <strong className="text-blue-gray-800 text-md dark:text-blue-gray-100 z-10">
              Links:
            </strong>
            <ul>
              <li>
                <a
                  className="text-blue-gray-800 text-xs dark:text-blue-gray-100 hover:text-black dark:hover:text-blue-gray-200 z-10"
                  href={project.links.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  className="text-blue-gray-800 text-xs dark:text-blue-gray-100 hover:text-black dark:hover:text-blue-gray-200 z-10"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
