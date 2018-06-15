import React from 'react'
import styles from '../utils/style.module.css'
console.log(styles)

import houses from './villageLociArray.js'
export default () => 
<div>
  <h1 className={styles.pageHeader}>Village Loci</h1>
  <ul className={styles.unList}>
    {
      houses.map((house, index) => 
        <li className={styles.singleList} key={index}> {index + 1} -  {house}</li>
        )
    }
  </ul>
</div>
  

