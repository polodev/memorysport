webpackJsonp([82026751006564],{80:function(a,e,n){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function i(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?a:e}function u(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)}e.__esModule=!0;var o=n(1),l=r(o),s=n(9),d=r(s),f=function(a){function e(){var n,r,u;t(this,e);for(var o=arguments.length,s=Array(o),f=0;f<o;f++)s[f]=arguments[f];return n=r=i(this,a.call.apply(a,[this].concat(s))),r.trimHash=function(a){return(a+"").replace(/(##)/g,function(a){return""})},r.hasHash=function(a){return a.includes("##")},r.render=function(){var a=r.props,e=a.pageTitle,n=a.arr,t=a.id,i=n.filter(function(a){return"<br>"!=a});return l.default.createElement("div",null,l.default.createElement("h1",{id:t,className:d.default.pageHeader},l.default.createElement("a",{href:"#"},e," ","("+i.length+")")),l.default.createElement("ul",{className:d.default.uList},i.map(function(a,e){return r.hasHash(a)?l.default.createElement("li",{className:d.default.singleList+" "+d.default.singleListWithBr,key:e}," ",e+1," -  ",r.trimHash(a)):l.default.createElement("li",{className:d.default.singleList,key:e}," ",e+1," -  ",r.trimHash(a))})))},u=n,i(r,u)}return u(e,a),e}(l.default.Component);e.default=f,a.exports=e.default},220:function(a,e){"use strict";e.__esModule=!0;var n=["My House","Mizan","Gonesh","Vasan","Parul","Khoka","Asiqka","Sarif","khalek kaka","Liton / litha kagu","shakil/ malek kagu","ibrahim / ibba","<br>","## Ratan mama (================Bepari bari================)","niranjon ","nikunjo","basra ","Madon bepari / gourangu","Tapos dada","Haru dada / moron","Nony mama","Sibas jeda","Balay","Monoronjon ","sapon","Noyini","Uttam dada ","Robi","Dulal","Anurudro dada","chandan dada","Goura","Ceta dadu","<br>","## Babulal dada (================Bainer Bari================)","Asis","Palash","Subol","Sajib ","Anil","Sankar mama","Kartik dada","Jalil ","Rehena","<br>","## Juboraj dada (================Arka Bari================)","Khokon","Binod","Luxman","Sanjoy kaka","Sumon kaka","Kali/gopal ratan","Jogodish","Radesham krisna","Narayon","Shamol","Nirmal","Tarani","Liton","<br>","## Muslim Professor(================Dalal bari================","Kanu","Benu","<br>","## Dulal dada (================Modupur================)","Balay","Kanu","Ratan kagu","Nitai ","Nimai","Badhon","Vovon dalal","Dilip","Samiron","<br>","## anowar (================Purbo Thakhur bari================)","neamot","sahajan kagu","habu/sumon","manir kagu","<br>","## liton / abul (================Awla Bari================)","selim / jahir","khalil","fatik / momin","arif / manir","delu / easin","iqbal","jamal","Taju ","Sumon","Lokman","Abu taher","Bashar","Tarun","<br>","## Easin (================Bhuia Bari================)","Khalek / iman","Hazori / Imadadulla","Ikbal","Hossain","Alom","Riaz kagu","Nazrul","Saiful Sahin","Rehena","Mozaffar / firoza","Bhuia","Haque dada","Ali mia","Hamza","Billal / Manik","Basar / Mamun","Afia","<br>","## Helal kagu (================Munsi Bari================) ","caru","jahangir","kabir contractor","<br>","## Maru pisa(================Palashpur================)","biren pisa","Palash Kagu","Ramu kagu","krisna kagu","Bijoy besi bia","Ripon kagu","Noyon kagu","Babul kagu","Kartik dada / bobita","uttam dada","manik","sontosh / bishwajit / samojit","Dilip ","sujan kagu","arun pisa","Nidhu Member, Sumon, Mithu","sahmol er bap","tekka / basudev / sourov","Nitai provu","<br>","## lovely masi","shamol","dulal dada","baju dada","depak dada / komu","palash","<br>","## kana moutta ","krisna dada ","madhobi","bipolodada","sumon","luxman dada","Sujon dada / montu","Sanjoy dada"];e.default=n,a.exports=e.default},231:function(a,e,n){"use strict";function r(a){return a&&a.__esModule?a:{default:a}}e.__esModule=!0;var t=n(1),i=r(t),u=n(9),o=(r(u),n(80)),l=r(o),s=n(220),d=r(s);e.default=function(){return i.default.createElement("div",null,i.default.createElement(l.default,{pageTitle:"Village Loci",arr:d.default}))},a.exports=e.default}});
//# sourceMappingURL=component---src-pages-villageloci-js-bb3cb8ea938740ce8628.js.map