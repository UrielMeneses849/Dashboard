import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { Chart } from 'primereact/chart';
import { useEffect, useState } from 'react';

export default function Grafico3(){

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    type: 'line',
                    label: 'Popular product',
                    borderColor: '#9F7AEA',  // Main purple color
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Product 1',
                    backgroundColor: '#D6BCFA',  // Lighter purple
                    borderColor: 'white',
                    borderWidth: 2,
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Product 2',
                    backgroundColor: '#6B46C1',  // Darker purple
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
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
            <StatLabel fontSize="xl" fontWeight="600">Sales for day</StatLabel>

            <StatHelpText>
            <StatNumber fontSize="xl" fontWeight="600">${enviadosFormatted}</StatNumber>
            <StatArrow type='increase' />
            5.6% vs last year
            </StatHelpText>
            </div>
        </Stat>
        </StatGroup>
<div className="card">
            <Chart type="line" data={chartData} options={chartOptions} style={{ height: '35vh'}}/>
        </div>
</div>
)}