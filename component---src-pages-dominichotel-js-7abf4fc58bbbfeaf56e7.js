webpackJsonp([0x6a27d0f231f7],{219:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),l=r(i),s=(n(22),function(e){function t(){var n,r,u;a(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=r=o(this,e.call.apply(e,[this].concat(l))),r._gettingObjectByNumber=function(e,t){return e.find(function(e){return e.number==t})},r._prefixZero=function(e){var t=e.toString(),n=t;switch(t.length){case 1:n="000"+t;break;case 2:n="00"+t;break;case 3:n="0"+t}return n},r._gettingPA=function(e,t){var n=r._prefixZero(t),a=n.substr(0,2),o=n.substr(2,4),u=r._gettingObjectByNumber(e,a),i=r._gettingObjectByNumber(e,o),l=u.person,s=i.fullAction;return n+" - "+l+", "+s},u=n,o(r,u)}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.arr,n=e.number;return l.default.createElement("div",null,this._gettingPA(t,n))},t}(l.default.Component));t.default=s,e.exports=t.default},233:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),l=r(i),s=n(22),c=n(219),f=r(c),m={my4:{marginTop:"2em",marginBottom:"2em"},button:{backgroundColor:"salmon",color:"white",padding:"5px 10px",borderRadius:"5px",border:"none",cursor:"pointer"},input:{padding:5,marginLeft:5,minWidth:"50%"}},p=function(e){function t(){a(this,t);var n=o(this,e.call(this));return n._generatePA=function(){var e=n.state,t=e.minNumber,r=e.maxNumber;n._isEmpty(r)&&(r=t);for(var a=[],o=t;o<=r;o++)a.push(l.default.createElement(f.default,{key:o,arr:s.dominicPAO,number:o}));return a},n._isEmpty=function(e){return!e||0===e.length||/^\s*$/.test(e)},n._handleGenerate=function(){var e=n.state,t=e.minNumber,r=e.maxNumber;e.isGenerate;n._isEmpty(r)&&(r=t),isNaN(parseInt(t))||isNaN(parseInt(r))?alert("min Number and max Number should be a valid number. No string allowed"):t>r?alert("min number should be less than max number"):t.toString().length>4||r.toString().length>4?alert("min and max number can't be more than 4 digit. max value support 9999"):n.setState({isGenerate:!0})},n.state={minNumber:"",maxNumber:"",isGenerate:!1},n}return u(t,e),t.prototype.render=function(){var e=this;console.log(this.state);var t=this.state.isGenerate,n=t?this._generatePA():[];return l.default.createElement("div",null,l.default.createElement("div",{style:m.my4},l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"min"},"min Number",l.default.createElement("input",{placeholder:"less than or equal to 4 digit number",value:this.state.minNumber,id:"min",style:m.input,type:"text",onChange:function(t){return e.setState({minNumber:t.target.value,isGenerate:!1})}}))),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"max"},"max Number",l.default.createElement("input",{placeholder:"less than or equal to 4 digit number",value:this.state.maxNumber,id:"max",style:m.input,type:"text",onChange:function(t){return e.setState({maxNumber:t.target.value})}}))),l.default.createElement("p",null,l.default.createElement("button",{onClick:this._handleGenerate,style:m.button},"generate"))),l.default.createElement("div",null,n))},t}(l.default.Component);t.default=p,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-dominichotel-js-7abf4fc58bbbfeaf56e7.js.map