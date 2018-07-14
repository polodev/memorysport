import React from 'react'
import styles from '../utils/style.module.css'
import MethodTable from '../components/MethodTable'

/**
 * shape object holding index and letter instead of number and word
 * this is because we are using generic component
 * @type {Array}
 */
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
export default () => <MethodTable title="Shape" arr={shapes} titles={['Number', 'Shape']} />
export {
  shapes
}


