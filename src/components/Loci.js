import React from 'react';
import styles from '../utils/style.module.css'

class Loci extends React.Component {

  trimHash = str => (str+'').replace(/(##)/g, $1 => '')
  hasHash = str => str.includes("##")
  render = () => {
    const {pageTitle, arr, id} = this.props;
    const arrWithOutBr = arr.filter(loc => loc != '<br>')
   return (<div>
    <h1 id={id} className={styles.pageHeader}>
      <a href='#'>{pageTitle} {`(${arrWithOutBr.length})`}</a>
    </h1>
    <ul className={styles.uList}>
      {
        arrWithOutBr.map((item, index) => {
          return this.hasHash(item) ?
          <li className={`${styles.singleList} ${styles.singleListWithBr}`} key={index}> {index + 1} -  {this.trimHash(item)}</li> :
          <li className={styles.singleList} key={index}> {index + 1} -  {this.trimHash(item)}</li>
        })
      }
    </ul>
  </div>)  
  }
}

export default Loci;

