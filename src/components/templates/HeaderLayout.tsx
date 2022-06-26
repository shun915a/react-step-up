import { memo, FC, ReactNode } from 'react';

import { Header } from '../organisms/layout/Header';

export const HeaderLayout: FC= memo(() => {
  return (
    <>
      <Header />
    </>
  );
});

