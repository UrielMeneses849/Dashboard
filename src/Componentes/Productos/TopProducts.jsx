import {  Box, Text } from '@chakra-ui/react'
import '../../Estilos.css/Productos.css'


export default function Top(){
  

return(
<Box maxHeight="37%">
<Text
bgColor="black"
  bgClip="text"
  fontSize="1.266vw"
  fontWeight="400" > Top products </Text>

  <div className="CardProductos">
    <div className="CardProducto">

    <div className="IconoContainer">
    <i className="uil uil-500px" style={{color: "black", fontSize: "2vw"}}></i>
    </div>
    <Text
    bgColor="black"
    bgClip="text"
    fontSize="xl"
    fontWeight="500" > ZendQ </Text>

    <Text
    bgColor="#7F8EB8"
    bgClip="text"
    fontSize="sm"
    fontWeight="300" > Marketing </Text>

    <Text
    bgColor="black"
    bgClip="text"
    fontSize="lg"
    fontWeight="400" > ${ Number((Math.random()*10000).toFixed(2)).toLocaleString()} </Text>


    </div>

    <div className="CardProducto">

    <div className="IconoContainer">
    <i className="uil uil-adjust-circle" style={{color: "black", fontSize: "2vw"}}></i>
    </div>
    <Text
    bgColor="black"
    bgClip="text"
    fontSize="xl"
    fontWeight="500" > DIhunter </Text>

    <Text
    bgColor="#7F8EB8"
    bgClip="text"
    fontSize="sm"
    fontWeight="300" > Development </Text>

    <Text
    bgColor="black"
    bgClip="text"
    fontSize="lg"
    fontWeight="400" > ${ Number((Math.random()*10000).toFixed(2)).toLocaleString()} </Text>


    </div>
  </div>
</Box>
)}