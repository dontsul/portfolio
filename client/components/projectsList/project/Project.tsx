'use client';
import { FC } from 'react';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectInfo {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    url: string;
    github: string;
  };
  _id: string;
}

export interface ProjectProps {
  project: ProjectInfo;
}

export const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project._id}`}>
      <div className="relative h-full w-full z-10">
        <Image
          className="h-full w-full rounded-xl"
          src={`http://localhost:3002/projects/${project.image}`}
          alt={project.title}
          width={2000}
          height={2000}
        />
        <div className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography color="blue-gray" className="xs:text-sm sm:text-xl">
              {project.title}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};
