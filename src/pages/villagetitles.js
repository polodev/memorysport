import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import {village} from '../data/catLociArray.js'
import shapes from '../data/shapeArr.js'
import rhymes from '../data/rhymeArr.js'
import {_generating_dominic} from '../data/functions.js'
const titles = village.map(loci => loci.title)

class villagetitles extends React.Component {
  render () {
    return (
        <div>
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
