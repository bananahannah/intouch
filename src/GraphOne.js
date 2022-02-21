import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


function GraphOne(){
  const physicalPleasure = [
    {name: 'Extremely Pleasurable', percentage: 37.4},
    {name: 'Very Pleasurable', percentage: 41.7},
    {name: 'Moderately Pleasurable', percentage: 14.7},
    {name: 'Slightly Pleasurable', percentage: 2.8},
    {name: 'Not at all Pleasurable', percentage: 2.0},
    {name: 'Refused', percentage: 1.4}
  ];
    
  return (
        <div className='graph-container'>
          <h3>Physical Pleasure of Intercourse</h3>
          <PieChart width={400} height={400}>
            <Pie data={physicalPleasure} dataKey="percentage" outerRadius={150} innerRadius={80} fill="#D300FF" />
            <Tooltip />
          </PieChart>   
        </div>
  );
}

export default GraphOne;
