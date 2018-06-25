import React from 'react'
import styles from '../utils/style.module.css'

export default ({title, arr, titles=["Number", "Letter"]}) => 
<div>
  <h1 className={`${styles.pageHeader} ${styles.pageHeader_top}` }>{title}</h1>
  <table style={{maxWidth: '320px'}}>
    <tbody>
    <tr>
      <th>{titles[0]}</th>
      <th>{titles[1]}</th>
    </tr>
    {
      arr.map((item, index) => 
        <tr key={index}>
          <td>{item.index}</td>
          <td>{item.letter}</td>
        </tr>
        )
    }
    </tbody>
  </table>
</div>