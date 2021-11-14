import Styles from './StatisticView.module.css';
import PieChartComponent from './../../components/PieChart/PieChart';
import React from 'react';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <PieChartComponent />
    </div>
  );
};

export default StatisticView;
