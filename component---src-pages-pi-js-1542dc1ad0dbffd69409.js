webpackJsonp([0xb903c8a71d4d],{255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),o=r(a),c=n(9),f=r(c),p=n(13),s="14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593615338182796823030195203530185296899577362259941389124972177528347913151557485724245415069595082953311686172785588907509838175463746493931925506040092770167113900984882401285836160356370766010471018194295559619894676783744944825537977472684710404753464620804668425906949129331367702898915210475216205696602405803815019351125338243003558764024749647326391419927260426992279678235478163600934172164121992458631503028618297455570674983850549458858692699569092721079750930295532116534498720275596023648066549911988183479775356636980742654252786255181841757467289097777279380008164706001614524919217321721477235014144197356854816136115735255213347574184946843852332390739414333454776241686251898356948556209921922218427255025425688767179049460165346680498862723279178608578438382796797668145410095388378636095068006422512520511739298489608412848862694560424196528502221066118630674427862203919494504712371378696095636437191728746776465757396241389086583264599581339047802759009946576407895126946839835259570982582262052248940772671947826848260147699090264013639443745530506820349625245174939965143142980919065925093722169646151570985838741059788595977297549893016175392846813826868386894277415599185592524595395943104997252468084598727364469584865383673622262609912460805124388439045124413654976278079771569143599770012961608944169486855584840635342207222582848864815845602850601684273945226746767889525213852254995466672782398645659611635488623057745649803559363456817432411251507606947945109659609402522887971089314566913686722874894056010150330861792868092087476091782493858900971490967598526136554978189312978482168299894872265880485756401427047755513237964145152374623436454285844479526586782105114135473573952311342716610213596953623144295248493718711014576540359027993440374200731057853906219838744780847848968332144571386875194350643021845319104848100537061468067491927819119793995206141966342875444064374512371819217999839101591956181467514269123974894090718649423196156794520809514655022523160388193014209376213785595663893778708303906979207734672218256259966150142150306803844773454920260541466592520149744285073251866600213243408819071048633173464965145390579626856100550810665879699816357473638405257145910289706414011097120628043903975951567715770042033786993600723055876317635942187312514712053292819182618612586732157919841484882916447060957527069572209175671167229109816909152801735067127485832228718352093539657251210835791513698820914442100675103346711031412671113699086585163983150197016515116851714376576183515565088490998985998238734552833163550764791853589322618548963213293308985706420467525907091548141654985946163718027098199430992448895757128289059232332609729971208443357326548938239119325974636673058360414281388303203824903758985243744170291327656180937734440307074692112019130203303801976211011004492932151608424448596376698389522868478312355265821314495768572624334418930396864262434107732269780280731891544110104468232527162010526522721116603966655730925471105578537634668206531098965269186205647693125705863566201855810072936065987648611791045334885034611365768675324944166803962657978771855608455296541266540853061434443185867697514566140680070023787765913440171274947042056223053899456131407112700040785473326993908145466464588079727082668306343285878569830523580893306575740679545716377525420211495576158140025012622859413021647155097925923",d=function(e){function t(){var n,r,l;i(this,t);for(var a=arguments.length,o=Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=r=u(this,e.call.apply(e,[this].concat(o))),r._gettingObjectByNumber=function(e,t){return e.find(function(e){return e.number==t})},r._generatePA=function(){var e=r.props,t=e.arr,n=e.fourDigit,i=e.index,u=n.substr(0,2),l=n.substr(2,4),a=r._gettingObjectByNumber(t,u),o=r._gettingObjectByNumber(t,l),c=a.person,f=o.fullAction;return"#"+(i+1)+" - - "+n+" - "+c+", "+f},l=n,u(r,l)}return l(t,e),t.prototype.render=function(){return o.default.createElement("li",{className:f.default.singleList},this._generatePA())},t}(o.default.Component),h=function(e){function t(){var n,r,l;i(this,t);for(var a=arguments.length,c=Array(a),f=0;f<a;f++)c[f]=arguments[f];return n=r=u(this,e.call.apply(e,[this].concat(c))),r._fourDigitPiSplit=function(){for(var e=[],t="",n=0;n<s.length;n++){var r=s.charAt(n);t=""+t+r,4===t.length&&(e.push(t),t="")}return e},r._generatePAForPi=function(){var e=r._fourDigitPiSplit(),t=e.map(function(e,t){return o.default.createElement(d,{index:t,arr:p.dominicPAO,key:t,fourDigit:e})});return t},l=n,u(r,l)}return l(t,e),t.prototype.render=function(){return o.default.createElement("div",null,o.default.createElement("div",null,o.default.createElement("h1",null,"pi vlaue without split (4400)"),o.default.createElement("p",null,s),o.default.createElement("h1",null,"pi value with 4 digit split"),o.default.createElement("p",null,this._fourDigitPiSplit().map(function(e,t){return o.default.createElement("span",{style:{display:"inline-block",border:"1px solid #444",padding:"5px 10px",margin:5},key:t},e)}))),o.default.createElement("h1",null," pi value dominic PA "),o.default.createElement("ol",{className:f.default.uList},this._generatePAForPi()))},t}(o.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-pi-js-1542dc1ad0dbffd69409.js.map