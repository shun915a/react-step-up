import { ChangeEvent, memo, FC, useState } from 'react';
import {
  Flex,
  Box,
  Divider,
  Heading,
  Input,
  Button,
  Stack
} from '@chakra-ui/react';

import { Header } from '../organisms/layout/Header';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('');
  const { login } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => {
    login();
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
    >
      <Box
        bg="white"
        w="sm"
        p={4}
        borderRadius="md"
        shadow="md"
      >
        <Heading as="h1" size="lg" textAlign="center">User Management Appliation</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="User ID"
            value={userId}
            onChange={onChangeUserId} 
          />
          <PrimaryButton
          >
            Login
          </PrimaryButton>
        </Stack>
        <Button onClick={onClickLogin} />
      </Box>
    </Flex>
  )
});

