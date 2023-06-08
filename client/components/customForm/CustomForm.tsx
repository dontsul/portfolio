'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup
  .object({
    name: yup.string().min(2, 'must be at least 2 characters long').required(),
    email: yup.string().email('must be a valid email').required(),
    message: yup.string().min(10, 'must be at least 10 characters long').required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const CustomForm = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    fetch(`${URL}api/formdatas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast('Message was send.');
        reset();
      })
      .catch((e) => console.log(e));
  };

  const wrapAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const elemntAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={wrapAnimation}>
      <Card
        className="overflow-x-hidden bg-blue-gray-100 dark:bg-blue-gray-800  py-10 px-4"
        shadow={false}
      >
        <motion.div custom={5} variants={elemntAnimation}>
          <Typography className="text-center mb-8 dark:text-white" variant="h2" color="blue-gray">
            Contact Me
          </Typography>
        </motion.div>

        <form onSubmit={handleSubmit(onSubmit)} className=" mb-2 w-full xs md:w-96 mx-auto">
          <div className="mb-4 flex flex-col gap-6">
            <motion.div custom={4} variants={elemntAnimation} className="relative mb-1">
              <Input
                className="bg-white dark:bg-blue-gray-800 dark:text-blue-gray-50 "
                size="lg"
                label="Name"
                {...register('name')}
              />
              <p className="text-xs mt-2 text-red-500">{errors.name?.message}</p>
            </motion.div>
            <motion.div custom={3} variants={elemntAnimation} className="relative mb-1">
              <Input
                className="bg-white dark:bg-blue-gray-800 dark:text-blue-gray-50 "
                size="lg"
                label="Email"
                {...register('email')}
              />
              <p className="text-xs mt-2 text-red-500">{errors.email?.message}</p>
            </motion.div>
            <motion.div custom={2} variants={elemntAnimation} className="relative mb-1">
              <Textarea
                className="bg-white dark:bg-blue-gray-800 dark:text-blue-gray-50 "
                rows={10}
                size="lg"
                color="blue"
                label="Message"
                {...register('message')}
              />
              <p className="text-xs text-red-500">{errors.message?.message}</p>
            </motion.div>
          </div>
          <motion.div custom={1} variants={elemntAnimation}>
            <Button
              type="submit"
              className="mt-6 bg-gradient-to-tr from-blue-200 to-blue-500"
              fullWidth
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </Card>
      <Toaster position="bottom-center" />
    </motion.div>
  );
};
