webpackJsonp([0xbc33c81176e6],{101:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),a=o(u),c=n(19),s={wrapper:{textAlign:"center",marginBottom:80},button:{border:"1px solid salmon",backgroundColor:"tomato",color:"white",cursor:"pointer",padding:5,display:"inline-block",marginTop:15,marginLeft:10},box:{border:"1px solid rgba(0, 0, 0, .5)",padding:"5px 10px",minWidth:250,display:"inline-block",cursor:"pointer"},info:{textAlign:"center",backgroundColor:"beige",padding:10}},f=function(e){function t(){r(this,t);var n=i(this,e.call(this));return n.componentDidMount=function(){n.setState({titles:n.props.titles})},n._spanClick=function(){n.setState({isInfoHidden:!n.state.isInfoHidden})},n._buttonClick=function(){var e=(0,c._getRandomNumber)(1,n.props.titles.length);n.setState({currentNumber:e,isInfoHidden:!0})},n._getMnemonic=function(){var e=n.state,t=e.titles,o=e.currentNumber,r=t.find(function(e){return e.number==o});return r},n.state={titles:[],currentNumber:1,isInfoHidden:!0},n}return l(t,e),t.prototype.render=function(){var e=this.state,t=e.currentNumber,n=e.isInfoHidden;return a.default.createElement("div",{style:s.wrapper},a.default.createElement("h1",null,"Loci + Dominic Quiz"),a.default.createElement("div",null,a.default.createElement("p",null,a.default.createElement("span",{onClick:this._spanClick,style:s.box},t),a.default.createElement("button",{onClick:this._buttonClick,style:s.button},"Next")),n?"":a.default.createElement("div",{style:s.info},a.default.createElement("p",null," ",this._getMnemonic().title," ","<<--------->>"," ",this._getMnemonic().mnemonic," "))))},t}(a.default.Component);t.default=f,e.exports=t.default},260:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),a=o(u),c=n(13),s=n(39),f=n(79),d=o(f),p=n(78),m=o(p),b=n(19),h=n(101),y=o(h),_=s.village.map(function(e){return e.title}),g=_.map(function(e,t){return{number:t+1,title:e,mnemonic:(0,b._generating_dominic)(c.dominicPAO,d.default,m.default,t+1)}}),w=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"titles loci with dominic quiz"),a.default.createElement(y.default,{titles:g}),a.default.createElement("h1",null,"titles loci with dominic"),_.map(function(e,t){return a.default.createElement("li",{style:{listStyle:"none",borderBottom:"2px solid salmon",padding:5},key:t},e," ","   <<<-------->>>"," ",(0,b._generating_dominic)(c.dominicPAO,d.default,m.default,t+1))}))},t}(a.default.Component);t.default=w,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-villagetitles-js-2661dbc225c2873b2123.js.map