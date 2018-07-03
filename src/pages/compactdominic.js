import React from 'react';
import {dominicPAO} from '../data/dominicArray'

export default () => <div>
  {
    dominicPAO.map((item, index) => <p key={index}>{item.number} - {item.person} - {item.fullAction}</p>)
  }
</div>