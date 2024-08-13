import { Badge, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import '../../Estilos.css/Tablas.css'
export default function Tablas(){

    function getRandomDateIn2024() {
        const start = new Date('2024-01-01T00:00:00Z');
        const end = new Date('2024-12-31T23:59:59Z');
        const range = end.getTime() - start.getTime();
        const randomTime = start.getTime() + Math.floor(Math.random() * range);
        return new Date(randomTime);
    }
    
    // Función para formatear la fecha como "Jul 21st, 24"
    function formatDate(date) {
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear().toString().slice(-2); // Obtener solo los últimos 2 dígitos del año
        // Convertir el día a formato ordinal
        const ordinal = day => {
            const j = day % 10;
            const k = day % 100;
            if (j === 1 && k !== 11) return day + 'st';
            if (j === 2 && k !== 12) return day + 'nd';
            if (j === 3 && k !== 13) return day + 'rd';
            return day + 'th';
        };
        return `${month} ${ordinal(day)}, ${year}`;
    }
  

return(

<div className="Tabla" >
<Text
bgColor="black"
  bgClip="text"
  fontSize="2xl"
  fontWeight="400"
>
 Top customers
</Text>

<TableContainer maxHeight="300px" overflowY="auto"  borderRadius="15px" 
   // Sombra sutil
  border="1px solid" // Opcional: Agrega un borde delgado para definir los límites
  borderColor="gray.200" className="Tablas">
    
  <Table variant='striped' colorScheme='gray'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th position="sticky" top="0" backgroundColor="white" color="black">
          ID
        </Th>
        <Th position="sticky" top="0" backgroundColor="white" color="black">
          Date
        </Th>
         <Th position="sticky" top="0" backgroundColor="white" color="black">
          Membership
        </Th>
         <Th position="sticky" top="0" backgroundColor="white" color="black">
          Total Spendig
        </Th>
         <Th position="sticky" top="0" backgroundColor="white" color="black">
          Status
        </Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>#0034</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Premium</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='green'>Success</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#0089</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Standart</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='red'>Cancelled</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#0252</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Free</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='purple'>New Order</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#9812</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Premium</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='green'>Success</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#0252</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Free</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='purple'>New Order</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#0089</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Standart</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='red'>Cancelled</Badge>
        </Td>
      </Tr>
      <Tr>
        <Td>#0089</Td>
        <Td>{formatDate(getRandomDateIn2024())}</Td>
        <Td>Standart</Td>
        <Td>${Number((Math.random()*10000).toFixed(2)).toLocaleString()}</Td>
        <Td>
        <Badge colorScheme='red'>Cancelled</Badge>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
</div>
)}