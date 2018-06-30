import React from 'react'
import routineData from '../data/routineData'
const styles = {
  heading: {
    textAlign: 'center'
  }
}



export default () => 
  <div>
    <h1 style={styles.heading}>Daily routine - Last updated {routineData.date}</h1>
    <h2 style={styles.heading}>total time - { routineData.arr.map(item => item.duration).reduce((total, newItem) => total = total + newItem) }</h2>
    <table>
      <tbody>
        <tr>
          <th>Activity</th>
          <th>Duration</th>
          <th>time - optional </th>
          <th>Note - optional</th>
        </tr>
        {
          routineData.arr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.key} - {item.activity}</td>
                <td>{item.duration}</td>
                <td>{item.time}</td>
                <td>{item.note}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </div>
