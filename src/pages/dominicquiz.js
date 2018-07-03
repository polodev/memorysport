import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import DominicHundredTable from '../components/DominicHundredTable'

class dominicquiz extends React.Component{
  constructor () {
    super();
    this.state = {
      randomArr: []
    }
  }

  componentDidMount = () => {
    this._setStateRandomArr()
  }

  _setStateRandomArr = () => {
    const randomArr = this.chunkArray(this._generateRandomNatural())
    this.setState({randomArr})
  }

  shuffleArray = arr => arr.concat().sort(() => Math.random() - 0.5);

  _generateNatural = () => {
    let natural = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        natural.push(
          `${i}${j}`
        )
      }
    }
    return natural;

  }
  _generateTenNatural = () => {
    let tenNatural = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        tenNatural.push(
          `${j}${i}`
        )
      }
    }
    return tenNatural;

  }
  _generateRandomNatural = () => {
    return this.shuffleArray(this._generateNatural());
  }

  chunkArray = (myArray, chunk_size = 10) => {
    var arr = myArray.concat([]);
    var results = [];
    while(arr.length) {
      results.push(arr.splice(0, chunk_size))
    }
    return results;
  }

  render () {

    const chunkNatural = this.chunkArray(this._generateNatural());
    return (
      <div>
        <DominicHundredTable arr={chunkNatural} title="Natural Hundred" />
        <h2 style={{textAlign: 'center'}}>
          <button style={{cursor: 'pointer', border: '1px solid rgba(0, 0, 0, .3)', display: 'inline-block'}} onClick={this._setStateRandomArr} >
            change random number
          </button>
        </h2>
        <DominicHundredTable arr={this.state.randomArr} title="Random Hundred" />
      </div>

    )
  }
}

export default dominicquiz