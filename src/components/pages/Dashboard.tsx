import { memo, FC } from 'react';
import { Outlet } from "react-router-dom";

import { Header } from '../organisms/layout/Header';

export const Dashboard: FC = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
});

