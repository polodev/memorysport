import React from 'react'
import Link from 'gatsby-link';
const ListLink = props =>
  <li>
    <Link style={{display: 'block', textAlign: 'center'}} to={props.to}>
      {props.children}
    </Link>
  </li>

 export default () =>  
      <header style={{ marginBottom: `1.5rem` }}>
      <ul style={{listStyle: 'none', margin: 0, padding: 0, marginTop: '2em'}}>
        <ListLink to="/villageloci/">Village-loci</ListLink>
        <ListLink to="/rhyme">Rhyme</ListLink>
        <ListLink to="/shape">Shape</ListLink>
        <ListLink to="/major">Major</ListLink>
        <ListLink to="/dominic">Dominic</ListLink>
      </ul>
    </header>
