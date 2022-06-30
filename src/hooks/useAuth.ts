import { useCallback, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/api/user';

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isError } = useQuery('user', fetchUser);

  const login = (id: string) => {
    if (isLoading)  {
      return setLoading(isLoading);
    };

    setLoading(isLoading);

    if (isError) {
      return alert('Login failed')
    };
    
    if (data) {
      console.log(data[Number(id)])
      return navigate('/home');
    };
    
    alert('User not found');
  };

  return { login, loading }
};


const fetchUser = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return res.json();
};