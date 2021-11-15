import { ReactSVG } from 'react-svg';
import svgPlus from '../../images/plus-icon.svg';
import styles from './AddTransactionBtn.module.css';
import React from 'react';

export default function OpenTransactionBtn({ toggleModal }) {
  return (
    <button type="button" className={styles.btn} onClick={toggleModal}>
      <ReactSVG className={styles.svgComponent} src={svgPlus} />
    </button>
  );
}
