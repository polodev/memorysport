import React from 'react'
import Loci from '../components/Loci.js'
import LociLi from '../components/LociLi'
import {
  fatepurVillage,
  fatepurHome,
  fatepurRatanMama,
  fatepurTarun,
  palashpurBasudev,
  palashpurBiren,
  palashHome,
  feniMess,
  dhakaMess1,
  dhakaMess2,
  dhakaMess3,
  palashMess,
  dhakaMama,
  indiaMama,
  banjaraHills ,
  hyderabadMtww,
  hyderabadVillaWork,
  hyderabadVillaStay,
  bangalore,
} from '../data/detailLociArray'
// class LociLi extends React.Component {
//   arrayCount = (arr) => arr.filter(loc => loc !='<br>').length
//   render = () => <li className='singleList'> <a href={`#${this.props.id}`}>{this.props.pageTitle} - {this.arrayCount(this.props.arr)} </a> </li>
// }
class detailloci extends React.Component {
  totalArryCount = () => {
    // here will come all array
    const all = [
      ...fatepurVillage,
      ...fatepurHome,
      ...fatepurRatanMama,
      ...fatepurTarun,
      ...palashpurBasudev,
      ...palashpurBiren,
      ...palashHome,
      ...feniMess,
      ...dhakaMess1,
      ...dhakaMess2,
      ...dhakaMess3,
      ...palashMess,
      ...dhakaMama,
      ...indiaMama,
      ...banjaraHills ,
      ...hyderabadMtww,
      ...hyderabadVillaWork,
      ...hyderabadVillaStay,
      ...bangalore,
    ]
    return this.arrayCount(all);
  }
  arrayCount = (arr) => arr.filter(loc => loc !='<br>').length
  render () {
    return (
      <div>
        <h3>Table of Content(ToC) total - {this.totalArryCount()}</h3>
        <ul className='uList'>
          <LociLi id='fatepurVillage' pageTitle="Village houses" arr={fatepurVillage} />
          <LociLi id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
          <LociLi id='fatepurRatanMama' pageTitle="fatepurRatanMama" arr={fatepurRatanMama} />
          <LociLi id='fatepurTarun' pageTitle="fatepurTarun houses" arr={fatepurTarun} />
          <LociLi id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
          <LociLi id='palashpurBiren' pageTitle="Palashpur Biren Home" arr={palashpurBiren} />
          <LociLi id='palashHome' pageTitle="palash Home" arr={palashHome} />
          <LociLi id='feniMess' pageTitle="feniMess houses" arr={feniMess} />
          <LociLi id='dhakaMess1' pageTitle="Dhaka mess (1)" arr={dhakaMess1} />
          <LociLi id='dhakaMess2' pageTitle="Dhaka mess (2)" arr={dhakaMess2} />
          <LociLi id='dhakaMess3' pageTitle="Dhaka mess (3)" arr={dhakaMess3} />
          <LociLi id='palashMess' pageTitle="Palash Mess" arr={palashMess} />
          <LociLi id='dhakaMama' pageTitle="dhakaMama houses" arr={dhakaMama} />
          <LociLi id='indiaMama' pageTitle="India mama Home" arr={indiaMama} />
          <LociLi id='banjaraHills' pageTitle="banjaraHills" arr={banjaraHills} />
          <LociLi id='hyderabadMtww' pageTitle="MTWW" arr={hyderabadMtww} />
          <LociLi id='hyderabadVillaWork' pageTitle="hyderabadVillaWork" arr={hyderabadVillaWork} />
          <LociLi id='hyderabadVillaStay' pageTitle="hyderabadVillaStay" arr={hyderabadVillaStay} />
          <LociLi id='bangalore' pageTitle="bangalore" arr={bangalore} />
        </ul>
        <div>
          <Loci id='fatepurVillage' pageTitle="Village houses" arr={fatepurVillage} />
          <Loci id='fatepurHome' pageTitle="Fatepur Home" arr={fatepurHome} />
          <Loci id='fatepurRatanMama' pageTitle="fatepurRatanMama" arr={fatepurRatanMama} />
          <Loci id='fatepurTarun' pageTitle="fatepurTarun houses" arr={fatepurTarun} />
          <Loci id='palashpurBasudev' pageTitle="Palashpur Basudev Home" arr={palashpurBasudev} />
          <Loci id='palashpurBiren' pageTitle="Palashpur Biren Home" arr={palashpurBiren} />
          <Loci id='palashHome' pageTitle="palash Home" arr={palashHome} />
          <Loci id='feniMess' pageTitle="feniMess houses" arr={feniMess} />
          <Loci id='dhakaMess1' pageTitle="Dhaka mess (1)" arr={dhakaMess1} />
          <Loci id='dhakaMess2' pageTitle="Dhaka mess (2)" arr={dhakaMess2} />
          <Loci id='dhakaMess3' pageTitle="Dhaka mess (3)" arr={dhakaMess3} />
          <Loci id='palashMess' pageTitle="Palash Mess" arr={palashMess} />
          <Loci id='dhakaMama' pageTitle="dhakaMama houses" arr={dhakaMama} />
          <Loci id='indiaMama' pageTitle="India mama Home" arr={indiaMama} />
          <Loci id='banjaraHills' pageTitle="banjaraHills" arr={banjaraHills} />
          <Loci id='hyderabadMtww' pageTitle="MTWW" arr={hyderabadMtww} />
          <Loci id='hyderabadVillaWork' pageTitle="hyderabadVillaWork" arr={hyderabadVillaWork} />
          <Loci id='hyderabadVillaStay' pageTitle="hyderabadVillaStay" arr={hyderabadVillaStay} />
          <Loci id='bangalore' pageTitle="bangalore" arr={bangalore} />

        </div>
      </div>


      )
  }
}
export default detailloci;


