import { memo, FC, ReactNode, useState, useEffect, ChangeEvent } from 'react';
import {
  Stack,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName= (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail= (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone= (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  const onClickUpdate = () => alert();

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>User Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>User name</FormLabel>
              <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
            </FormControl>


            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            </FormControl>


            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>


            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});

