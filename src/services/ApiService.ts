import axios, {type AxiosError} from 'axios';

import type {ResponseUserT} from '../types/response.type';

import {storeData} from './StorageService';

export const getUsers = async ({queryName = ''}: {queryName?: string} = {}) => {
  try {
    const {data} = await axios.get<ResponseUserT[]>(
      `https://jsonplaceholder.typicode.com/users${
        queryName ? `?q=${queryName}` : ''
      }`,
    );

    await storeData('users', data);

    return data;
  } catch (err) {
    throw new Error((err as AxiosError).message);
  }
};
