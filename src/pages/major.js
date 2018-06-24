import React from 'react'
import styles from '../utils/style.module.css'

const majors = [
"0 - z, s, x",
"1 - T, D",
"2 - N",
"3 - M",
"4 - R",
"5 - L",
"6 - J, Ch, Sh",
"7 - K, C",
"8 - F V",
"9 - p, b"
];

export default () => <div>
  <h1 className={styles.pageHeader}>Major system</h1>

  <ul className={styles.uList}>
  {
    majors.map((number, index) => 
      <li key={index} className={styles.singleList}>{number}</li>
      )
  }
  </ul>
</div>