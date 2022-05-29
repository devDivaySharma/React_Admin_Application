import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export const Charts = () => {

  return (
    <div className='chart'>
      <div className='title'>Last 6 Months (Revenue)</div>
      <Line data={data}  height={100} />
    </div>
  )
}

export default Charts;

