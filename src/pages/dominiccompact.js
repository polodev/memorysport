import React from 'react';
import {dominicPAO} from '../data/dominicArray'
import DominicCategory from '../components/DominicCategory'

export default () => <div>
  {
    dominicPAO.map((item, index) => <p key={index}>{item.number} - {item.person} - {item.fullAction}</p>)
  }
  <DominicCategory />
</div>