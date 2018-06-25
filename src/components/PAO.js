import React from 'react'
import styles from '../utils/style.module.css'

class PAO extends React.Component {
  ucwords (str){
    return (str + '')
    .replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase()
    })
  }
  camelToSpace (str){
    return (str+'')
      .replace(/([A-Z])/g, function ($1) {
        return ` ${$1}`
      })
  }
  render () {
    const {title, arr, columns} = this.props
    return (
      <div>
        <h1 className={`${styles.pageHeader} ${styles.pageHeader_top}` }>{this.title}</h1>
          <div className={styles.responsiveTable}>
            <table>
              <tbody>
                <tr>
                  {
                    columns.map((column, index) => <th key={index}>{this.ucwords(column)}</th>)
                  }
                </tr>
                {
                  arr.map((item, index) => 
                    <tr onClick={() => console.log(item)} key={index} className='hello' title={item.hints}>
                      {
                        columns.map((column, index) => <td key={index}>{item[column]}</td>)
                      }
                    </tr>
                    )
                }
                </tbody>
            </table>
          </div>
        </div>
      )
  }
}

export default PAO;