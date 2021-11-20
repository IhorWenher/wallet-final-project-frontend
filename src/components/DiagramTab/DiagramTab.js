import React from 'react';
import PieChart from '../PieChart';
import StatisticMenu from './StatisticMenu';
import Table from './Table';

import styles from './DiagramTab.module.css';

export default function DiagramTab() {
  return (
    <div className={styles.container}>
      <PieChart />
      <div>
        <StatisticMenu />
        <Table />
      </div>
    </div>
  );
}
