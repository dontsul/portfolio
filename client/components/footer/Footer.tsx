'use client';

import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import logo from '../../public/logo-dontsul.png';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="w-full bg-white px-8 py-4 dark:bg-blue-gray-800 dark:text-blue-gray-50 z-50 opacity-100 absolute">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between dark:bg-blue-gray-800">
        <Link href={`/`}>
          <Image src={logo} alt="logo-ct" width={120} height={30} />
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 dark:text-blue-gray-50">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors  dark:text-blue-gray-50"
            >
              About Me
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors dark:text-blue-gray-50"
            >
              My Skills
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors dark:text-blue-gray-50"
            >
              My Projects
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors dark:text-blue-gray-50"
            >
              Contact Me
            </Typography>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal dark:text-blue-gray-50">
        <Link href={`/`}>&copy; {new Date().getFullYear()} All rights reserved.</Link>
      </Typography>
    </div>
  );
};
