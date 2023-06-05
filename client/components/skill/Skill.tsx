'use client';

import { FC } from 'react';

interface SkillProps {
  title: string;
}

export const Skill: FC<SkillProps> = ({ title }) => {
  return (
    <div className="p-2 bg-white rounded-md shadow-md hover:shadow-gray-500/80 cursor-pointer transition duration-300 flex justify-center items-center dark:bg-blue-gray-800 dark:text-blue-gray-50 z-10">
      <span className="text-xs text-center z-10 line-clamp-1">{title}</span>
    </div>
  );
};
