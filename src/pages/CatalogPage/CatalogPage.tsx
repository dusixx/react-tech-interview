import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export default function CatalogPage(): ReactNode {
  return (
    <div>
      <h1>Catalog</h1>
      <Outlet />
    </div>
  );
}
