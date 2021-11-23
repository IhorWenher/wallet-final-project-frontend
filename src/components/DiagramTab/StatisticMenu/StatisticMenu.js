import * as React from 'react';

import DropDownJSX from '../utils/DropDownJSX';
import styles from './StatisticMenu.module.css';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = [2021, 2022, 2023];

export default function StatisticMenu({monthClicker, yearClicker}) {
  // const monthNow = new Date().getMonth();
  // const yearNow = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <DropDownJSX dateClicker={monthClicker} categoryName={'Месяц'} categoryArray={months} />
      <DropDownJSX dateClicker={yearClicker} categoryName={'Год'} categoryArray={years} />
    </div>
  );
}
