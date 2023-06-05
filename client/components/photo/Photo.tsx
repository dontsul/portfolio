import Image from 'next/image';
import profile from '../../public/dontsul.png';
import { FC } from 'react';

interface PhotoProps {
  outline: boolean;
}

export const Photo: FC<PhotoProps> = ({ outline }) => {
  return (
    <div
      className={`overflow-hidden  flex justify-center md:justify-end items-center  rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[220px] pt-4 pr-4 pl-4 shadow-lg shadow-blue-500/80 ${
        !outline
          ? 'bg-gradient-to-tr from-blue-100 to-blue-500'
          : ' border-solid border-[4px] border-blue-500 bg-blue-gray-50 dark:bg-blue-gray-900'
      } `}
    >
      <Image className="mx-auto" src={profile} alt="dontsul" width={400} height={400} />
    </div>
  );
};
