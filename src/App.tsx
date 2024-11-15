import NavBar from './components/NavBar';
import {Container} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import Contacts from './features/contacts/Contacts';
import NewContact from './features/contacts/NewContact';

const App = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Container component="main" maxWidth="lg" sx={{mt: 2}}>
        <Routes>
          <Route path="/" element={<Contacts/>}/>
          <Route path="/new-contact" element={<NewContact/>}/>
          <Route path="*" element={<h1>Page Doesn't Exist</h1>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
