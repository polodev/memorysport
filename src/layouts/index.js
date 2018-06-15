import React from "react";
import Link from 'gatsby-link'

export default ({ children }) =>
  <div style={{ margin: `10px 20px`, padding: `1.25rem 1rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{marginBottom: 20, textAlign: 'center'}}>Memory sport </h3>
    </Link>
      {children()}
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{marginBottom: 20, textAlign: 'center'}}>Memory sport </h3>
    </Link>
  </div>