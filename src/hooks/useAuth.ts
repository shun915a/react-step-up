import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useCallback((id: string) => {
    const { data, isLoading, isError } = useQuery('user', fetchUser(id));

    if (isLoading)  {
      return isLoading;
    };

    if (isError) {
      return alert('Login failed')
    };
    
    if (data) {
      return navigate('/home');
    };
    
    alert('User not found');
  }, []);

  return { login }
};


const fetchUser = async(id: string) => {
  const res = await
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res;
};