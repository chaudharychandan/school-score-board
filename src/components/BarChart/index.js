import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data }) => {
  const getOptionsForChart = (student) => {
    return {
      chart: {
        type: 'column',
      },
      title: {
        text: `Score Card of ${student.name}`
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Marks'
        }
      },
      series: [{
        name: 'Marks',
        data: Object.entries(student.marks)
      }]
    }
  }

  const options = getOptionsForChart(data);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

export default BarChart;
