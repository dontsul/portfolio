'use client';

import { ComponentType } from 'react';

import { FC } from 'react';

interface IconBtnProps {
  element: ComponentType<{ size: number; className: string }>;
  cn: string;
  size: number;
}

export const IconBtn: FC<IconBtnProps> = ({ element: Element, cn, size }) => {
  return (
    <>
      <Element className={cn} size={size} />
    </>
  );
};
