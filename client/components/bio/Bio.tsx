'use client';

import { Button } from '@material-tailwind/react';
import { ArrowLongRightIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { MIconBtnList } from '../iconBtnList/IconBtnList';
import { Photo } from '../photo/Photo';
import { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import Link from 'next/link';

export const Bio = () => {
  const textAnimation = {
    hidden: {
      x: -100,
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

  const photoAnimation = {
    hidden: {
      y: -300,
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
    <motion.section initial="hidden" whileInView="visible" className="z-10  overflow-x-hidden">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container pb-16">
        <div className="flex flex-col justify-between">
          <div className="mb-6 md:mb-0">
            <motion.div custom={1} variants={textAnimation} className="dark:text-white ">
              Hello, <span className="text-blue-500">I&apos;m</span>
            </motion.div>
            <motion.h1
              custom={2}
              variants={textAnimation}
              className="text-3xl font-bold mt-4 dark:text-white "
            >
              Vasyl Dontsul
            </motion.h1>
            <motion.h3
              custom={2}
              variants={textAnimation}
              className="text-lg text-blue-gray-600 dark:text-blue-gray-300 "
            >
              Fullstack Developer
            </motion.h3>
            <motion.p
              custom={3}
              variants={textAnimation}
              className="mt-4 text-blue-gray-800 text-sm dark:text-blue-gray-100 bg-blue-gray-50 dark:bg-blue-gray-900 rounded-lg"
            >
              I am a Fullstack developer and welcome you here. My commitment to excellence and
              passion for building web applications allows me to offer unique and innovative
              solutions. I am fully committed to creating quality code and following development
              best practices.
            </motion.p>
            <motion.div
              custom={4}
              variants={textAnimation}
              className="mt-16 flex xs:flex-col xs:gap-4 md:flex-row items-center justify-start "
            >
              <Link href={`/projects`} className="mb-8">
                <Button className="flex items-center gap-2 text-white font-semibold  bg-blue-500">
                  See projects <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <MIconBtnList custom={5} variants={textAnimation} />
        </div>
        <motion.div variants={photoAnimation}>
          <Photo outline={false} />
        </motion.div>
      </div>
    </motion.section>
  );
};
