import React from 'react'
import {
  _getRandomNumber,
} from '../data/functions'
const styles = {
  wrapper: {
    textAlign: 'center',
    marginBottom: 80,
  },
  button: {
    border: '1px solid salmon',
    backgroundColor: 'tomato',
    color: 'white',
    cursor: 'pointer',
    padding: 5,
    display: 'inline-block',
    marginTop: 15,
    marginLeft: 10,
  },
  box: {
    border: '1px solid rgba(0, 0, 0, .5)',
    padding: '5px 10px',
    minWidth: 250,
    display: 'inline-block',
    cursor: 'pointer',
  },
  info: {
    textAlign: 'center',
    backgroundColor: 'beige',
    padding: 10,
  }

}

class LociDominic extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: [],
      currentNumber: 1,
      isInfoHidden: true,
    }
  }
  componentDidMount = () => {
    this.setState({titles: this.props.titles})
  }

  _spanClick = () => {
    this.setState({ isInfoHidden: !this.state.isInfoHidden })
  }
  _buttonClick = () => {
    // __refactor: in future titles_length will be titles.length when remember all
    const currentNumber = _getRandomNumber(1, this.props.titles_length);
    this.setState({currentNumber})
  }
  _getMnemonic = () => {
    const { titles, currentNumber} = this.state;
    const currentMnemonic = titles.find(title => title.number == currentNumber)
    return currentMnemonic;
  }
  render() {
    const { currentNumber, isInfoHidden } = this.state;
    return (
      <div style={styles.wrapper}>
        <h1>Loci + Dominic Quiz</h1>
        <div>
          <p>
            <span
              onClick={this._spanClick} style={styles.box}>
              {currentNumber}
            </span>
            <button onClick={this._buttonClick} style={styles.button}>Next</button>
          </p>
          {
            isInfoHidden ? "" : <div style={styles.info}>
              <p> mnemonic: {this._getMnemonic().title} {`<<--------->>`} {this._getMnemonic().mnemonic} </p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default LociDominic;