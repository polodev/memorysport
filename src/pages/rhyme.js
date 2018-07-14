import React from 'react'
import styles from '../utils/style.module.css'
import rhymes from '../data/rhymeArr.js'


export default () => <div>
  <h1 className={styles.pageHeader}>Rhyme</h1>

  <ul className={styles.uList}>
  {
    rhymes.map((rhyme, index) =>
      <li key={index} className={styles.singleList}>
        {rhyme.number} - {rhyme.mnemonic}
      </li>
      )
  }
  </ul>
</div>