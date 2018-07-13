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
        <ListLink to="/catloci/">Cat Loci</ListLink>
        <ListLink to="/locitimer/">locitimer</ListLink>
        <ListLink to="/catlocicompact/">Cat Loci Compact</ListLink>
        <ListLink to="/rhyme">Rhyme</ListLink>
        <ListLink to="/shape">Shape</ListLink>
        <ListLink to="/major">Major</ListLink>
        <ListLink to="/dominic">Dominic</ListLink>
        <ListLink to="/dominiccompact">dominiccompact</ListLink>
        <ListLink to="/dominicquiz">dominicquiz</ListLink>
        <ListLink to="/dominichotel">DominicHotel</ListLink>
        <ListLink to="/calculation">Calculation</ListLink>
        <ListLink to="/pi">pi</ListLink>
        <ListLink to="/nooks">nooks</ListLink>
        <ListLink to="/locititles">locititles</ListLink>
        <ListLink to="/villagetitles">villagetitles</ListLink>
      </ul>
    </div>
