// import { useState, useEffect } from 'react';
// import Datetime from 'react-datetime';
// import { Link, useLocation } from 'react-router-dom';
// import fetch from '../../service';
import Datetime from 'react-datetime';
import 'moment/locale/ru'

import styles from "./styles.module.css";

function AddTransaction() {
 

    return (
        <div className={styles.container}>
            <h2>Добавить транзакцию</h2>
            <form className={styles.typeContainer}>
                <input name="transactionType" type="radio" id="income" />
                <label htmlFor="income">Доход</label>

                <input name="transactionType" type="radio" id="spending" />
                <label htmlFor="spending">Расход</label>

                <input className={styles.formField} type="number" placeholder="0.00"/>
                
                {/* <input className={styles.formField} type="date" /> */}
                <Datetime initialValue={new Date()} closeOnSelect={true} timeFormat={false} />
                
                <textarea className={styles.formField} type="text" placeholder="ekekeke" />
                
                <button type="submit" className={styles.formButton}>Добавить</button>
                <button className={styles.formButton}>Отмена</button>
            </form>
        </div>
    )
};


export default AddTransaction;