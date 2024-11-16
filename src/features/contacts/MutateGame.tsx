import {Avatar, Box, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import {ContactMutation} from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {selectContactIsCreating} from './contactsSlice';
import {createContact} from './contactsThunks';
import { toast } from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';


const MutateGame = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectContactIsCreating);
  const [contact, setContact] = useState<ContactMutation>({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(createContact({ ...contact })).unwrap();
      navigate('/');
      toast.success('Contact is created');
    } catch {
      toast.error('Contact didn’t create');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Typography sx={{ mb: 2 }} variant="h4">
        { id ? 'Edit a contact' : 'Add new contact'}
      </Typography>
      <Box gap={2} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
        <TextField
          required
          name="name"
          onChange={onFieldChange}
          value={contact.name}
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          name="phone"
          onChange={onFieldChange}
          value={contact.phone}
          label="Phone"
          type="number"
          variant="outlined"
        />
        <TextField
          required
          name="email"
          onChange={onFieldChange}
          value={contact.email}
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          name="photo"
          onChange={onFieldChange}
          value={contact.photo}
          label="Photo"
          variant="outlined"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            variant="rounded"
            src={contact.photo}
            alt={contact.name}
            sx={{ width: 150, height: 150 }}
          />
          <Typography fontSize="20px">Photo Preview</Typography>
        </Box>
      </Box>
      <LoadingButton
        type="submit"
        loading={isCreating}
        loadingPosition="end"
        endIcon={<SendIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
    </form>
  );
};

export default MutateGame;
