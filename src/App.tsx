import { RoutePath } from '@common/constants.ts';
import { Layout } from '@components/Layout/Layout.tsx';
import { default as CatalogPage } from '@pages/CatalogPage/CatalogPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage.tsx';
import MainPage from '@pages/MainPage/MainPage.tsx';
import ProductPage from '@pages/ProductPage/ProductPage.tsx';
import TodoPage from '@pages/TodoPage/TodoPage.tsx';
import type { ReactNode } from 'react';
import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export class App extends Component {
  public render(): ReactNode {
    return (
      <Routes>
        <Route path={RoutePath.Home} element={<Layout />}>
          <Route path={RoutePath.Home} element={<MainPage />} />
          <Route path={RoutePath.Catalog} element={<CatalogPage />}>
            <Route path={RoutePath.Product} element={<ProductPage />} />
          </Route>
          <Route path={RoutePath.Todo} element={<TodoPage />} />
          <Route path={RoutePath.Redirect} element={<Navigate to={RoutePath.Home} />} />
          <Route path={RoutePath.Error} element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
}
