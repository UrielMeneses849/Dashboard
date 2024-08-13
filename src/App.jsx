
import Side from './Componentes/Sidebar.jsx'
import Graficas from './Componentes/Graficas/Graficas.jsx'
import Productos from './Componentes/Productos/Productos.jsx'


export default function App() {


  return (
    <div className="container">
    <div className='Dashboard'>  
    <Side />
    <Graficas />
    <Productos />
    </div>
    </div>
)
}


