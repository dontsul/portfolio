'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SingleSlide } from './singleSlide/SingleSlide';
import { EffectCoverflow, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { ProjectInfo } from '../projectsList/project/Project';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

export const Carousel = ({ projects }: { projects: ProjectInfo[] }) => {
  const elemntAnimation = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={elemntAnimation}>
      <Swiper
        className={`mySwiper w-full pt-[50px] pb-[50px]`}
        initialSlide={3}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        {projects &&
          projects.map((project: ProjectInfo, index: number) => {
            return (
              <SwiperSlide
                key={index}
                className="block w-[300px] h-full bg-white dark:bg-blue-gray-800 rounded-md"
              >
                <SingleSlide project={project} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </motion.div>
  );
};
