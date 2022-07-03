import { memo, FC, ReactNode } from 'react';
import {
  Stack,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import { User } from '../../../types/api/user';

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;

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
              <Input value={user?.username} isReadOnly />
            </FormControl>


            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input value={user?.name} isReadOnly />
            </FormControl>


            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>


            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

