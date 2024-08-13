import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import '../../Estilos.css/Estadisticas.css'
export default function Estadisticas(){

const Balance= (Math.random()*10000).toFixed(2)
const BalanceFormatted = Number(Balance).toLocaleString();
const reject = Math.floor(Math.random() * 1000);
const rejectFormatted = Number(reject).toLocaleString();
const enviados = Math.floor(Math.random() * 10000);
const enviadosFormatted = Number(enviados).toLocaleString();
return(
<>
<StatGroup className="Cards"> 
  <Stat className="Card">
    <StatLabel>Sent</StatLabel>
    <div className="Card__Numeros">
    <StatNumber fontSize="xl">{enviadosFormatted}</StatNumber>

    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
    </div>
  </Stat>

  <Stat className="Card">
    <StatLabel>Reject</StatLabel>
    <div className="Card__Numeros">
    <StatNumber fontSize="xl">{rejectFormatted}</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
    </div>
  </Stat>

  <Stat className="Card">
    <StatLabel>Total Balance</StatLabel>
    <StatNumber fontSize="xl">${BalanceFormatted}</StatNumber>
    
  </Stat>
</StatGroup>
</>
)}