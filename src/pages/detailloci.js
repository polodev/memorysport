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
    <li className='singleList'> <a href='#fatepurHome'>Fatepur Home - {fatepurHome.length} </a> </li>
    <li className='singleList'> <a href='#palashpurBasudev'>Palashpur Basudev Home - {palashpurBasudev.length} </a></li>
    <li className='singleList'> <a href='#palashpurBiren'>Palashpur Biren Home - {palashpurBiren.length} </a> </li>
    <li className='singleList'> <a href='#feniMess'>feniMess houses - {feniMess.length}</a> </li>
    <li className='singleList'> <a href='#palashHome'>palashHome - {palashHome.length}</a> </li>
    <li className='singleList'> <a href='#indiaMama'>indiaMama - {indiaMama.length}</a> </li>
    <li className='singleList'> <a href='#village'>Village houses - {village.length}</a> </li>
  </ul>

  <Loci id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
  <Loci id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
  <Loci id='palashpurBiren' pageTitle="Palashpur Biren Home" arr={palashpurBiren} />
  <Loci id='feniMess' pageTitle="feniMess houses" arr={feniMess} />
  <Loci id='palashHome' pageTitle="palash Home" arr={palashHome} />
  <Loci id='indiaMama' pageTitle="India mama Home" arr={indiaMama} />
  <Loci id='village' pageTitle="Village houses" arr={village} />
</div>
  

