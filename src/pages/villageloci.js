import React from 'react'
import styles from '../utils/style.module.css'
import Loci from '../components/Loci'

import houses from '../data/villageLociArray.js'
// const quizTitles = titles.map((title, index) => {
//   return  {
//     number: index + 1,
//     title,
//     mnemonic: _generating_dominic(dominicPAO, shapes, rhymes, (index + 1))
//   }
// })
export default () => 
<div>
  <Loci pageTitle="Village Loci" arr={houses} />
</div>
  

