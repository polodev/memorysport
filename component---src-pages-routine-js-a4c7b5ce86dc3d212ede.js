webpackJsonp([0xf9f48534a39f],{237:function(e,t){"use strict";t.__esModule=!0;var a={key:"memory",time:"",duration:2,activity:"practicing memory palace",note:"can be pick for deck of card or random number"},n={key:"wordpress",time:"",duration:2,activity:"completing a template",note:""},i={key:"vocabulary",time:"",duration:1,activity:"saifurs book or any other book",note:""},r={key:"math",time:"",duration:1,activity:"saifurs bank math",note:""},l={key:"hugo",time:"",duration:3,activity:"making a template for coding site",note:""},o={key:"memorysport web",time:"",duration:2,activity:"fixing memory sport website or making game",note:""},u={key:"book",time:"",duration:.5,activity:"blinkist or any other book",note:""},d={key:"zend prep",time:"night",duration:.5,activity:"zend book reading",note:""},c={key:"exercise",time:"after every 30 minutes or one hour",duration:.5,activity:"doing 100 push up 100 situp before 6pm",note:""},m={date:"July 1, 2018",arr:[c,n,l,a,d,u,r,o,i,d]};t.default=m,e.exports=t.default},256:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),r=n(i),l=a(237),o=n(l),u={heading:{textAlign:"center"}};t.default=function(){return r.default.createElement("div",null,r.default.createElement("h1",{style:u.heading},"Daily routine - Last updated ",o.default.date),r.default.createElement("h2",{style:u.heading},"total time - ",o.default.arr.map(function(e){return e.duration}).reduce(function(e,t){return e+=t})),r.default.createElement("table",null,r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",null,"Activity"),r.default.createElement("th",null,"Duration"),r.default.createElement("th",null,"time - optional "),r.default.createElement("th",null,"Note - optional")),o.default.arr.map(function(e,t){return r.default.createElement("tr",{key:t},r.default.createElement("td",null,e.key," - ",e.activity),r.default.createElement("td",null,e.duration),r.default.createElement("td",null,e.time),r.default.createElement("td",null,e.note))}))))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-routine-js-a4c7b5ce86dc3d212ede.js.map