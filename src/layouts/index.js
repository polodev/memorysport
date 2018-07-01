import React from "react";
import Link from 'gatsby-link'
import styles from '../utils/style.module.css'

export default ({ children }) =>
  <div className={styles.main}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{marginBottom: 20, textAlign: 'center'}}>Memory sport </h3>
    </Link>
      {children()}
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{marginTop: 50, textAlign: 'center'}}>Memory sport </h3>
    </Link>
  </div>