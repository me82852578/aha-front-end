import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { MainLayout } from './layouts';
import {
  ComponentsDemo, Home, Login, NotFound,
} from './pages';
import configs from './configs';

export default function App() {
  const {
    home, notFound, login, componentsDemo,
  } = configs.path;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={componentsDemo} element={<ComponentsDemo />} />
          <Route path={notFound} element={<NotFound />} />
          <Route path="*" element={<Navigate to={notFound} replace />} />
        </Route>
        <Route path={login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
