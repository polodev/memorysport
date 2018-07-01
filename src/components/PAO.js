import React from 'react'
import styles from '../utils/style.module.css'
import { withPrefix } from 'gatsby-link'


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
        <h1 className={`${styles.pageHeader} ${styles.pageHeader_top}` }>{title}</h1>
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
                        columns.map((column, index) => {
                          return column == 'image' ?   <td key={index}> <img className={styles.paoImage} src={item[column]} alt=''/></td> :  <td key={index}>{item[column]}</td>
                        })
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