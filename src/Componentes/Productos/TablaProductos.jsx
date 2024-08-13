import { Table, TableCaption, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import data from "../../JSON/Productos.json"
export default function TablaProductos(){

    function getRandomDateIn2024() {
        const start = new Date('2024-01-01T00:00:00Z');
        const end = new Date('2024-12-31T23:59:59Z');
        const range = end.getTime() - start.getTime();
        const randomTime = start.getTime() + Math.floor(Math.random() * range);
        return new Date(randomTime);
    }
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
<>
<Text
    bgColor="#000"
    bgClip="text"
    fontSize="1.266vw"
    fontWeight="400" > Expenses </Text>


<TableContainer maxHeight="37%" overflowY="auto"  borderRadius="15px" overflowX={{ base: 'auto', lg: 'hidden' }}  
                whiteSpace={{ base: 'nowrap', lg: 'normal' }}
                style={{width:"100%", boxSizing: "border-box"}}>

  <Table variant='simple' style={{width:"100%"}} > 
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Tbody >
    {data.map((item) => {
    // Genera un valor random cada vez que se mapea un item
    const cantidadRandom = Number((Math.random() * 10000).toFixed(2));

    return (
        <Tr key={item.id}>
            <Td textAlign="left" style={{paddingLeft: "0", paddingRight: "0" }} className="FadeLeft">
                <div className="Icono--Texto">
                    <div className="iconoCard">
                        <i className={`uil uil-${item.icono}`} style={{fontSize: "1.26667vw"}}></i>
                    </div>
                    <div className="Icono--TextoFecha">
                        <Text
                            bgColor="black"
                            bgClip="text"
                            fontSize="md"
                            fontWeight="500"
                        >
                            {item.name}
                        </Text>
                        <Text
                            bgColor="#465b8d"
                            bgClip="text"
                            fontSize="xs"
                            fontWeight="300"
                        >
                            {formatDate(getRandomDateIn2024())}
                        </Text>
                    </div>
                </div>
            </Td>
            <Td
                className="FadeRight"
                textAlign="right"
                style={{
                    color: cantidadRandom > 3000 ? "green" : "red",
                    fontWeight: 500,
                    fontSize: "0.9vw",
                    paddingRight:"5%",
                    paddingLeft:0,
                    
                }}
            >
                {cantidadRandom > 3000 ? "+" : "-"} ${cantidadRandom.toLocaleString()}
            </Td>
        </Tr>
    );
})}

    </Tbody>
  </Table>
</TableContainer>

</>
)}

// 