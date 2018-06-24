import React from 'react';
import styles from '../utils/style.module.css'

export default ({pageTitle, arr}) => 
<div>
  <h1 className={styles.pageHeader}>{pageTitle}</h1>
  <ul className={styles.unList}>
    {
      arr.map((item, index) => 
        <li className={styles.singleList} key={index}> {index + 1} -  {item}</li>
        )
    }
  </ul>
</div>
