import React from 'react'
var arr = [];
for(let i = 1; i < 331; i++) {
  arr.push(i);
}
const number = () => <div>
{
  arr.map(n => <li style={{display: 'inline-block', padding: 10}} key={n}>{n}</li> )
}
</div>

export default number;