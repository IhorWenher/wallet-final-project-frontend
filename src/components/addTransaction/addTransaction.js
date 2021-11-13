import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'moment/locale/ru'

import styles from "./styles.module.css";

function AddTransaction() {
    const [transactionType, setTransactionType] = useState("income");
    const [category, setCategory] = useState("Выберите категорию");
    const [listActive, setListActive] = useState(false)
    const [summ, setSumm] = useState('')

    function radioClickHandler(e) {
         setTransactionType(e.target.value)
    }

    function categoryClickHandler(e) {
        setCategory(e.target.textContent)
        setListActive(!listActive)
    }

    function listOpen(e) {
        setListActive(!listActive)
    }

    function summChange(e) {
        const number = Number(e.target.value)
        const integer = Number.isInteger(number)

        if (!integer) {
            const [int, float] = String(number).split('.')
            setSumm(`${int}.${float.slice(0, 2)}`)
            return
        }
        setSumm(e.target.value)
      }


    // задача данной функции, повесить дополнительный класс по условию.
    function classTrigger() {
        if (category === 'Еда') {
            const basic = styles.dropDownField
            const active = styles.dropDownFieldActive
            
            return `${basic} ${active}`
        }

        return styles.dropDownField
    }
    // задача данной функции, повесить дополнительный класс по условию.


    // разметка для выпадающего списка
    const dropDownJSX = (
        <div className={styles.dropDownContainer}>
            <div className={classTrigger()} onClick={listOpen}>
                <span className={styles.selectedCategory}>{category}(можно нажать)</span>
            </div>

            {listActive && <ul className={styles.dropDownList}>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Основной</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Еда</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Авто</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Развитие</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Дети</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Дом</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Образование</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Остальные</li>
            </ul>}
        </div>
    // разметка для выпадающего списка
    )
 

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Добавить транзакцию</h2>
            <form id="transaction" className={styles.form}>
                <div className={styles.radioContainer}>
                    <label htmlFor="income">Доход</label>
                    <input defaultChecked onClick={radioClickHandler} name="transactionType" type="radio" id="income" value="income"/>
                    <label htmlFor="spending">Расход</label>
                    <input onClick={radioClickHandler} name="transactionType" type="radio" id="spending" value="spending"/>
                </div>

                {/* рендер списка по условию */}
                {transactionType === 'income' && dropDownJSX}
                {/* рендер списка по условию */}
                <input className={styles.summField} onChange={summChange} type="number" placeholder="0.00" value={summ} />
                <div className={styles.calendarContainer}>
                    <Datetime inputProps={{ className: styles.calenarField }} initialValue={new Date()} closeOnSelect={true} timeFormat={false}  />
                </div>
                
                <textarea className={styles.commentField} placeholder="ekekeke" />
            </form>
            <div className={styles.buttonsContainer}>
                <button className={styles.submitButton} form="transaction" type="submit" >Добавить</button>
                <button className={styles.cancelButton}>Отмена</button>
            </div>
        </div>
    )
};


export default AddTransaction;