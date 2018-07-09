import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {intervalOptions} from '../data/calculationOptions'
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
const locis = [
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
]

class lociTimer extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIntervalTime: intervalOptions[2],
      currentIndex: 0,
    }
  }
  componentDidMount () {
    this.setCurrentIndexInterval()
  }
  componentWillUnmount () {
    this.setCurrentIndexInterval()
  }
  setCurrentIndexInterval = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.setCurrentIndexState, this.state.selectedIntervalTime.value * 1000)
  }
  setCurrentIndexState = () => {
    let currentIndex = this.state.currentIndex + 1
    currentIndex =  currentIndex >= locis.length ? 0 : currentIndex
    this.setState({currentIndex})
  }
  changeIntervalTime = (selectedIntervalTime) => {
    this.setState({selectedIntervalTime}, this.setCurrentIndexInterval)
  }
  render () {
    console.log(this.state)
    return (
      <div>
        <div>
          <h3>Select Your interval time</h3>
          <Select
            name="form-field-name"
            clearable={false}
            value={this.state.selectedIntervalTime.value}
            onChange={this.changeIntervalTime}
            options={intervalOptions}
          />
        </div>
        <p style={{marginTop: 25, textAlign: 'center', fontSize: '1.5em'}} > {locis[this.state.currentIndex].title} </p>
      </div>
    )
  }
}

export default lociTimer