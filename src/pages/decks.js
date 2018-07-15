import React from 'react'
import php_basic from '../data/decks/php_basic'
import js_basic from '../data/decks/js_basic'
import FuzzySearch from 'fuzzy-search';
 
 

const deckArr = [
php_basic,
js_basic,
]

const styles = {
  ulStyle: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textAlign: 'center',
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
  }
}

class decks extends React.Component {
  constructor () {
    super ()
    this.state = {
      isCardPage: false,
      selectedDeck: [],
      filterKeyword: "",
    }
  }
  _cardOnClick = deck => {
    this.setState({
      selectedDeck: deck,
      isCardPage: true
    })
  }
  _generateDeck = () => {
      const {filterKeyword} = this.state
      const searcher = new FuzzySearch(deckArr, ['title', 'tags']);
      const deckArrFiltered = filterKeyword.length ? searcher.search(filterKeyword) : deckArr;
      if(deckArrFiltered.length < 1) {
        return <li style={styles.liStyle}>No deck found</li>
      }
      return deckArrFiltered.map((deck, index) =>
        <li
          style={styles.liStyle}
          key={index}
          onClick={() => this._cardOnClick(deck)}
         >
        {deck.title}
        </li>)
  }
  render () {
    console.log(this.state)
    return (
      <div>
        <h1 style={styles.textCenter}>All Deck</h1>
        <p style={{textAlign: 'center'}}>
          <input
            style={{padding: 6, width: '50%', display: 'block', margin: '0 auto'}}
            placeholder='search deck here'
            type="text"
            onChange={(e) => this.setState({filterKeyword: e.target.value})} />
        </p>
        <ul style={styles.ulStyle}>
          {
            this._generateDeck()
          }
        </ul>
      </div>
      )
  }
}


export default decks