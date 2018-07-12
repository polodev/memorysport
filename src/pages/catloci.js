import React from 'react'
import CatPalace from '../components/CatPalace'
import LociLi from '../components/LociLi'
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

class catLoci extends React.Component {
  totalArryCount = () => (
     [
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
    ].length
  )
  render () {
    return (
      <div>
        <h3>Table of Content(ToC) total - {this.totalArryCount()}</h3>
        <ol>
          <LociLi arr={fatepurHome} id="fatepurHome" pageTitle="Fatepur Home" />
          <LociLi arr={fatepurRatanMama} id="fatepurRatanMama" pageTitle="fatepurRatanMama" />
          <LociLi arr={fatepurTarun} id="fatepurTarun" pageTitle="fatepurTarun" />
          <LociLi arr={palashpurBasudev} id="palashpurBasudev" pageTitle="palashpurBasudev" />
          <LociLi arr={palashpurBiren} id="palashpurBiren" pageTitle="palashpurBiren" />
          <LociLi arr={palashHome} id="palashHome" pageTitle="palashHome" />
          <LociLi arr={feniMess} id="feniMess" pageTitle="feniMess" />
          <LociLi arr={feniOffice} id="feniOffice" pageTitle="feniOffice" />
          <LociLi arr={feniCollege} id="feniCollege" pageTitle="feniCollege" />
          <LociLi arr={dhakaMess1} id="dhakaMess1" pageTitle="dhakaMess1" />
          <LociLi arr={dhakaMess2} id="dhakaMess2" pageTitle="dhakaMess2" />
          <LociLi arr={dhakaMess3} id="dhakaMess3" pageTitle="dhakaMess3" />
          <LociLi arr={palashMess1} id="palashMess1" pageTitle="palashMess1" />
          <LociLi arr={palashMess2} id="palashMess2" pageTitle="palashMess2" />
          <LociLi arr={dhakaMama} id="dhakaMama" pageTitle="dhakaMama" />
          <LociLi arr={indiaMama} id="indiaMama" pageTitle="indiaMama" />
          <LociLi arr={banjaraHills} id="banjaraHills" pageTitle="banjaraHills" />
          <LociLi arr={hyderabadMtww} id="hyderabadMtww" pageTitle="hyderabadMtww" />
          <LociLi arr={hyderabadVillaWork} id="hyderabadVillaWork" pageTitle="hyderabadVillaWork" />
          <LociLi arr={hyderabadVillaStay} id="hyderabadVillaStay" pageTitle="hyderabadVillaStay" />
          <LociLi arr={bangalore} id="bangalore" pageTitle="bangalore" />
          <LociLi arr={village} id="village" pageTitle="village" />
        </ol>
        <div>
          <CatPalace arr={fatepurHome} id="fatepurHome" pageTitle="Fatepur Home" />
          <CatPalace arr={fatepurRatanMama} id="fatepurRatanMama" pageTitle="fatepurRatanMama" />
          <CatPalace arr={fatepurTarun} id="fatepurTarun" pageTitle="fatepurTarun" />
          <CatPalace arr={palashpurBasudev} id="palashpurBasudev" pageTitle="palashpurBasudev" />
          <CatPalace arr={palashpurBiren} id="palashpurBiren" pageTitle="palashpurBiren" />
          <CatPalace arr={palashHome} id="palashHome" pageTitle="palashHome" />
          <CatPalace arr={feniMess} id="feniMess" pageTitle="feniMess" />
          <CatPalace arr={feniOffice} id="feniOffice" pageTitle="feniOffice" />
          <CatPalace arr={feniCollege} id="feniCollege" pageTitle="feniCollege" />
          <CatPalace arr={dhakaMess1} id="dhakaMess1" pageTitle="dhakaMess1" />
          <CatPalace arr={dhakaMess2} id="dhakaMess2" pageTitle="dhakaMess2" />
          <CatPalace arr={dhakaMess3} id="dhakaMess3" pageTitle="dhakaMess3" />
          <CatPalace arr={palashMess1} id="palashMess1" pageTitle="palashMess1" />
          <CatPalace arr={palashMess2} id="palashMess2" pageTitle="palashMess2" />
          <CatPalace arr={dhakaMama} id="dhakaMama" pageTitle="dhakaMama" />
          <CatPalace arr={indiaMama} id="indiaMama" pageTitle="indiaMama" />
          <CatPalace arr={banjaraHills} id="banjaraHills" pageTitle="banjaraHills" />
          <CatPalace arr={hyderabadMtww} id="hyderabadMtww" pageTitle="hyderabadMtww" />
          <CatPalace arr={hyderabadVillaWork} id="hyderabadVillaWork" pageTitle="hyderabadVillaWork" />
          <CatPalace arr={hyderabadVillaStay} id="hyderabadVillaStay" pageTitle="hyderabadVillaStay" />
          <CatPalace arr={bangalore} id="bangalore" pageTitle="bangalore" />
          <CatPalace arr={village} id="village" pageTitle="village" />
        </div>
      </div>
    )
  }
}

export default catLoci;