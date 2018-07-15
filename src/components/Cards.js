import React from 'react'
const ReactMarkdown = require('react-markdown')

const styles = {
  ulStyle: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  liStyle: {
    border: `1px solid #eee`,
    boxShadow: `0 1px 6px rgba(0,0,0,0.03)`,
    padding: `20px  10px`,
    margin: `20px 10px`,
    cursor: `pointer`,
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    padding: 5,
    border: '1px solid salmon',
    backgroundColor: 'tomato',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
  }
}

class Cards extends React.Component {
  constructor () {
    super()
    this.state =  {
      currentCard: [],
      isModal: false,
    }
  }
  componentDidMount () {
    const {cards} = this.props.deck 
    this.setState({currentCard: cards[0]})
  }
  render () {
    const {cards, title} = this.props.deck
    return (
    <div>
      <h1 style={styles.textCenter} >Deck: {title}</h1>
      <p style={styles.textCenter}>
        <button style={styles.button}>Study Deck</button>
      </p>
      <ul style={styles.ulStyle}>
        {
          cards.map((card, index) => {
            return <li
              style={styles.liStyle}
              onClick={()=> this.setState({currentCard: card, isModal: true})}
              key={index}
            >
              { /** here will be card component which will be encapsulated by modal */ }
              <ReactMarkdown source={card.back} />
            </li>
          })
        }
      </ul>
    
    </div>
    )

  }
}

export default Cards