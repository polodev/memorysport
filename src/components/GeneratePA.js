import React from 'react'
import { dominicPAO } from '../data/dominicArray'

class GeneratePA extends React.Component {
  _gettingObjectByNumber = (arr, number) => {
    return arr.find(item => item.number == number)
  }
  _prefixZero = (number) => {
    const stringNumber = number.toString();
    let prefixNumber = stringNumber;
    switch (stringNumber.length) {
      case 1:
        prefixNumber = `000${stringNumber}`
        break;
      case 2:
        prefixNumber = `00${stringNumber}`
        break;
      case 3:
        prefixNumber = `0${stringNumber}`
        break;
    }
    return prefixNumber;
  }
  _gettingPA = (arr, number) => {
    const prefixNumber = this._prefixZero(number)
    const personNumber = prefixNumber.substr(0, 2);
    const actionNumber = prefixNumber.substr(2, 4);
    const person = this._gettingObjectByNumber(arr, personNumber);
    const action = this._gettingObjectByNumber(arr, actionNumber);
    const personText = person.person;
    const actionText = action.fullAction;
    return `${prefixNumber} - ${personText}, ${actionText}`;
  }
  render() {
    const {arr, number} = this.props;  // here arr is dominicPAO and a number
    return <div>{this._gettingPA(arr, number)}</div>
  }
}

export default GeneratePA;