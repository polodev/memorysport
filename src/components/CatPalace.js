import React from 'react'
import TitleNook from './TitleNook'

export default ({arr, pageTitle, id}) =>
  <div id={id}>
    <h2 style={{textAlign: 'center', borderBottom: "2px solid salmon", marginTop: '2em'}}>
      <a href="#">
        {pageTitle} - ({arr.length})
      </a>
    </h2>
    <ol>
      {arr.map((item, index) => <TitleNook key={index} item={item} />)}
    </ol>
  </div>