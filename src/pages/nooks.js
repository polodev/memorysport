import React from 'react'
import shapes from '../data/shapeArr.js'
import rhymes from '../data/rhymeArr.js'
import {dominicPAO} from '../data/dominicArray'
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
  village,
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
  ...village,
]

const nooksArr = locis.map(loci => loci.nooks)
const nooksArrFlat = nooksArr.reduce((cumilative, current) => [...cumilative, ...current])

class nooks extends React.Component {
  render () {
    return (
        <div>
          {
            nooksArrFlat.map((nook, index) =>
              <li
                style={{listStyle: 'none', borderBottom: '2px solid salmon', padding: 5}}
                key={index}>
                {nook} {`   <<<-------->>>`} {_generating_dominic(dominicPAO, shapes, rhymes, (index + 1))}
              </li>)
          }
        </div>
      )
  }
}

export default nooks
