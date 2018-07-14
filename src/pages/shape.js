import React from 'react'
import styles from '../utils/style.module.css'
import MethodTable from '../components/MethodTable'
import shapes from '../data/shapeArr.js'

/**
 * shape object holding index and letter instead of number and word
 * this is because we are using generic component
 * @type {Array}
 */
const transformShapes = shapes.map(shape => { return {index: shape.number, letter: shape.mnemonic}})

export default () => <MethodTable title="Shape" arr={transformShapes} titles={['Number', 'Shape']} />


