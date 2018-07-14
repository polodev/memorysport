import React from 'react'
import Link from 'gatsby-link'
const styles = {
  list: {
    display: 'inline-block',
    padding: '5px 10px',
    border: '1px solid teal',
    margin: '8px',
  },
  listContainer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    marginBottom: 40
  },
  link: {
    fontSize: 30,
    fontWeight: 700,
  }
}

const ListLink = props =>
  <li style={styles.list}>
    <Link style={styles.link} to={props.to}>
      {props.children}
    </Link>
  </li>

 export default () =>  
      <div style={{ marginBottom: `1.5rem` }}>
      <ul style={styles.listContainer}>
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
        <ListLink to="/englishletter">englishletter</ListLink>
      </ul>
    </div>
