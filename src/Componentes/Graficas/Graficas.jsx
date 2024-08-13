import Header from "./Header"
import Estadisticas from "./Estadisticas"
import Grafico1 from "./Grafico1"
import Grafico2 from "./Grafico2"
import Grafico3 from "./Grafico3"
import Grafico4 from "./Grafico4"
import Tablas from "./Tablas"

import '../../Estilos.css/Graficas.css'
import { Text } from "@chakra-ui/react"
export default function Graficas(){
return(
<div className="Graficas">
<Header />
<Estadisticas />
<div className="Graficos">
<Grafico1 />
<Grafico2 />
</div>
<Tablas />
<div className="Graficos">
<Grafico3 />
<Grafico4 />
</div>
<Text fontSize="sm" fontWeight="300" color="#969696" margin="0 auto" padding="3% 0">@urielmeneses</Text>
</div>
)}