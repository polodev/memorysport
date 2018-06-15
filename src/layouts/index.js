import React from "react";
import Link from 'gatsby-link'

export default ({ children }) =>
  <div style={{ margin: `0 20px`, padding: `1.25rem 1rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{marginBottom: 20}}>Memory sport </h3>
    </Link>
      {children()}
  </div>