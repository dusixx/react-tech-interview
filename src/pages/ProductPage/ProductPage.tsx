import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

export default function CatalogPage(): ReactNode {
  const { id } = useParams();
  return (
    <div>
      <h2>Product with id={id}</h2>
    </div>
  );
}
