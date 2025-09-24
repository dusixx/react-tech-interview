/* eslint-disable @typescript-eslint/no-unnecessary-type-parameters */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { FormEvent } from 'react';

export const isObject = (obj: unknown): obj is object => {
  return obj != null && typeof obj === 'object';
};

export const isString = (obj: unknown): obj is string => {
  return typeof obj === 'string';
};

export const isError = (obj: unknown): obj is Error => {
  return obj instanceof Error;
};

export const hasOwnKeys = <K extends string>(
  obj: unknown,
  ...keys: K[]
): obj is object & { [key in K]: unknown } => {
  return isObject(obj) && keys.every(key => Object.prototype.hasOwnProperty.call(obj, key));
};

export const areStringsEqual = (
  str1: string,
  str2: string,
  { ignoreCase = true, locales }: { ignoreCase: boolean; locales: string },
): boolean => {
  return str1.localeCompare(str2, locales, ignoreCase ? { sensitivity: 'base' } : undefined) === 0;
};

export const getErrorMessage = (error: unknown, defaultMessage: string = ''): string => {
  return isString(error) ? error : isError(error) ? error.message : defaultMessage;
};

export const sleep = async (ms: number): Promise<void> => {
  await new Promise(r => setTimeout(r, ms));
};

export const rndInt = (min: number = 0, max: number = 0): number => {
  return Math.round(min + Math.random() * (max - min));
};

export const getFormData = <T = Record<string, FormDataEntryValue>>(
  obj: HTMLFormElement | FormEvent<HTMLFormElement>,
): T => {
  const form = obj instanceof HTMLFormElement ? obj : obj.currentTarget;
  return Object.fromEntries(new FormData(form).entries()) as T;
};
