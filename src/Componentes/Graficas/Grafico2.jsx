
import  { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

export default function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const enviados = Math.floor(Math.random() * 10000);
    const enviadosFormatted = Number(enviados).toLocaleString();

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Canada',
                    data: [65000, 59000, 30000, 11000, 56000, 55000, 40000],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'United States',
                    data: [28000, 25000, 40000, 19000, 46000, 27000, 30000],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    align: 'center',
                    
                    labels: {
                        color: textColor,
                        boxWidth: 20, // Ancho del cuadro de color
                        boxHeight: 20,
                        usePointStyle: true,
                        padding: 20
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
                    beginAtZero: true, // Comenzar desde 0
                    max: 75000, // Máximo en $75k
                    ticks: {
                        stepSize: 25000, // Paso fijo de $25k
                        color: '#728197', // Color gris suave para los números del eje Y
                        callback: function(value) {
                            // Mostrar los valores con los intervalos correctos
                            if (value === 0) return '$0';
                            if (value === 25000) return '$25k';
                            if (value === 50000) return '$50k';
                            if (value === 75000) return '$75k';
                            return '';
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className='Grafica1' style={{display: 'flex', flexDirection: 'column', width: "50%"}}>
        
         <StatGroup className="Cards" style={{padding: "0 4% 0 0"}}> 

        <Stat className="Card1 ">
            <div className="Card__Numeros" style={{alignItems: "flex-start"}}>
            <StatLabel fontSize="xl" fontWeight="600">Data Activity</StatLabel>

            <StatHelpText className='FadeLeft'>
            <StatNumber fontSize="xl" fontWeight="600">${enviadosFormatted}</StatNumber>
            <StatArrow type='increase' />
            3.3% vs last year
            </StatHelpText>
            </div>
        </Stat>

        
        </StatGroup>
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} style={{ height: '28vh'}}/>
        </div>
        </div>
    )
}
        