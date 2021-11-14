import { ReactSVG } from 'react-svg'
import svgPlus from '../../images/plus-icon.svg'
import styles from './AddTransactionBtn.module.css';

export default function OpenTransactionBtn({toggleModal}) {
  return (
    <button type="button" className={styles.btn} onClick={toggleModal}>
      <ReactSVG src={svgPlus}/>
    </button>
  );
}
