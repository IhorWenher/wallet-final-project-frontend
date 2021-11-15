// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTransactions } from '../../redux/transactions/transactions-operations';
// import { getTransactions } from '../../redux/transactions';

import data from './data.json';
import styles from './Dashboard.module.css';
import React from 'react';

export default function Dashboard() {
  const dashboardData = data;

  // const dashboardData = useSelector(getTransactions)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTransactions)
  // }, [dispatch])

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th>Баланс</th>
          </tr>
        </thead>
        <tbody>
          {dashboardData &&
            dashboardData.map(el => (
              <tr
                key={el.id}
                className={styles.tableElement}
                style={{
                  borderLeft:
                    el.type === '+' ? '5px solid #24cca7' : '5px solid #ff6596',
                }}
              >
                <td data-label="Дата">{el.date}</td>
                <td data-label="Тип">{el.type}</td>
                <td data-label="Категория">{el.category}</td>
                <td data-label="Комментарий">{el.comment}</td>
                <td
                  data-label="Сумма"
                  style={{ color: el.type === '+' ? '#24cca7' : '#ff6596', fontWeight: 'bold' }}
                >
                  {el.sum}
                </td>
                <td data-label="Баланс">{el.balance}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
