'use client';

import { ComponentType } from 'react';

import { FC } from 'react';

interface IconBtnProps {
  element: ComponentType<{ size: number; className: string }>;
  cn: string;
}

export const IconBtn: FC<IconBtnProps> = ({ element: Element, cn }) => {
  return (
    <>
      <Element className={cn} size={40} />
    </>
  );
};
