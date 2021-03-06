import { useCallback, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from '../hooks/useLoginUser';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true :false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: 'Login success', status: 'success' })
            navigate('/home');
          } else {
            showMessage({ title: 'User not found', status: 'error' })
          }
        })
        .catch(() =>
          showMessage({ title: 'Login failed', status: 'error' })
        )
        .finally(() => setLoading(false));
    },
    [navigate, showMessage]
  );

  return { login, loading }
};


const fetchUser = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
};

