import React from 'react'
import Loci from '../components/Loci.js'
import village from '../data/villageLociArray.js'
import {
  fatepurHome,
  palashpurBasudev,
  palashpurBiren,
  feniMess,
  palashHome,
  indiaMama,
  bangalore,
  hyderabadMtww,
  banjaraHills ,
  ratanMama,
  dhakaMess,
  palashMess,
  dhakaMama
} from '../data/lociArray.js'
export default () => 
<div>
  <h3>Table of Content(ToC)</h3>
  <ul className='uList'>
    <li className='singleList'> <a href='#fatepurHome'>Fatepur Home</a> </li>
    <li className='singleList'> <a href='#palashpurBasudev'>Palashpur Basudev Home</a> </li>
    <li className='singleList'> <a href='#village'>Village houses</a> </li>
  </ul>

  <Loci id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
  <Loci id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
  <Loci id='village' pageTitle="Village houses" arr={village} />
</div>
  

