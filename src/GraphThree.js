import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


function GraphThree(){
  const sexualDifficulties = [
    {name: 'Lack of Interest', percentage: 50},
    {name: 'Unable to Climax', percentage: 21},
    {name: 'Took too Long to Orgasm', percentage: 21},
    {name: 'Trouble with Vaginal Dryness', percentage: 20},
    {name: 'Did Not Find Sex Pleasurable', percentage: 17},
    {name: 'Felt Anxious about Ability to Perform Sexually', percentage: 12},
    {name: 'Felt Physical Pain During Intercourse', percentage: 10 },
    {name: 'Climaxed too Quickly', percentage: 5}
  ];
    
  return (
      <div className='graph-container'> 
      <h3>Sexual Difficulties within Women</h3>
          <PieChart width={400} height={400}>
            <Pie data={sexualDifficulties} dataKey="percentage" outerRadius={150} innerRadius={80} fill="#DB3EB1" />
            <Tooltip />
          </PieChart> 
          </div>  
  );
}

export default GraphThree;
