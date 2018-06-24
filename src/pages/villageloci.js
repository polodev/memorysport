import React from 'react'
import styles from '../utils/style.module.css'
import Loci from '../components/Loci'

import houses from '../data/villageLociArray.js'
export default () => 
<div>
  <Loci pageTitle="Village Loci" arr={houses} />
</div>
  

