import React from 'react'
import {
  dominicPAO,
  dominicCategory
} from '../data/dominicArray'

import {_gettingObjectByNumber} from '../data/functions'

const styles = {
  box: {
    padding: '5px 10px',
    cursor: 'pointer',
    border: '1px solid rgba(0, 0, 0, .2)',
    display: 'inline-block',
    margin: 5,
  }
}

const DNumber = ({number}) => <span onClick={() => console.log(_gettingObjectByNumber(dominicPAO, number))} style={styles.box} >
  {number}
</span>


class DominicCategory extends React.Component{
  render () {
    return (
      <div>
        {
          dominicCategory.map((item, index) => <div key={index}>
            <h2>{item.title}</h2>
            <p>
              {
                item.numbers.map((number, index) => <DNumber key={index} number={number} />)
              }
            </p>
          </div>)
        }
      </div>
    )
  }
}

export default DominicCategory;