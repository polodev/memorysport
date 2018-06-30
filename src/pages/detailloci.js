import React from 'react'
import Loci from '../components/Loci.js'
import LociLi from '../components/LociLi'
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
  tarunHouse,
  hyderabadVillaStay,
  hyderabadVillaWork
} from '../data/lociArray.js'
// class LociLi extends React.Component {
//   arrayCount = (arr) => arr.filter(loc => loc !='<br>').length
//   render = () => <li className='singleList'> <a href={`#${this.props.id}`}>{this.props.pageTitle} - {this.arrayCount(this.props.arr)} </a> </li>
// }
class detailloci extends React.Component {
  arrayCount = (arr) => arr.filter(loc => loc !='<br>').length
  render () {
    return (
      <div>
        <h3>Table of Content(ToC)</h3>
        <ul className='uList'>
          <LociLi id='village' pageTitle="Village houses" arr={village} />
          <LociLi id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
          <LociLi id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
          <LociLi id='palashpurBiren' pageTitle="Palashpur Biren Home" arr={palashpurBiren} />
          <LociLi id='feniMess' pageTitle="feniMess houses" arr={feniMess} />
          <LociLi id='palashHome' pageTitle="palash Home" arr={palashHome} />
          <LociLi id='dhakaMess1' pageTitle="Dhaka mess main(1)" arr={dhakaMess1} />
          <LociLi id='indiaMama' pageTitle="India mama Home" arr={indiaMama} />
          <LociLi id='palashMess' pageTitle="Palash Mess" arr={palashMess} />
          <LociLi id='dhakaMama' pageTitle="dhakaMama houses" arr={dhakaMama} />
          <LociLi id='tarunHouse' pageTitle="tarunHouse houses" arr={tarunHouse} />
          <LociLi id='banjaraHills' pageTitle="banjaraHills" arr={banjaraHills} />
          <LociLi id='hyderabadMtww' pageTitle="MTWW" arr={hyderabadMtww} />
          <LociLi id='hyderabadVillaStay' pageTitle="hyderabadVillaStay" arr={hyderabadVillaStay} />
          <LociLi id='hyderabadVillaWork' pageTitle="hyderabadVillaWork" arr={hyderabadVillaWork} />
          <LociLi id='bangalore' pageTitle="bangalore" arr={bangalore} />
        </ul>

        <div>
          <Loci id='village' pageTitle="Village houses" arr={village} />
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
          <Loci id='hyderabadMtww' pageTitle="MTWW" arr={hyderabadMtww} />
          <Loci id='hyderabadVillaStay' pageTitle="hyderabadVillaStay" arr={hyderabadVillaStay} />
          <Loci id='hyderabadVillaWork' pageTitle="hyderabadVillaWork" arr={hyderabadVillaWork} />
          <Loci id='bangalore' pageTitle="bangalore" arr={bangalore} />
        </div>
      </div>


      )
  }
}
export default detailloci;
  

