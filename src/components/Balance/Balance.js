import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Balance.module.css';
import { fetchBalance } from '../../redux/balance/balance-operations';
import { balance as balanceSelector } from '../../redux/balance/balance-selectors';

const moneyFormat = Intl.NumberFormat('ru-RU');

function Balance() {
    const balance = useSelector(balanceSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBalance)
    }, [dispatch]);

    return (
        <div className={styles.balance}>
            <h2 className={styles.balanceTitle}>Ваш баланс</h2>
            <h2 className={styles.balanceValue}> &#8372; {moneyFormat.format(balance)}</h2>
        </div>
    );
}

export default Balance;