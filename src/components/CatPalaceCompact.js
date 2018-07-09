import React from 'react'
import TitleNook from './TitleNook'

const styles = {
  span: {
    display: 'inline-block',
    border: '1px solid #444',
    padding: '5px 10px',
    margin: 5,
  },
  wrapper: {
    marginBottom: 30,
  }
}

export default ({arr, pageTitle, id}) => {
  return (
    <div style={styles.wrapper} id={id}>
      <h3>
        <a href="#">{pageTitle}</a>
      </h3>
      <div>
        {
          arr.map((item, index) => <span key={index} style={styles.span}>{item.title}</span>)
        }
      </div>
    </div>

    )
}

