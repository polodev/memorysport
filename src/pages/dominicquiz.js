import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import DominicHundredTable from '../components/DominicHundredTable'
import DominicQuiz from '../components/DominicQuiz'
import {
  _chunkArray,
  _generateNatural100,
  _shuffleArray,
  
} from '../data/functions'

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
    const randomArr = _chunkArray( _shuffleArray(_generateNatural100()) )
    this.setState({randomArr})
  }


  render () {

    const chunkNatural = _chunkArray(_generateNatural100());
    return (
      <div>
        <DominicQuiz />
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