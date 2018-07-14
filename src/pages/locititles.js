import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import shapes from '../data/shapeArr.js'
import rhymes from '../data/rhymeArr.js'
import {_generating_dominic} from '../data/functions.js'
import LociDominic from '../components/LociDominic'
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
const quizTitles = titles.map((title, index) => {
  return  {
    number: index + 1,
    title,
    mnemonic: _generating_dominic(dominicPAO, shapes, rhymes, (index + 1))
  }
})
  

class locititles extends React.Component {
  render () {
    return (
        <div>
          <h1>titles loci with dominic quiz</h1>
          <LociDominic titles={quizTitles} titles_length={184} />
          <h1>titles loci with dominic</h1>
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
