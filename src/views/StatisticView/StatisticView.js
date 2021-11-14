import Styles from './StatisticView.module.css';
import PieChartComponent from './../../components/PieChart/PieChart';
import Balance from './../../components/Balance';
import React from 'react';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <Balance/>
      <PieChartComponent />
    </div>
  );
};

export default StatisticView;
