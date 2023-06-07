import round from '../../public/round.svg';
import Image from 'next/image';

export const Round = () => {
  return (
    <>
      <Image className="mr-2" src={round} alt="round" width={10} height={10}></Image>
    </>
  );
};
