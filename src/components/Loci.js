import React from 'react';
import styles from '../utils/style.module.css'

export default ({pageTitle, arr, id='test'}) =>  {
  const arrWithOutBr = arr.filter(loc => loc != '<br>')
   return (<div>
    <h1 id={id} className={styles.pageHeader}>
      <a href='#'>{pageTitle} {`(${arrWithOutBr.length})`}</a>
    </h1>
    <ul className={styles.uList}>
      {
        arr.map((item, index) => {
          return item === '<br>' ?
          <li className={`${styles.singleList} ${styles.singleListWithBr}`} key={index}></li> :
          <li className={styles.singleList} key={index}> {index + 1} -  {item}</li>

        })
      }
    </ul>
  </div>)  
}

