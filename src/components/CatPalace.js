import React from 'react'
import TitleNook from './TitleNook'

export default ({arr, pageTitle, id}) => {
  const numberOfNooks = arr.map(item => item.nooks.length).reduce((cumulative, newItem) => cumulative += newItem);
  return (
    <div id={id}>
      <h2 style={{textAlign: 'center', borderBottom: "2px solid salmon", marginTop: '2em'}}>
        <a href="#">
          {pageTitle} - (place - {arr.length}) - (nooks - {numberOfNooks})
        </a>
      </h2>
      <ul>
        {arr.map((item, index) => <TitleNook key={index} item={item} />)}
      </ul>
    </div>

    )
}

