import {
  Flex,
  Spacer,
  Box,
  IconButton,
  ButtonGroup,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MinusIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import style from './AppBar.module.css';
import MenuDrawer from '../menuDrawer/MenuDrawer';

const AppBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = useColorModeValue('white', 'gray.800');

  const minimizeWindow = () => {
    window.electron.ipcRenderer.sendMessage('minimize-main-window', []);
  };

  const closeWindow = () => {
    window.electron.ipcRenderer.sendMessage('close-main-window', []);
  };

  return (
    <div
      className={`${style.appBar} sticky top-0 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 rounded-t-lg shadow-lg shadow-indigo-500/50`}
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" color={color}>
          <span className="text-3xl font-sans font-bold">Whatsit App</span>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" className={`${style.button} pr-2`} spacing="0">
          <IconButton
            aria-label="open menu"
            colorScheme="teal"
            onClick={onOpen}
            variant="outline"
            icon={<HamburgerIcon />}
          />
          <IconButton
            aria-label="change theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            variant="outline"
            onClick={toggleColorMode}
          />
          <IconButton
            aria-label="min App"
            icon={<MinusIcon />}
            variant="outline"
            onClick={minimizeWindow}
          />
          <IconButton
            aria-label="min App"
            icon={<CloseIcon />}
            variant="outline"
            onClick={closeWindow}
          />
        </ButtonGroup>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default AppBar;
