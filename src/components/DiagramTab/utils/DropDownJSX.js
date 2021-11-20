import React from 'react';
import styles from './DropDownJSX.module.css';
import { ReactSVG } from 'react-svg';
import svgIcon from '../../../images/categories-list-icon.svg';
import { useState } from 'react';

export default function DropDownJSX({ categoryName, categoryArray }) {
  const [category, setCategory] = useState(categoryName);
  const [listVisible, setListVisible] = useState(false);

  function onClickCategory() {
    listVisible ? setListVisible(false) : setListVisible(true);
  }
  function onClickList(name) {
    setCategory(name);
    setListVisible(false);
  }

  return (
    <form className={styles.container}>
      <div className={styles.category} onClick={onClickCategory}>
        {category}
        <ReactSVG src={svgIcon} className={styles.arrow} />
      </div>
      {listVisible && (
        <ul className={styles.itemContainer}>
          {categoryArray.map((name, idx) => (
            <li
              className={styles.listItem}
              onClick={() => onClickList(name)}
              key={idx}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
