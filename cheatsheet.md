# function for replacing in js
~~~bash
ucwords (str){
  return (str + '')
  .replace(/^(.)|\s+(.)/g, function ($1) {
    return $1.toUpperCase()
  })
}
~~~

# contains / includes in javascript (indexOf is fastest) (https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript)

Here is a list of current possibilities:

### (ES6) includes—go to answer

~~~js
var string = "foo",
    substring = "oo";
string.includes(substring);
~~~

### ES5 and older indexOf

~~~js
var string = "foo",
    substring = "oo";
string.indexOf(substring) !== -1;
~~~

String.prototype.indexOf returns the position of the string in the other string. If not found, it will return -1.

### search—go to answer

~~~js
var string = "foo",
    expr = /oo/;
string.search(expr);
~~~

### lodash includes—go to answer
~~~js
var string = "foo",
    substring = "oo";
_.includes(string, substring);
~~~

### RegExp—go to answer

~~~js
var string = "foo",
    expr = /oo/;  // no quotes here
expr.test(string);
~~~

### Match—go to answer

~~~js
var string = "foo",
    expr = /oo/;
string.match(expr);
~~~
