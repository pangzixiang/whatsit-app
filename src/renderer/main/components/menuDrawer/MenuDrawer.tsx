import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Menu from './menu';

const MenuDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;
  const navigate = useNavigate();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <SimpleGrid columns={1} spacing={3}>
            {Menu.map((item) => (
              <Box key={item.to}>
                <Button
                  size="md"
                  height="48px"
                  width="100%"
                  border="2px"
                  onClick={() => {
                    navigate(item.to);
                    onClose();
                  }}
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </DrawerBody>
        <DrawerFooter>
          <CloseButton variant="outline" mr={3} onClick={onClose} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
