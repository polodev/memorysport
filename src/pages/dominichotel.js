import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import GeneratePA from '../components/GeneratePA'

const styles = {
  my4: {
    marginTop: '2em',
    marginBottom: '2em'
  },
  button: {
    backgroundColor: 'salmon',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  input: {
    padding: 5,
    marginLeft: 5,
    minWidth: '50%',
  }
}

class DominicHotel extends React.Component {
  constructor () {
    super()
    this.state = {
      minNumber: '',
      maxNumber: '',
      isGenerate: false
    }
  }

  _generatePA =  () => {
    const {minNumber, maxNumber} = this.state
    let allPA = []
    for(let i = minNumber; i <= maxNumber; i++) {
      allPA.push(
        <GeneratePA key={i} arr={dominicPAO} number={i} />
      )
    }
    return allPA
  }

  _handleGenerate = () => {
    let {minNumber, maxNumber, isGenerate} = this.state;
    minNumber = parseInt(minNumber);
    maxNumber = parseInt(maxNumber);
    if (typeof minNumber !== 'number' || typeof maxNumber !== 'number') {
      alert('min Number and max Number should be a valid number')
    }
  }

  render (){
    const {isGenerate} = this.state

    const allPA = isGenerate ? this._generatePA() : []
   
    return (
      <div>
        <div style={styles.my4}>
          <p>
            <label htmlFor="min">min Number   
              <input placeholder='less than or equal to 4 digit number' value={this.state.minNumber} id='min' style={styles.input} type="text" onChange={event => this.setState({minNumber: event.target.value})} />
            </label>
          </p>
          <p>
            <label htmlFor="max">max Number   
              <input placeholder='less than or equal to 4 digit number' value={this.state.maxNumber} id='max' style={styles.input} type="text" onChange={event => this.setState({maxNumber: event.target.value})} />
            </label>
          </p>
          <p>
            <button onClick={this._handleGenerate} style={styles.button}>generate</button>
          </p>
        </div>
        <div>
          {allPA}
        </div>
      </div>
    ) 
  }
}

export default DominicHotel