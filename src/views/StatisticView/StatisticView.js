import Styles from './StatisticView.module.css';
import PieChartComponent from './../../components/PieChart/PieChart';
import Balance from './../../components/Balance';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';
import React from 'react';
import DiagramTab from '../../components/DiagramTab/';



const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <Balance />
      <CurrencyRatesPanel />
      <PieChartComponent />
      <DiagramTab/>
    </div>
  );
};

export default StatisticView;
