import Styles from './StatisticView.module.css';
import PieChartComponent from './../../components/PieChart/PieChart';
import Balance from './../../components/Balance';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';
import React from 'react';
import SelectStatistics from '../../components/StatisticMenu';
import StatisticTable from '../../components/StatisticTable';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <Balance />
      <CurrencyRatesPanel />
      <PieChartComponent />
      <SelectStatistics />
      <StatisticTable />
    </div>
  );
};

export default StatisticView;
