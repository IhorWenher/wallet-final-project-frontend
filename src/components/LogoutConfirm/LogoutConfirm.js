// import { ReactSVG } from 'react-svg';
import React from 'react';

import styles from './styles.module.css';

export default function LogoutConfirm({toggleModal}) {

    function confirm(e) {
        console.log('выход из профиля')
        // вызываем операцию логаута
        // делаем редирект на главную страницу
    }

    function cancel(e) {
        console.log('отмена')
        toggleModal()
        // закрываем модалку
    }



    return (
    <div className={styles.confirmContainer}>
        <p className={styles.text}>Вы уверены?</p>
        <div>
            <button onClick={confirm} className={styles.btn}>Выйти</button>
            <button onClick={cancel} className={styles.btn}>Отмена</button>
        </div>
    </div>
    );
}
