import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from '../../redux/currency/currencyOperations';
import currencySelector from "../../redux/currencySelectors";
import Vector from '../../images/vector.svg';
import styles from './CurrencyRatesPanel.module.css';

function CurrencyRatesPanel() {

    const currencyRates = useSelector(currencySelector.currencyRates);
    const currencyRatesLoading = useSelector(currencySelector.currencyRatesLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrencies);
    }, [dispatch]);

    const formatRate = (rate) => rate > 9 ? "" + Number(rate).toFixed(2): "0" + Number(rate).toFixed(2);  

    return (
        <div className={styles.currencyRatesPanel}>
            <ul className={styles.currencyRatesHead}>
                <li>Валюта</li>
                <li>Покупка</li>
                <li>Продажа</li>
            </ul>
            {currencyRatesLoading
            ? <div><h1>Loading rates ...</h1></div>
            : <ul className={styles.currencyRatesList}>
                    {currencyRates.map(({ ccy, buy, sale }) => 
                        <li className={styles.currencyRatesListItem} key={ccy}>
                            <p>{ccy}</p>
                            <p>{formatRate(buy)}</p>
                            <p>{formatRate(sale)}</p>
                        </li>)}
                </ul>}         
                <img src={Vector} alt="vector" className={styles.vector}/>
        </div>
    );
}

export default CurrencyRatesPanel;