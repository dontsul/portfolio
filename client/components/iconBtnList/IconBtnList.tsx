'use client';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { IconBtn } from '../iconBtn/IconBtn';
import { AiFillGithub, AiFillLinkedin, AiOutlineGitlab } from 'react-icons/ai';
import { Tooltip } from '@material-tailwind/react';

export const IconBtnList = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div ref={ref} className="flex justify-start items-center gap-4">
      <Tooltip content="Github">
        <a
          href="https://github.com/dontsul?tab=repositories"
          target="_blank"
          className="cursor-pointer"
        >
          <IconBtn cn="text-blue-gray-900 dark:text-white" element={AiFillGithub} />
        </a>
      </Tooltip>
      <Tooltip content="Gitlab">
        <a
          href="https://gitlab.com/users/dontsul.v/projects"
          target="_blank"
          className="cursor-pointer"
        >
          <IconBtn cn="text-blue-gray-900 dark:text-white" element={AiOutlineGitlab} />
        </a>
      </Tooltip>
      <Tooltip content="Linkedin">
        <a
          href="https://www.linkedin.com/in/vasyl-dontsul-362869272/"
          target="_blank"
          className="cursor-pointer"
        >
          <IconBtn cn="text-blue-gray-900 dark:text-white" element={AiFillLinkedin} />
        </a>
      </Tooltip>
    </div>
  );
});
IconBtnList.displayName = 'IconBtnList';
export const MIconBtnList = motion(IconBtnList);
