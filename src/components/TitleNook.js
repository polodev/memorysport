import React from 'react'
import styles from '../utils/style.module.css'

class TitleNook extends React.Component {
  constructor () {
    super();
    this.state = {
      isHidden: true
    }
  }

  render = () => {
    const {title, nooks} = this.props.item
    const {isHidden} = this.state
    return (
          <li
            style={{cursor: "pointer", marginBottom: 20, borderBottom: "1px solid teal", paddingBottom: 10}}
            onClick={() => this.setState({isHidden: !isHidden})}>

            {title} - ({nooks.length})
          {
            isHidden ? '' :
            <ul className={styles.nestedUl}>
              {
                nooks.map( (item, index) => <li className={styles.nestedUl__li} key={index}>{item}</li> )
              }
            </ul>
          }

          </li>
    )
  }
}

export default TitleNook