import {useEffect, useState} from 'react';

import type {ResponseUserT} from '../types/response.type';

import {getUsers} from '../services/ApiService';
import {getData} from '../services/StorageService';

export const useUsers = () => {
  const [users, setUsers] = useState<ResponseUserT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    const fetchedUsers = await getUsers();

    if (fetchedUsers) {
      setUsers(fetchedUsers);
    }
  };

  useEffect(() => {
    setLoading(true);

    getData<ResponseUserT[]>('users')
      .then(storedUsers => {
        if (!storedUsers) {
          fetchData();
        } else {
          setUsers(storedUsers);
        }
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return {users, loading, error};
};
