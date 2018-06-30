import React from 'react'
import Link from 'gatsby-link';
import styles from '../utils/style.module.css'

const ListLink = props =>
  <li className={styles.singleList}>
    <Link className={styles.home_link} to={props.to}>
      {props.children}
    </Link>
  </li>

 export default () =>  
      <div style={{ marginBottom: `1.5rem` }}>
      <ul className={styles.uList}>
        <ListLink to="/routine">Routine</ListLink>
        <ListLink to="/villageloci/">Village-loci</ListLink>
        <ListLink to="/detailloci/">Detail Loci</ListLink>
        <ListLink to="/rhyme">Rhyme</ListLink>
        <ListLink to="/shape">Shape</ListLink>
        <ListLink to="/major">Major</ListLink>
        <ListLink to="/dominic">Dominic</ListLink>
        <ListLink to="/calculation">Calculation</ListLink>
      </ul>
    </div>
