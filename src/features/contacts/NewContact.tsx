import {Avatar, Box, Button, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import { ContactMutation } from '../../types';

const NewContact = () => {
  const [contact, setContact] = useState<ContactMutation>({
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };


  return (
    <form onSubmit={onSubmit}>
      <Typography sx={{ mb: 2 }} variant="h4">
        Add new contact
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
          <Typography fontSize="20px" >Photo Preview</Typography>
        </Box>
      </Box>
      <Button variant="contained" type="submit">
        Save
      </Button>
    </form>
  );
};

export default NewContact;
