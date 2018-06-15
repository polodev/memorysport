import React from 'react'
import styles from '../utils/style.module.css'

const shapes = [
"0 - blackhole, tire, donut",
"1 - pencil, candle",
"2 - swan",
"3 - hearts, butterfly",
"4 - sailboat",
"5 - hook, pulley",
"6 - golf club, lasso, pipe",
"7 - Axe, scythe, boomerang",
"8 - hour glass, snowman",
"9 - tadpole, flag",
]
export default () => 
<div>
  <h1 className={styles.pageHeader}>Shape</h1>
  
  <ul className={styles.unList}>
    {
      shapes.map((shape, index) => 
        <li className={styles.singleList} key={index}>{shape}</li>
        )
    }
  </ul>

</div>
  

