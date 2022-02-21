import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


function GraphTwo(){
    const emotionalSatisfaction = [
        {name: 'Extremely Satisfying', percentage: 43.9},
        {name: 'Very Satisfying', percentage: 35.3},
        {name: 'Moderately Satisfying', percentage: 16.1},
        {name: 'Slightly Satisfying', percentage: 2.3},
        {name: 'Not at all Satisfying', percentage: 1.2},
        {name: 'Refused', percentage: 1.2}
      ];
    
  return (
        <div className='graph-container'>
            <h3>Emotional Satisfaction during Intercourse</h3>
          <PieChart width={400} height={400}>
            <Pie data={emotionalSatisfaction} dataKey="percentage" outerRadius={150} innerRadius={80} fill="#04d9ff" />
            <Tooltip />
          </PieChart>  
        </div> 
  );
}

export default GraphTwo;
