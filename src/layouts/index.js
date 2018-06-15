import React from "react";
import Link from 'gatsby-link'
import Header from './header.js';

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>Memory sport </h3>
    </Link>
      {children()}
  </div>