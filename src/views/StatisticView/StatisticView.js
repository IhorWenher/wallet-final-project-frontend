import Styles from './StatisticView.module.css';
import PieChartComponent from './../../components/PieChart/PieChart';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';
import React from 'react';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <CurrencyRatesPanel />
      <PieChartComponent />
    </div>
  );
};

export default StatisticView;
