import React from 'react'
import styles from '../utils/style.module.css'
import {dominicNumbers, dominicPAO} from '../data/dominicArray.js'
import MethodTable from '../components/MethodTable'
import PAO from '../components/PAO'


export default () => <div>
  <MethodTable title="Dominic system" arr={dominicNumbers} />
  <PAO title='Dominic PAO' arr={dominicPAO} columns={["letter", "number", "person", "action", "object"]} />
</div>