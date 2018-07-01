import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import options from '../data/calculationOptions.js'
import styles from '../utils/style.module.css'




class calculation extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedTime: options.timeOptions[0],
      selectedDigitNo: options.digitOptions[0],
      selectedOperator: options.operatorOptions[0],
      selectedIntervalTime: options.intervalOptions[0],
      isGameOn: false,
    }

  }
  render = () => {
    return (
    <div>
      <div className={styles.mt_3}>
        <h2>Select Your game time</h2>
        <Select
          name="form-field-name"
          clearable={false}
          value={this.state.selectedTime.value}
          onChange={(selectedTime) => this.setState({selectedTime})}
          options={options.timeOptions}
        />
      </div>


      <div className={styles.mt_3}>
        <h2>Select max number of digit to calculation</h2>
        <Select
          name="form-field-name"
          clearable={false}
          value={this.state.selectedDigitNo.value}
          onChange={(selectedDigitNo) => this.setState({selectedDigitNo})}
          options={options.digitOptions}
        />
      </div>

      <div className={styles.mt_3}>
        <h2>Select Your operator</h2>
        <Select
          name="form-field-name"
          clearable={false}
          value={this.state.selectedOperator.value}
          onChange={(selectedOperator) => this.setState({selectedOperator})}
          options={options.operatorOptions}
        />
      </div>

      <div className={styles.mt_3}>
        <h2>Select Your interval time</h2>
        <Select
          name="form-field-name"
          clearable={false}
          value={this.state.selectedIntervalTime.value}
          onChange={(selectedIntervalTime) => this.setState({selectedIntervalTime})}
          options={options.intervalOptions}
        />
      </div>

    </div>

    )
  }
}

export default calculation;