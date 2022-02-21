import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Supported by Healthcare Providers',
    StronglyAgree: 38,
    Agree: 50,
    Disagree: 12,
  },
  {
    name: 'Individual Information',
    StronglyAgree: 30,
    Agree: 65,
    Disagree: 5,
  },
  {
    name: 'Actively Managing Own Health',
    StronglyAgree: 25,
    Agree: 60,
    Disagree: 15,
  },
  {
    name: 'Social Support for Health',
    StronglyAgree: 40,
    Agree: 55,
    Disagree: 5,
  },
  {
    name: 'Appraisal of Health Information',
    StronglyAgree: 10,
    Agree: 70,
    Disagree: 20,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
        <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="StronglyAgree" fill="#FF1DC5" />
          <Bar dataKey="Agree" fill="#1DFFE9" />
          <Bar dataKey="Disagree" fill="#B11DFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
