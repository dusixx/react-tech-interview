import { isError, isString } from '@common/utils';

export const getErrorInstance = (error: unknown): Error | undefined => {
  return isError(error) ? error : isString(error) ? Error(error) : undefined;
};
