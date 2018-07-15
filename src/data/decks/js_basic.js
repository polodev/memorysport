const document_ready = {
front: `document ready`,
back: `document ready`,
}

const string_uppercase = {
front: 'string upper case',
back:
`
~~~js
"hello".toUpperCase()
// HELLO
~~~
`
}
const string_length = {
front: `how to know string length in javascript`,
back: 
`
~~~js
"hello".length
//5
~~~
`
}

const js_basic = {
  title: "Basic javascript",
  tags: "",
  cards: [
    string_uppercase,
    string_length,
  ]
}

export default js_basic