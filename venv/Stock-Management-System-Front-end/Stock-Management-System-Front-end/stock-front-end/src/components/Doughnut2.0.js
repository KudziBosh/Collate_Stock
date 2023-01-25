import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChartDemo = () => {
    const [chartData] = useState({
        text: '23%',
        datasets: [
            {
                data: [250, 50, 150],
                backgroundColor: [
                    "#8D00F7",
                    "#00BC6F",
                    "#F0b542",
                ],
                hoverBackgroundColor: [
                    "#8D00F7",
                    "#00BC6F",
                    "#F0b542"
                ]
            }]
    });
    const donutCenterRenderer = () => (
        <span>
            <h3>22.5%</h3> of which renewables
        </span>
    );

    const [lightOptions] = useState({
        plugins: {
            legend: {
                text: 'Hii'
            }
        }
    });

    return (
        <div className="card flex items-center justify-center border   rounded-md h-full" >
            <div className='justify-center'>
                <div className='flex items-center justify-center'>
                <Chart className='flex items-center justify-center'
                    type="doughnut"
                    data={chartData}
                    options={lightOptions}
                    donutCenterRender={donutCenterRenderer}
                    style={{ position: 'relative', width: '50%', height: '5 0%', alignContent:'centre', padding: '5' }} />
                </div>
                
                               
                <p className='text-sm text-center px-10 py-5'>We found remote workers to be more effective 🚀
                    <a href="" class="text-sm text-violet-600 dark:text-blue-500 hover:underline">View Report</a>
                </p>
                <div className='flex justify-center border-t w-full p-4'>
                    <div className=' flex  items-center flex-grow'>
                        <span class="block ml-12 w-2 h-2 rounded-full bg-violet-600"></span>
                        <span class="ml-1 text-xs font-medium">Onsite</span>
                    </div>
                    <div className='flex  items-center flex-grow'>
                        <span class="block w-2 h-2 rounded-full bg-green-500"></span>
                        <span class="ml-1 text-xs font-medium">Remote</span>
                    </div>
                    <div className='flex  items-center flex-grow'>
                        <span class="block w-2 h-2 rounded-full bg-yellow-600"></span>
                        <span class="ml-1 text-xs font-medium">Hybrid</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DoughnutChartDemo     