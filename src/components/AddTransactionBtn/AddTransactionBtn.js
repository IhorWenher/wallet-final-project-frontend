import styles from './AddTransactionBtn.module.css'

export default function OpenTransactionBtn() {
  const onOpenTransactions = ()=>{
  
  }
  
  return (
    <button type='button' className={styles.btn} onClick={onOpenTransactions}><svg><use href='../../images/plus-icon.svg'></use></svg></button>
  )
}