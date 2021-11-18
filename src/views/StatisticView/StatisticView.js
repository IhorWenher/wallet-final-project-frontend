import Styles from './StatisticView.module.css';

import Balance from './../../components/Balance';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';
import React from 'react';
import DiagramTab from '../../components/DiagramTab/';

const StatisticView = () => {
  return (
    <div className={Styles.container}>
      <Balance />
      <CurrencyRatesPanel />
      <DiagramTab />
    </div>
  );
};

export default StatisticView;
