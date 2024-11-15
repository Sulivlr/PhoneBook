import {createRoot} from 'react-dom/client';
import App from './App';
import {CssBaseline} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './app/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <CssBaseline/>
      <App/>
    </BrowserRouter>
  </Provider>
);
