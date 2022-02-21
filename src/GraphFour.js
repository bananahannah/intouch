import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import './Graph.css'

function GraphFour(){
  const birthControl = [
    {name: 'Oral Contraceptives', percentage: 37},
    {name: 'Injectables', percentage: 4},
    {name: 'Patch', percentage: 2},
    {name: 'Ring', percentage: 3},
    {name: 'IUD', percentage: 23},
    {name: 'Implants', percentage: 7},
    {name: 'Male Condoms', percentage: 39},
    {name: 'Fertility Awareness-Based Methods', percentage: 8},
    {name: 'Emergency Contraception', percentage: 9},
    {name: 'Other', percentage: 4}
  ];
    
  return (
      <div className='graph-container'> 
      <h3>Womens Selected Methods of Contraception</h3>
          <PieChart width={400} height={400}>
            <Pie data={birthControl} dataKey="percentage" outerRadius={150} innerRadius={80} fill="#1DFF28" />
            <Tooltip />
          </PieChart> 
          </div>  
  );
}

export default GraphFour;
