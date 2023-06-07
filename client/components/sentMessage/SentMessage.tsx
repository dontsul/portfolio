import { Typography } from '@material-tailwind/react';

export const SentMessage = () => {
  return (
    <div className="overflow-x-hidden bg-blue-gray-100 dark:bg-blue-gray-800  py-10 px-4">
      <Typography className="text-center mb-8 dark:text-white" variant="h2" color="blue-gray">
        Form was sent
      </Typography>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};
