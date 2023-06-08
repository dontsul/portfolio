'use client';

import { FC } from 'react';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { string } from 'yup';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from '@material-tailwind/react';

import {
  CloudArrowUpIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

import { ProjectProps } from '@/components/projectsList/project/Project';

export const SingleSlide: FC<ProjectProps> = ({ project }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  return (
    <Card className="w-full max-w-[26rem] bg-white dark:bg-blue-gray-800  h-full rounded-md">
      <CardHeader className="rounded-md" floated={false} color="blue-gray">
        <Image
          className="rounded-md"
          src={`${URL}/projects/${project.image}`}
          alt={project.title}
          width={1000}
          height={1000}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody className="p-0 px-5 py-2 bp-0 mb-0">
        <div className=" flex items-center justify-between">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium dark:text-white text-md"
          >
            {project.title}
          </Typography>
        </div>

        <p className="font-normal opacity-75 text-xs line-clamp-2 mt-1 mb-2 text-blue-gray-800 dark:text-blue-gray-100">
          {project.description}
        </p>
        <div className="group inline-flex flex-wrap items-center gap-3 m-0 py-0">
          <Tooltip content="Github">
            <a
              href={project.links.github}
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-gray-500 p-2 transition"
              target="_blank"
            >
              <BsGithub size={18} color="#2196f3" />
            </a>
          </Tooltip>
          <Tooltip content="Website">
            <a
              href={project.links.url}
              className="rounded-full hover:bg-blue-100 dark:hover:bg-blue-gray-500 p-2 transition"
              target="_blank"
            >
              <AiOutlineLink color="#2196f3" size={18} />
            </a>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="p-0 px-6 bt-1 pb-2 mb-2">
        <Link href={`/projects/${project._id}`}>
          <Button
            variant="text"
            className="flex items-center gap-2 mt-0 py-2 text-blue-gray-800 dark:text-blue-gray-100 text-xs"
          >
            Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
{
  /* <div>
      <div className="h-[20px]">
        <Image
          src={image}
          className="rounded-t-l-lg rounded-r-t-lg"
          alt="Nature 1"
          width={1000}
          height={1000}
        />
      </div>
      <h2 className="mt-[150px] text-2xl text-center dark:text-blue-gray-100">{title}</h2>
      <Link href={`/projects/${index}`} className="flex justify-center py-3">
        <Button>See project</Button>
      </Link>
    </div> */
}
