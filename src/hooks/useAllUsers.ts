import { useCallback, useState } from 'react';
import axios from "axios";

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: 'Failed to get users', status: 'error' })
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {getUsers, users, loading}
}

