import React from 'react';
import styles from '../utils/style.module.css'

export default ({pageTitle, arr, id='test'}) => 
<div>
  <h1 id={id} className={styles.pageHeader}>
    <a href='#'>{pageTitle} {`(${arr.length})`}</a>
  </h1>
  <ul className={styles.uList}>
    {
      arr.map((item, index) => 
        <li className={styles.singleList} key={index}> {index + 1} -  {item}</li>
        )
    }
  </ul>
</div>
