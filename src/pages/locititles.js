import React from 'react'
import {dominicPAO} from '../data/dominicArray'
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
const locis = [
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
]

const titles = locis.map(loci => loci.title)

class locititles extends React.Component {
  _generating_shape = (number) => {
    const shapes = [
    { index: 0, letter: "blackhole, tire, donut" },
    { index: 1, letter: "pencil, candle" },
    { index: 2, letter: "swan" },
    { index: 3, letter: "hearts, butterfly" },
    { index: 4, letter: "sailboat" },
    { index: 5, letter: "hook, pulley" },
    { index: 6, letter: "golf club, lasso, pipe" },
    { index: 7, letter: "Axe, scythe, boomerang" },
    { index: 8, letter: "hour glass, snowman" },
    { index: 9, letter: "balloon, tadpole, flag" },
    ];
    const object = shapes.find(item => item.index == number)
    return object.letter;
  }
  _gettingObjectByNumber = (arr, number) => {
    return arr.find(item => item.number == number)
  }
  _generating_dominic = (number) => {
    var stringNumber = number.toString();
    var shape, person, personText, personNumber, shapeNumber, actionNumber, action, actionText
    switch (stringNumber.length) {
      case 1:
        shape = this._generating_shape(number);
        return `${number} --- ${shape}`;
        break;
      case 2:
        person = this._gettingObjectByNumber(dominicPAO, stringNumber);
        personText = person.person;
        return `${number} --- ${personText}`;
        break;
      case 3:
        personNumber = stringNumber.substr(0, 2);
        shapeNumber = stringNumber.substr(2, 3);
        person = this._gettingObjectByNumber(dominicPAO, personNumber);
        personText = person.person;
        shape = this._generating_shape(shapeNumber);
        return `${number} --- ${personText}, --- ${shape}`;
        break;
      case 4:
        personNumber = stringNumber.substr(0, 2);
        actionNumber = stringNumber.substr(2, 4);
        person = this._gettingObjectByNumber(dominicPAO, personNumber);
        action = this._gettingObjectByNumber(dominicPAO, actionNumber);
        personText = person.person;
        actionText = action.fullAction;
        return `${number} --- ${personText} --- ${actionText}`;
        break;
      default:
        return 'not found'
    }

  }
  render () {
    console.log(titles);
    return (
        <div>
          {
            titles.map((title, index) =>
              <li
                style={{listStyle: 'none', borderBottom: '2px solid salmon', padding: 5}}
                key={index}>
                {title} {`   <<<-------->>>`} {this._generating_dominic(index + 1)}
              </li>)
          }
        </div>
      )
  }
}

export default locititles;
