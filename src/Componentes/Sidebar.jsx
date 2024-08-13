// import { Menu, MenuItem, MenuList } from '@chakra-ui/react'
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Stack, Text, useDisclosure } from '@chakra-ui/react'
import '../Estilos.css/Sidebar.css'
import menuData from '../JSON/ItemMenu.json'
import { HamburgerIcon } from '@chakra-ui/icons'

// import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons'

export default function Side(){
// * Código del menú que viene de PrimeReact

const { isOpen, onOpen, onClose } = useDisclosure()

const placement = 'left'

const pulpo = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2Fpulpoblanco.svg?alt=media&token=7227427d-9f19-490a-a4c7-350357b1f404"

return(

<div className="Sidebar">
<Button bg="#444549" onClick={onOpen} borderRadius="50%" p={2}>
<HamburgerIcon style={{color: "#fff"}}/>
</Button>

<div className="Sidebar__Items">

 
   
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
    <DrawerOverlay />
    <DrawerContent style={{backgroundColor: "#fff"}}>
        <DrawerHeader>Projects</DrawerHeader>
        <DrawerBody style={{padding: "3%"}}>

          <Box
      minWidth='240px'
      padding='4'
    >

      <Stack spacing={3}>
        {/* Order */}
         {menuData.map((section) => (
        <Box key={section.section} p="10 5">
          <Text fontWeight='bold' color="#9F7AEA" fontSize="xs">
            {section.section}
          </Text>
          <Stack spacing={2} paddingY='1'>
            {section.items.map((item) => (
              <Box
                key={item.id}
                as='label'
                display='flex'
                alignItems='center'
                _hover={{ bg: 'gray.200', borderRadius: 'md' }} // Color de fondo al hacer hover
                p='2'
                cursor="pointer"
              >
                <i className={`uil uil-${item.icono}`} style={{ fontSize: "1.366667vw", color: "#9F7AEA" }}></i>
                <Text ml='2'>{item.name}</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      ))}




        {/* Country */}
       
      </Stack>
    </Box>

          </DrawerBody>
        </DrawerContent>
      </Drawer>

</div>


<img src={pulpo} alt="" className="Sidebar__logo" />
</div>

)}