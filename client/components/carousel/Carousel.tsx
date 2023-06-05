import Image from 'next/image';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SingleSlide } from './singleSlide/SingleSlide';
import { EffectCoverflow, Pagination } from 'swiper';
import { projects } from './projects';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

export const Carousel = () => {
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
        initialSlide={2}
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
        {projects.map((project, index) => {
          return (
            <SwiperSlide
              key={index}
              className="block w-[300px] h-full bg-white dark:bg-blue-gray-800 rounded-md"
            >
              <SingleSlide image={project.element} title={project.title} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};
