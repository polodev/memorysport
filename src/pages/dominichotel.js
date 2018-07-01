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
    let {minNumber, maxNumber} = this.state
    if (this._isEmpty(maxNumber)) {
      maxNumber = minNumber
    }
    let allPA = []
    for(let i = minNumber; i <= maxNumber; i++) {
      allPA.push(
        <GeneratePA key={i} arr={dominicPAO} number={i} />
      )
    }
    return allPA
  }
  _isEmpty = str => !str || 0 === str.length || /^\s*$/.test(str)

  _handleGenerate = () => {
    let {minNumber, maxNumber, isGenerate} = this.state
    if (this._isEmpty(maxNumber)) {
      maxNumber = minNumber
    }
    console.log('maxNumber', maxNumber);
    if (isNaN(parseInt(minNumber)) || isNaN(parseInt(maxNumber))) {
      alert('min Number and max Number should be a valid number. No string allowed')
    } else if (minNumber > maxNumber) {
      alert('min number should be less than max number');
    } else if (minNumber.toString().length > 4 || maxNumber.toString().length > 4) {
      alert('min and max number can\'t be more than 4 digit. max value support 9999');
    } else {
      this.setState({isGenerate: true});
    }
  }

  render (){
    console.log(this.state);
    const {isGenerate} = this.state


    const allPA = isGenerate ? this._generatePA() : []
   
    return (
      <div>
        <div style={styles.my4}>
          <p>
            <label htmlFor="min">min Number   
              <input
                placeholder='less than or equal to 4 digit number'
                value={this.state.minNumber} id='min' style={styles.input}
                type="text"
                onChange={event => this.setState({minNumber: event.target.value, isGenerate: false})} />
            </label>
          </p>
          <p>
            <label htmlFor="max">max Number   
              <input
                placeholder='less than or equal to 4 digit number'
                value={this.state.maxNumber} id='max' style={styles.input}
                type="text"
                onChange={event => this.setState({maxNumber: event.target.value})} />

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