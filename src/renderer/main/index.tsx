import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <div>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </div>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
