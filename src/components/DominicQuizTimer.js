import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {dominicPAO} from '../data/dominicArray'
import {intervalOptions} from '../data/calculationOptions'
import {
  _gettingObjectByNumber,
  _gettingObjectByPerson,
  _getRandomNumber,
} from '../data/functions'
const styles = {
  wrapper: {
    textAlign: 'center',
    marginBottom: 80,
  },
  button: {
    border: '1px solid salmon',
    backgroundColor: 'tomato',
    color: 'white',
    cursor: 'pointer',
    padding: 5,
    display: 'inline-block',
    marginTop: 15,
    marginLeft: 10,
  },
  box: {
    border: '1px solid rgba(0, 0, 0, .5)',
    padding: '5px 10px',
    minWidth: 250,
    display: 'inline-block',
    cursor: 'pointer',
  },
  info: {
    textAlign: 'center',
    backgroundColor: 'beige',
    padding: 10,
  }

}

class DominicQuizTimer extends React.Component {
  constructor () {
    super();
    this.state = {
      PAO: {},
      isInfoHidden: true,
      selectedIntervalTime: intervalOptions[0]
    }
    this._setStatePAOwithInterval();
  }
  _prefixZero = (number) => {
    let stringNumber = number.toString();
    if (stringNumber.length === 1) {
        stringNumber = `0${stringNumber}`
    }
    return stringNumber
  }
  componentDidMount = () => {
    this._setStatePAO()
  }
  
  _setStatePAO = () => {
    const number = _getRandomNumber(0, 100)
    const stringNumber = this._prefixZero(number)
    const PAO = _gettingObjectByNumber(dominicPAO,stringNumber)
    this.setState({PAO, isInfoHidden: true})
  }
  _setStatePAOwithInterval = () => {
    this._setStatePAO();
    setTimeout(this._setStatePAOwithInterval, this.state.selectedIntervalTime.value * 1000);
  }
  _spanClick = () => {
    this.setState({isInfoHidden: !this.state.isInfoHidden})
  }
  _buttonClick = () => {
    this._setStatePAO()
  }
  _numberOrPerson = () => {
    const arr = ['number', 'person', 'number'];
    const randomNumber = _getRandomNumber(0, arr.length);
    const nOrP = arr[randomNumber];
    return this.state.PAO[nOrP]
  }
  _changeIntervalTime = (selectedIntervalTime) => {
    this.setState({
      selectedIntervalTime
    })
  }
  render () {
    const {PAO, isInfoHidden} = this.state;
    return (
      <div style={styles.wrapper}>
        <h1>Random name and number testing with interval time</h1>
        <h3>Select Your interval time</h3>
        <div>
          <Select
            name="form-field-name"
            clearable={false}
            value={this.state.selectedIntervalTime.value}
            onChange={this._changeIntervalTime}
            options={intervalOptions}
          />
        </div>
        <div>
          <p>
            <span
              onClick={this._spanClick} style={styles.box}>
              {this._numberOrPerson()}
            </span>
            <button onClick={this._buttonClick} style={styles.button}>Next</button>
          </p>
          {
            isInfoHidden ? "" : <div style={styles.info}>
              <p> Number: {PAO.number} </p>
              <p> Person: {PAO.person} </p>
              <p> action: {PAO.fullAction} </p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default DominicQuizTimer;