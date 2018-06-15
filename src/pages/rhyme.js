import React from 'react'
import styles from '../utils/style.module.css'

const rhymes = [
"1 - gun : Visualize the first item being fired from a gun",
"2 - shoe : Visualize an association between the second thing and a shoe",
"3 - tree : Visualize the third item growing from a tree",
"4 - door : Visualize the fourth item associated with a door",
"5 - hive : Visualize the fifth item associated with a hive or with bees",
"6 - bricks : Visualize the sixth item associated with bricks",
"7 - heaven : Visualize the seventh item associated with heaven",
"8 - weight (or height) : Visualize the eighth item on a weight (or height) as if you are heavy (or high)",
"9 - wine : Visualize a glass containing the ninth item",
"10 - hen : Visualize the tenth item associated with a chicken."
];

export default () => <div>
  <h1 className={styles.pageHeader}>Rhyme</h1>

  <ul className={styles.unList}>
  {
    rhymes.map((rhyme, index) => 
      <li key={index} className={styles.singleList}>{rhyme}</li>
      )
  }
  </ul>
</div>