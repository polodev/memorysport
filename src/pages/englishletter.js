import React from 'react'
import letters from '../data/englishLetterArr'
import styles from '../utils/style.module.css'

class englishletter extends React.Component {
  render () {
    return (
      <div className={styles.englishletter_container}>
      <h1 style={{textAlign: 'center'}}>English Letter</h1>
        <table>
          <tbody>
            <tr>
              <th>letter/number</th>
              <th>person</th>
              <th>action</th>
              <th>object</th>
            </tr>
            {
              letters.map((letter, index) => {
                return <tr key={index}>
                  <td>{letter.letter} - {letter.number}</td>
                  <td>{letter.person}</td>
                  <td>{letter.action}</td>
                  <td>{letter.object}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      )
  }
}

export default englishletter