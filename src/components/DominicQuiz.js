import React from 'react'
import {dominicPAO} from '../data/dominicArray'
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
  },
  box: {
    border: '1px solid rgba(0, 0, 0, .5)',
    padding: '5px 10px',
    minWidth: 100,
    cursor: 'pointer',
  },
  info: {
    textAlign: 'center',
    backgroundColor: 'beige',
    padding: 10,
  }

}

class DominicQuiz extends React.Component {
  constructor () {
    super();
    this.state = {
      PAO: {},
      isInfoHidden: true,
    }
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
  _spanClick = () => {
    this.setState({isInfoHidden: !this.state.isInfoHidden})
  }
  _buttonClick = () => {
    this._setStatePAO()
  }
  _numberOrPerson = () => {
    const arr = ['number', 'person'];
    const randomNumber = _getRandomNumber(0, 2);
    const nOrP = arr[randomNumber];
    return this.state.PAO[nOrP]
  }
  render () {
    const {PAO, isInfoHidden} = this.state;

    return (
      <div style={styles.wrapper}>
        <h1>Random name and number testing</h1>
        <div>
          <p>
            <span
              onClick={this._spanClick} style={styles.box}>
              {this._numberOrPerson()}
            </span>
          </p>
          <p>
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

export default DominicQuiz;