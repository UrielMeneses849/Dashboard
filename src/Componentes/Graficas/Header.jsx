import { useEffect, useState } from "react";
import { Flex, Avatar, Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import Chat from '../../JSON/Chat.json';
import Noti from '../../JSON/Notificaciones.json';
export default function Header(){
    const [currentDateTime, setCurrentDateTime] = useState('');
    // * Código del menu que viene de PrimeReact
    
    // * Código de la función de la fecha y hora actual
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      const formattedDate = now.toLocaleTimeString('en-US', options).replace(',', '');
      setCurrentDateTime(formattedDate);
    };

    updateDateTime(); // Llama la función al montar el componente

    const intervalId = setInterval(updateDateTime, 60000); // Actualiza cada minuto

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

return(
<div className="Header">
<div className="Header__Textos">
<h1>Transactions</h1>
<span>{currentDateTime}</span>
</div>

<div className="Header__Iconos" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "end", gap: "3%"}}>
{/* Dropdown de chat */}
<Menu placement="bottom">
  <MenuButton as={Button}>
  <i>
    <img src="https://firebasestorage.googleapis.com/v0/b/base-de-datos-portafolio.appspot.com/o/IconosSVG%2Fchat-round-line-svgrepo-com.svg?alt=media&token=cab4d0fe-db9f-4500-8aaa-8b5b2442af8e" alt="" width="19" height="19"/>
</i>
  </MenuButton>


  <MenuList padding="8px" borderRadius="20px" Minwidth="240px" maxW="500px" maxHeight="33vh" overflowY="scroll" boxShadow="xl">

  {Chat.map((item, index) => (
    <MenuItem minH='48px' borderRadius="8px" key={index} margin="6px 0">

    <Avatar boxSize="2rem" mr='12px' name={item.name} src='https://bit.ly/broken-link' />
      <Flex flexDirection="column" width="80%" boxSizing="boerder-box">
      <Text fontSize="1.1vw" fontWeight="600">{item.name}</Text>
      <Text fontSize="0.8vw" fontWeight="300" isTruncated width="90%">{item.message}</Text>
      </Flex>

      <Avatar size='2xs' name={item.name} src='https://bit.ly/broken-link' />

    </MenuItem>
  ))}
  </MenuList>
</Menu>

{/* Dropdown de Notificaciones */}
<Menu placement="bottom" >
  <MenuButton as={Button}>
  <i>
  <img src="https://firebasestorage.googleapis.com/v0/b/base-de-datos-portafolio.appspot.com/o/IconosSVG%2Fnotification-bell-on-svgrepo-com%201.svg?alt=media&token=5501e46a-681e-4cc2-a7cb-2b8e244be9c0" alt="Notification Bell" width="24" height="24" />
</i>
  </MenuButton>

  <MenuList padding="8px" borderRadius="20px" Minwidth="240px" maxW="350px" maxHeight="33vh" overflowY="scroll" boxShadow="xl">
  {Noti.map((item, index) => (
    <MenuItem minH='48px' borderRadius="8px" key={index} margin="6px 0">

    <Avatar boxSize="2rem" mr='12px' name={item.name} src='https://firebasestorage.googleapis.com/v0/b/base-de-datos-portafolio.appspot.com/o/IconosSVG%2FFrame%201306.svg?alt=media&token=64cd5aec-fe17-4542-b3e8-b0f244f76dc9' />
      <Flex flexDirection="column" width="80%" boxSizing="boerder-box">
      <Text fontSize="1.1vw" fontWeight="600">{item.name}</Text>
      <Text fontSize="0.8vw" fontWeight="300" isTruncated width="90%">{item.message}</Text>
      </Flex>

    </MenuItem>
  ))}
  </MenuList>
</Menu>



<div className="Header__Perfil">
<Flex alignItems="center">
  <Avatar name="Uriel Meneses" src='https://bit.ly/broken-link'  />
  <Box ml='4' w="100%">
    <Text fontWeight='bold' whiteSpace="nowrap">
      Uriel Meneses
    </Text>
    <Text fontSize='sm' whiteSpace="nowrap">
      Frontend Developer
    </Text>
  </Box>
</Flex>
</div>
</div>
</div>
)}