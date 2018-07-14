import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import {village} from '../data/catLociArray.js'
import shapes from '../data/shapeArr.js'
import rhymes from '../data/rhymeArr.js'
import {_generating_dominic} from '../data/functions.js'
import LociDominic from '../components/LociDominic'
const titles = village.map(loci => loci.title)
const quizTitles = titles.map((title, index) => {

  return  {
    number: index + 1,
    title,
    mnemonic: _generating_dominic(dominicPAO, shapes, rhymes, (index + 1))
  }
})
  

class villagetitles extends React.Component {
  render () {
    return (
        <div>
          <h1>titles loci with dominic quiz</h1>
          <LociDominic titles={quizTitles} />
          <h1>titles loci with dominic</h1>
          {
            titles.map((title, index) =>
              <li
                style={{listStyle: 'none', borderBottom: '2px solid salmon', padding: 5}}
                key={index}>
                {title} {`   <<<-------->>>`} {_generating_dominic(dominicPAO, shapes, rhymes, (index + 1))}
              </li>)
          }
        </div>
      )
  }
}

export default villagetitles;
