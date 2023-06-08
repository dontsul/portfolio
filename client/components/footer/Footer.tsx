'use client';

import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import logo from '../../public/logo-dontsul.png';
import Link from 'next/link';
import { IconBtn } from '../iconBtn/IconBtn';
import { AiFillGithub, AiOutlineGitlab, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { Tooltip } from '@material-tailwind/react';
import { Link as LinkScroll } from 'react-scroll';

export const Footer = () => {
  return (
    <div className="w-full bg-white px-8 py-4 dark:bg-blue-gray-800 dark:text-blue-gray-50 z-50 opacity-100 absolute">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between dark:bg-blue-gray-800">
        <Link href={`/`}>
          <Image src={logo} alt="logo-ct" width={120} height={30} />
        </Link>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 dark:text-blue-gray-50">
          <li>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-colors  dark:text-blue-gray-50 cursor-pointer"
              >
                About Me
              </Typography>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-colors dark:text-blue-gray-50 cursor-pointer"
              >
                My Skills
              </Typography>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-colors dark:text-blue-gray-50 cursor-pointer"
              >
                My Projects
              </Typography>
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography
                color="blue-gray"
                className="font-normal transition-colors dark:text-blue-gray-50 cursor-pointer"
              >
                Contact Me
              </Typography>
            </LinkScroll>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-blue-gray-50" />

      <div className="sm:flex sm:items-center sm:justify-between ">
        <Typography color="blue-gray" className="text-center font-normal dark:text-blue-gray-50">
          <Link href={`/`}>&copy; {new Date().getFullYear()} All rights reserved.</Link>{' '}
        </Typography>
        <div className="flex mt-4 space-x-6 justify-center sm:mt-0 flex-wrap">
          <Tooltip content="Github">
            <a href="https://github.com/dontsul?tab=repositories" target="_blank">
              <IconBtn element={AiFillGithub} cn="text-blue-gray-900 dark:text-white" size={20} />
            </a>
          </Tooltip>
          <Tooltip content="Gitlab">
            <a href="https://gitlab.com/users/dontsul.v/projects" target="_blank">
              <IconBtn
                element={AiOutlineGitlab}
                cn="text-blue-gray-900 dark:text-white "
                size={20}
              />
            </a>
          </Tooltip>
          <Tooltip content="Linkedin">
            <a href="https://www.linkedin.com/in/vasyl-dontsul-362869272/" target="_blank">
              <IconBtn
                element={AiFillLinkedin}
                cn="text-blue-gray-900 dark:text-white "
                size={20}
              />
            </a>
          </Tooltip>
          <Tooltip content="Mail">
            <a href="mailto:dontsul.v@gmail.com" target="_blank">
              <IconBtn element={AiTwotoneMail} cn="text-blue-gray-900 dark:text-white " size={20} />
            </a>
          </Tooltip>
          <Tooltip content="Telegram">
            <a href="https://t.me/vm_don" target="_blank">
              <IconBtn element={BsTelegram} cn="text-blue-gray-900 dark:text-white " size={20} />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
