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
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Memory sport </h3>
      </Link>
      <ul style={{listStyle: 'none', margin: 0, padding: 0, marginTop: '2em'}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/village-loci/">Village-loci</ListLink>
        <ListLink to="/rhyme">Rhyme</ListLink>
        <ListLink to="/shape">Shape</ListLink>
        <ListLink to="/major">Major</ListLink>
        <ListLink to="/dominic">Dominic</ListLink>
      </ul>
    </header>
