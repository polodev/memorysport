import React from 'react'
import styles from '../utils/style.module.css'
import {dominicNumbers, dominicPAO} from '../data/dominicArray.js'


export default () => <div>
  <h1 className={styles.pageHeader}>Dominic system</h1>
  <table>
    <tbody>
      
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
    </tbody>
  </table>
  <h1 className={`${styles.pageHeader} ${styles.pageHeader_top}` }>Dominic PAO</h1>
  <div className={styles.responsiveTable}>
  <table>
  <tbody>
    <tr>
      <th>Letter</th>
      <th>Number</th>
      <th>Person</th>
      <th>Action</th>
      <th>Object</th>
    </tr>
    {
      dominicPAO.map((dominic, index) => 
        <tr onClick={() => console.log(dominic)} key={index} className='hello' title={dominic.hints}>
          <td>{dominic.letter}</td>
          <td>{dominic.number}</td>
          <td>{dominic.person}</td>
          <td>{dominic.action}</td>
          <td>{dominic.object}</td>
        </tr>
        )
    }
    </tbody>
  </table>
  </div>
</div>