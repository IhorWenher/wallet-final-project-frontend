import Styles from './Container.module.css';
import React from 'react';

const Container = ({ children }) => {
  return <div className={Styles.container}> {children} </div>;
};

export default Container;
