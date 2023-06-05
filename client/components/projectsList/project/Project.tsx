'use client';
import { FC } from 'react';
import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectInfo {
  title: string;
  description: string;
  image: string;
  technology: string[];
  links: {
    url: string;
    github: string;
  };
  id: string;
  slug: string;
}

interface ProjectProps {
  project: ProjectInfo;
}

//

export const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <Link href={`/projects/${id}`}>
      <div className="relative h-full w-full">
        <img
          className="h-full w-full rounded-xl"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
        <div className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h5" color="blue-gray">
              Sara Lamalo
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              20 July 2022
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray">
            Growth
          </Typography>
        </div>
      </div>
    </Link>
  );
};
