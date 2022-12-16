import { ReactNode } from 'react';

export type ElementType = {
  createdBy: string;
  id: string;

  meta: {
    link: string;
    name: string;
    description: string;
  };
};

export type Props = {
  children: ReactNode;
};

export type UserStatus = {
  isAdmin: boolean,
  isMember: boolean
};
