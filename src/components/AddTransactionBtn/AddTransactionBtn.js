import styles from './AddTransactionBtn.module.css';

export default function OpenTransactionBtn({toggleModal}) {
  return (
    <button type="button" className={styles.btn} onClick={toggleModal}>
      <svg>
        <use xlinkHref='../../images/plus-icon.svg'></use>
      </svg>
    </button>
  );
}
