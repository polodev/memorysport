import React from 'react'
import {dominicPAO} from '../data/dominicArray'
import {_gettingObjectByNumber} from '../data/functions'


const styles = {
  table: {
    border: '1px solid hsla(0,0%,0%,0.12)',
    marginBottom: 20,
  },
  td: {
    border: '1px solid hsla(0,0%,0%,0.12)',
    padding: 5,
  },
  h1: {
    textAlign: 'center',
    marginTop: 20,
  }
}

class Tr extends React.Component {
  render () {
    const {arr} = this.props;
    const tds = arr.map((item, index) => <td
      style={styles.td} key={index}
      onClick={() => {console.log(`${_gettingObjectByNumber(dominicPAO, item).number} - ${_gettingObjectByNumber(dominicPAO, item).person} - ${_gettingObjectByNumber(dominicPAO, item).fullAction}`)}}
       >
        {item}
      </td>)
    return (
      <tr>
        {tds}
      </tr>
    )
  }
}

const DominicHundredTable = ({arr, title}) => {
  return (
    <div>
      <h1 style={styles.h1}>{title}</h1>
      <table style={styles.table}>
        <tbody>
          {
            arr.map((item, index) => <Tr key={index} arr={item} />)
          }
        </tbody>
      </table>
    </div>
  )
} 

export default DominicHundredTable