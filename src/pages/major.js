import React from 'react'
import styles from '../utils/style.module.css'
import MethodTable from '../components/MethodTable'

const majors = [
{ index: 0, letter: "z, s, x" },
{ index: 1, letter: "T, D" },
{ index: 2, letter: "N" },
{ index: 3, letter: "M" },
{ index: 4, letter: "R" },
{ index: 5, letter: "L" },
{ index: 6, letter: "J, Ch, Sh" },
{ index: 7, letter: "K, C" },
{ index: 8, letter: "F V" },
{ index: 9, letter: "p, b" },
];

export default () => <MethodTable title="Major System" arr={majors} />
