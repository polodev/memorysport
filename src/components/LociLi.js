import React from 'react'
export default class LociLi extends React.Component {
  arrayCount = (arr) => arr.filter(loc => loc !='<br>').length
  render = () => <li className='singleList'> <a href={`#${this.props.id}`}>{this.props.pageTitle} - {this.arrayCount(this.props.arr)} </a> </li>
}