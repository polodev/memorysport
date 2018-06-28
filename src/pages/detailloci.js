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
  dhakaMess1,
  palashMess,
  dhakaMama,
  tarunHouse
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
    <li className='singleList'> <a href='#dhakaMess1'>dhakaMess1 - {dhakaMess1.length}</a> </li>
    <li className='singleList'> <a href='#indiaMama'>indiaMama - {indiaMama.length}</a> </li>
    <li className='singleList'> <a href='#palashMess'>palashMess - {palashMess.length}</a> </li>
    <li className='singleList'> <a href='#dhakaMama'>dhakaMama houses - {dhakaMama.length}</a> </li>
    <li className='singleList'> <a href='#tarunHouse'>tarunHouse houses - {tarunHouse.length}</a> </li>
    <li className='singleList'> <a href='#banjaraHills'>banjaraHills - {banjaraHills.length}</a> </li>
    <li className='singleList'> <a href='#village'>Village houses - {village.length}</a> </li>
  </ul>

  <Loci id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
  <Loci id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
  <Loci id='palashpurBiren' pageTitle="Palashpur Biren Home" arr={palashpurBiren} />
  <Loci id='feniMess' pageTitle="feniMess houses" arr={feniMess} />
  <Loci id='palashHome' pageTitle="palash Home" arr={palashHome} />
  <Loci id='dhakaMess1' pageTitle="Dhaka mess main(1)" arr={dhakaMess1} />
  <Loci id='indiaMama' pageTitle="India mama Home" arr={indiaMama} />
  <Loci id='palashMess' pageTitle="Palash Mess" arr={palashMess} />
  <Loci id='dhakaMama' pageTitle="dhakaMama houses" arr={dhakaMama} />
  <Loci id='tarunHouse' pageTitle="tarunHouse houses" arr={tarunHouse} />
  <Loci id='banjaraHills' pageTitle="banjaraHills" arr={banjaraHills} />
  <Loci id='village' pageTitle="Village houses" arr={village} />
</div>
  

