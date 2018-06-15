import React from 'react'
import styles from '../utils/style.module.css'
import {dominicNumbers, dominicPAO} from './dominicArray.js'

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
  <h1 className={styles.pageHeader}>Dominic system</h1>
  <table>
    <tr>
      <th>Number</th>
      <th>Letter</th>
    </tr>
    {
      dominicNumbers.map((dominic, index) => 
        <tr key={index} className='hello'>
          <td>{dominic.index}</td>
          <td>{dominic.letter}</td>
        </tr>
        )
    }
  </table>
</div>