import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import Datetime from 'react-datetime';
import 'moment/locale/ru'

import styles from "./styles.module.css";

function AddTransaction() {
    const [transactionType, setTransactionType] = useState("income");
    const [category, setCategory] = useState("Выберите категорию");
    const [listActive, setListActive] = useState(false)

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

    // разметка для выпадающего списка
    const dropDownJSX = (
        <div className={styles.dropDownContainer}>
            <div className={styles.dropDownField} onClick={listOpen}>
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
            <h2>Добавить транзакцию</h2>
            <form className={styles.typeContainer}>
                <input defaultChecked onClick={radioClickHandler} name="transactionType" type="radio" id="income" value="income"/>
                <label htmlFor="income">Доход</label>

                <input onClick={radioClickHandler} name="transactionType" type="radio" id="spending" value="spending"/>
                <label htmlFor="spending">Расход</label>

                {/* рендер списка по условию */}
                {transactionType === 'income' && dropDownJSX}
                {/* рендер списка по условию */}

                <input className={styles.formField} type="number" placeholder="0.00"/>
                
                <Datetime initialValue={new Date()} closeOnSelect={true} timeFormat={false}  />
                
                <textarea className={styles.formField} type="text" placeholder="ekekeke" />
                <button type="submit" className={styles.formButton}>Добавить</button>
                <button className={styles.formButton}>Отмена</button>
            </form>
        </div>
    )
};


export default AddTransaction;