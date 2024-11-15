import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect, useState} from 'react';
import {fetchContacts} from './contactsThunks';
import {selectContactIsFetching, selectContacts} from './contactsSlice';
import CloseIcon from '@mui/icons-material/Close';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';

import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  IconButton,
  Modal,
  Typography
} from '@mui/material';
import {Contact} from '../../types';
import {Link} from 'react-router-dom';

const Contacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const isFetching = useAppSelector(selectContactIsFetching);
  const [clickedContact, setClickedContact] = useState<Contact | null>(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isFetching ? (
    <CircularProgress sx={{marginLeft: 60, marginTop: 23}} size="12rem"/>
  ) : (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          sx={{width: 400, height: 120, display: 'flex', alignItems: 'center', p: 1, mb: 2}}
          onClick={() => setClickedContact(contact)}
        >
          <CardActionArea sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                marginLeft: 2,
              }}
              src={contact.photo}
              alt="Avatar"
            />
            <CardContent>
              <Typography sx={{marginRight: 13}} gutterBottom align="center" variant="h4" component="div">
                {contact.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Modal open={clickedContact !== null}>
        <Box sx={{
          width: 500,
          padding: 2,
          backgroundColor: 'white',
          margin: 'auto',
          marginTop: 10,
          position: 'relative'
        }}>
          <IconButton
            onClick={() => setClickedContact(null)}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10
            }}
          >
            <CloseIcon/>
          </IconButton>

          <Avatar src={clickedContact?.photo} alt={clickedContact?.name}
                  sx={{width: 100, height: 100, margin: '0 auto'}}/>
          <Box>
            <Typography sx={{marginTop: 2}} variant="h4" align="center">
              {clickedContact?.name}
            </Typography>
            <Typography variant="h5" align="center">
              <PhoneForwardedIcon sx={{marginRight: 1}}/>
              {clickedContact?.phone}
            </Typography>
            <Typography variant="h6" align="center">
              <AlternateEmailIcon sx={{marginRight: 1}}/>
              {clickedContact?.email}
            </Typography>
          </Box>

          <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2}}>
            <Link to={`/edit/${clickedContact?.id}`}>
              <LoadingButton
                variant="contained">
                <EditNoteIcon
                  sx={{marginRight: 1}}/>
                Edit
              </LoadingButton>
            </Link>
            <LoadingButton
              variant="contained"
              color="error"
            >
              <DeleteIcon sx={{marginRight: 1}}/>
              Delete
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contacts;