import { useCallback, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/api/user';

export const useAuth = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery('user', fetchUser(id));

  const login = useCallback(() => {
    if (isLoading)  {
      console.log('isLoading');
      return isLoading;
    };

    if (isError) {
      return alert('Login failed')
    };
    
    if (data) {
      console.log(data)
      return navigate('/home');
    };
    
    alert('User not found');
  }, [navigate]);

  return { login }
};


const fetchUser = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users${id}`);
  return res.json();
};