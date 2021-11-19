import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Balance.module.css';
import { fetchBalance } from '../../redux/balance/balance-operations';
import { balance as balanceSelector } from '../../redux/balance/balance-selectors';

function Balance() {
    const balance = useSelector(balanceSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBalance)
    }, [dispatch]);

    const formatBalance = balance => balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 }).replace(',', '.');

    return (
        <div className={styles.balance}>
            <h2 className={styles.balanceTitle}>Ваш баланс</h2>
            <h2 className={styles.balanceValue}> <span className={styles.currencySymbol}>&#8372;</span> {balance ? formatBalance(balance) : ''}</h2>
        </div>
    );
}

export default Balance;