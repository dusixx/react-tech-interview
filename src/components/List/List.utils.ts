import { hasOwnKeys } from '@common/utils.ts';

export type Character = {
  name: string;
  id: number;
};

type RickAndMortyApiResult = {
  info: object;
  results: Character[];
};

export const isLikeRickAndMortyApiResult = (obj: unknown): obj is RickAndMortyApiResult => {
  return (
    hasOwnKeys(obj, 'results') &&
    Array.isArray(obj.results) &&
    obj.results.some(item => hasOwnKeys(item, 'name', 'id'))
  );
};
