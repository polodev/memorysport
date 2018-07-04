import React from 'react'
import CatPalaceCompact from '../components/CatPalaceCompact'
import {
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

const styles = {
  link: {
    display: 'inline-block',
    border: '1px solid #444',
    padding: '5px 10px',
    margin: 5,
    cursor: 'pointer',
  }
}

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
    ].length
  )
  render () {
    return (
      <div>
        <ol>
          <a style={styles.link} href="#fatepurHome">fatepurHome</a>
          <a style={styles.link} href="#fatepurRatanMama">fatepurRatanMama</a>
          <a style={styles.link} href="#fatepurTarun">fatepurTarun</a>
          <a style={styles.link} href="#palashpurBasudev">palashpurBasudev</a>
          <a style={styles.link} href="#palashpurBiren">palashpurBiren</a>
          <a style={styles.link} href="#palashHome">palashHome</a>
          <a style={styles.link} href="#feniMess">feniMess</a>
          <a style={styles.link} href="#dhakaMess1">dhakaMess1</a>
          <a style={styles.link} href="#dhakaMess2">dhakaMess2</a>
          <a style={styles.link} href="#dhakaMess3">dhakaMess3</a>
          <a style={styles.link} href="#palashMess1">palashMess1</a>
          <a style={styles.link} href="#palashMess2">palashMess2</a>
          <a style={styles.link} href="#dhakaMama">dhakaMama</a>
          <a style={styles.link} href="#indiaMama">indiaMama</a>
          <a style={styles.link} href="#banjaraHills">banjaraHills</a>
          <a style={styles.link} href="#hyderabadMtww">hyderabadMtww</a>
          <a style={styles.link} href="#hyderabadVillaWork">hyderabadVillaWork</a>
          <a style={styles.link} href="#hyderabadVillaStay">hyderabadVillaStay</a>
          <a style={styles.link} href="#bangalore">bangalore</a>
        </ol>
        <div>
          <CatPalaceCompact arr={fatepurHome} id="fatepurHome" pageTitle="Fatepur Home" />
          <CatPalaceCompact arr={fatepurRatanMama} id="fatepurRatanMama" pageTitle="fatepurRatanMama" />
          <CatPalaceCompact arr={fatepurTarun} id="fatepurTarun" pageTitle="fatepurTarun" />
          <CatPalaceCompact arr={palashpurBasudev} id="palashpurBasudev" pageTitle="palashpurBasudev" />
          <CatPalaceCompact arr={palashpurBiren} id="palashpurBiren" pageTitle="palashpurBiren" />
          <CatPalaceCompact arr={palashHome} id="palashHome" pageTitle="palashHome" />
          <CatPalaceCompact arr={feniMess} id="feniMess" pageTitle="feniMess" />
          <CatPalaceCompact arr={dhakaMess1} id="dhakaMess1" pageTitle="dhakaMess1" />
          <CatPalaceCompact arr={dhakaMess2} id="dhakaMess2" pageTitle="dhakaMess2" />
          <CatPalaceCompact arr={dhakaMess3} id="dhakaMess3" pageTitle="dhakaMess3" />
          <CatPalaceCompact arr={palashMess1} id="palashMess1" pageTitle="palashMess1" />
          <CatPalaceCompact arr={palashMess2} id="palashMess2" pageTitle="palashMess2" />
          <CatPalaceCompact arr={dhakaMama} id="dhakaMama" pageTitle="dhakaMama" />
          <CatPalaceCompact arr={indiaMama} id="indiaMama" pageTitle="indiaMama" />
          <CatPalaceCompact arr={banjaraHills} id="banjaraHills" pageTitle="banjaraHills" />
          <CatPalaceCompact arr={hyderabadMtww} id="hyderabadMtww" pageTitle="hyderabadMtww" />
          <CatPalaceCompact arr={hyderabadVillaWork} id="hyderabadVillaWork" pageTitle="hyderabadVillaWork" />
          <CatPalaceCompact arr={hyderabadVillaStay} id="hyderabadVillaStay" pageTitle="hyderabadVillaStay" />
          <CatPalaceCompact arr={bangalore} id="bangalore" pageTitle="bangalore" />
        </div>
      </div>
    )
  }
}

export default catLoci;