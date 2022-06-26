import { useCallback } from 'react';
import { useQuery } from 'react-query'

export const useAuth = () => {
  const login = useCallback((id: string) => {
  }, []);
  return { login }
}

const fetchUser = async(id) => {
  const res = await
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res;
};

