import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useEffect} from 'react';
import {fetchContacts} from './contactsThunks';
import {selectContactIsFetching, selectContacts} from './contactsSlice';
import {Avatar, Box, Card, CardActionArea, CardContent, CircularProgress, Typography} from '@mui/material';

const Contacts = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const isFetching = useAppSelector(selectContactIsFetching);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isFetching ? (
    <CircularProgress sx={{marginLeft: 60, marginTop: 23}} size="12rem"/>
  ) : (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
      {contacts.map((contact) => (
        <Card key={contact.id} sx={{width: 400, height: 120, display: 'flex', alignItems: 'center', p: 1, mb: 2}}>
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
    </Box>

  )
};

export default Contacts;