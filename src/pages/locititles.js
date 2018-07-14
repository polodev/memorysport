import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import shapes from '../data/shapeArr.js'
import rhymes from '../data/rhymeArr.js'
import {_generating_dominic} from '../data/functions.js'
import {
  fatepurHome,
  fatepurRatanMama,
  fatepurTarun,
  palashpurBasudev,
  palashpurBiren,
  palashHome,
  feniMess,
  feniOffice,
  feniCollege,
  dhakaMess1,
  dhakaMess2,
  dhakaMess3,
  palashMess1,
  palashMess2,
  dhakaMama,
  indiaMama,
  banjaraHills ,
  hyderabadMtww,
  hyderabadVillaWork,
  hyderabadVillaStay,
  bangalore,
} from '../data/catLociArray.js'
const locis = [
  ...fatepurHome,
  ...fatepurRatanMama,
  ...fatepurTarun,
  ...palashpurBasudev,
  ...palashpurBiren,
  ...palashHome,
  ...feniMess,
  ...feniOffice,
  ...feniCollege,
  ...dhakaMess1,
  ...dhakaMess2,
  ...dhakaMess3,
  ...palashMess1,
  ...palashMess2,
  ...dhakaMama,
  ...indiaMama,
  ...banjaraHills ,
  ...hyderabadMtww,
  ...hyderabadVillaWork,
  ...hyderabadVillaStay,
  ...bangalore,
]

const titles = locis.map(loci => loci.title)

class locititles extends React.Component {
  render () {
    return (
        <div>
          {
            titles.map((title, index) =>
              <li
                style={{listStyle: 'none', borderBottom: '2px solid salmon', padding: 5}}
                key={index}>
                {title} {`<<<------>>>`} {_generating_dominic(dominicPAO, shapes, rhymes, (index + 1))}
              </li>)
          }
        </div>
      )
  }
}

export default locititles;
