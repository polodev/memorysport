webpackJsonp([0xce29ce907cd6],{130:function(e,t){"use strict";function r(e,t,s){if("string"!=typeof t){if(i){var d=f(t);d&&d!==i&&r(e,d,s)}var p=u(t);o&&(p=p.concat(o(t)));for(var m=0;m<p.length;++m){var y=p[m];if(!(n[y]||l[y]||s&&s[y])){var E=c(t,y);try{a(e,y,E)}catch(e){}}}return e}return e}var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,i=f&&f(Object);e.exports=r},54:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=r(1),a=n(l),u=r(9),o=n(u);t.default=function(e){var t=e.title,r=e.arr,n=e.titles,l=void 0===n?["Number","Letter"]:n;return a.default.createElement("div",null,a.default.createElement("h1",{className:o.default.pageHeader+" "+o.default.pageHeader_top},t),a.default.createElement("table",{style:{maxWidth:"320px"}},a.default.createElement("tbody",null,a.default.createElement("tr",null,a.default.createElement("th",null,l[0]),a.default.createElement("th",null,l[1])),r.map(function(e,t){return a.default.createElement("tr",{key:t},a.default.createElement("td",null,e.index),a.default.createElement("td",null,e.letter))}))))},e.exports=t.default},232:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=r(1),c=n(o),f=r(9),i=n(f),s=(r(128),function(e){function t(){return l(this,t),a(this,e.apply(this,arguments))}return u(t,e),t.prototype.ucwords=function(e){return(e+"").replace(/^(.)|\s+(.)/g,function(e){return e.toUpperCase()})},t.prototype.camelToSpace=function(e){return(e+"").replace(/([A-Z])/g,function(e){return" "+e})},t.prototype.render=function(){var e=this,t=this.props,r=t.title,n=t.arr,l=t.columns;return c.default.createElement("div",null,c.default.createElement("h1",{className:i.default.pageHeader+" "+i.default.pageHeader_top},r),c.default.createElement("div",{className:i.default.responsiveTable},c.default.createElement("table",null,c.default.createElement("tbody",null,c.default.createElement("tr",null,l.map(function(t,r){return c.default.createElement("th",{key:r},e.ucwords(t))})),n.map(function(e,t){return c.default.createElement("tr",{onClick:function(){return console.log(e)},key:t,className:"hello",title:e.hints},l.map(function(t,r){return"image"==t?c.default.createElement("td",{key:r}," ",c.default.createElement("img",{className:i.default.paoImage,src:e[t],alt:""})):c.default.createElement("td",{key:r},e[t])}))})))))},t}(c.default.Component));t.default=s,e.exports=t.default},241:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=r(1),a=n(l),u=r(9),o=(n(u),r(22)),c=r(54),f=n(c),i=r(232),s=n(i);t.default=function(){return a.default.createElement("div",null,a.default.createElement(f.default,{title:"Dominic system",arr:o.dominicNumbers}),a.default.createElement(s.default,{title:"Dominic PA",arr:o.dominicPAO,columns:["letter","number","image","person","fullAction"]}))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-dominic-js-56122295b2c17f9bf6f6.js.map