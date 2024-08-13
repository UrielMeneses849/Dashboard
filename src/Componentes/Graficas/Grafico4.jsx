import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

export default function Grafico4(){
    
        const [chartData, setChartData] = useState({});
        const [chartOptions, setChartOptions] = useState({});
    
        useEffect(() => {
           
            const data = {
                labels: ['Product 1', 'Product 2', 'Product 3'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [
                            '#9b73eb', // Purple - Main color
                            '#ccaeff', // Light Purple
                            '#6B46C1'   // Dark Purple
                        ],
                        hoverBackgroundColor: [
                            '#8a67d5', // Hover Purple - Main color
                            '#D6BCFA', // Hover Light Purple
                            '#553C9A'  // Hover Dark Purple
                        ]
                    }
                ]
            };
            
            const options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            };
    
            setChartData(data);
            setChartOptions(options);
        }, []);
        const enviados = Math.floor(Math.random() * 1000000);
        const enviadosFormatted = Number(enviados).toLocaleString();
return(
<div className='Grafica1' style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
        
        <StatGroup className="Cards" style={{padding: "0 4% 0 0"}}> 

        <Stat className="Card1">
            <div className="Card__Numeros" style={{alignItems: "flex-start"}}>
            <StatLabel fontSize="xl" fontWeight="600">Total Sales</StatLabel>

            <StatHelpText>
            <StatNumber fontSize="xl" fontWeight="600">${enviadosFormatted}</StatNumber>
            <StatArrow type='decrease' />
            5.6% vs last year
            </StatHelpText>
            </div>
        </Stat>
        </StatGroup>
<div className="card" >
            <Chart type="pie" data={chartData} options={chartOptions}  style={{ height: '35vh', display:"flex", justifyContent:"center"}}/>
        </div>
</div>
)}