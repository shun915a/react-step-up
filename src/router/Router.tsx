import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard } from '../components/pages/Dashboard';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} >
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.children}
          / >
        ))}
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
});

