webpackJsonp([0xce29ce907cd6],{106:function(e,n){"use strict";function a(e,n,h){if("string"!=typeof n){if(m){var d=c(n);d&&d!==m&&a(e,d,h)}var g=o(n);s&&(g=g.concat(s(n)));for(var u=0;u<g.length;++u){var b=g[u];if(!(t[b]||i[b]||h&&h[b])){var p=l(n,b);try{r(e,b,p)}catch(e){}}}return e}return e}var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,m=c&&c(Object);e.exports=a},41:function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=a(2),r=t(i),o=a(11),s=t(o);n.default=function(e){var n=e.title,a=e.arr,t=e.titles,i=void 0===t?["Number","Letter"]:t;return r.default.createElement("div",null,r.default.createElement("h1",{className:s.default.pageHeader+" "+s.default.pageHeader_top},n),r.default.createElement("table",{style:{maxWidth:"320px"}},r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("th",null,i[0]),r.default.createElement("th",null,i[1])),a.map(function(e,n){return r.default.createElement("tr",{key:n},r.default.createElement("td",null,e.index),r.default.createElement("td",null,e.letter))}))))},e.exports=n.default},203:function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=a(2),l=t(s),c=a(11),m=t(c),h=(a(104),function(e){function n(){return i(this,n),r(this,e.apply(this,arguments))}return o(n,e),n.prototype.ucwords=function(e){return(e+"").replace(/^(.)|\s+(.)/g,function(e){return e.toUpperCase()})},n.prototype.camelToSpace=function(e){return(e+"").replace(/([A-Z])/g,function(e){return" "+e})},n.prototype.render=function(){var e=this,n=this.props,a=(n.title,n.arr),t=n.columns;return l.default.createElement("div",null,l.default.createElement("h1",{className:m.default.pageHeader+" "+m.default.pageHeader_top},this.title),l.default.createElement("div",{className:m.default.responsiveTable},l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,t.map(function(n,a){return l.default.createElement("th",{key:a},e.ucwords(n))})),a.map(function(e,n){return l.default.createElement("tr",{onClick:function(){return console.log(e)},key:n,className:"hello",title:e.hints},t.map(function(n,a){return"image"==n?l.default.createElement("td",{key:a}," ",l.default.createElement("img",{className:m.default.paoImage,src:e[n],alt:""})):l.default.createElement("td",{key:a},e[n])}))})))))},n}(l.default.Component));n.default=h,e.exports=n.default},204:function(e,n){"use strict";n.__esModule=!0;var a,t,i,r,o=[{index:0,letter:"O"},{index:1,letter:"A"},{index:2,letter:"B"},{index:3,letter:"C"},{index:4,letter:"D"},{index:5,letter:"E"},{index:6,letter:"S"},{index:7,letter:"G"},{index:8,letter:"H"},{index:9,letter:"N"}],s=[{number:"00",image:"images/oo/ozzy_osbourne.jpg",letter:"oo",person:"ozzy osbourne",action:" biting",hints:"singer who biting bat head in a concert",object:"bat",alternatives:[{name:"Ozzy Osbourne",intro:"singer who biting bat head in a concert"}],references:[]},{number:"01",image:"images/oo/quaker_oats.jpg",letter:"oa",person:"Quaker Oats guy",action:"offering",hints:"no hints added yet",object:"oats",alternatives:[],references:[]},{number:"02",image:"images/oo/orlando_bloom.jpg",letter:"ob",person:"orlando bloom",action:"love",hints:"no hints added yet",object:"kate perry",alternatives:[{name:"Orlando bloom",intro:"Miranda Kerr and kate perry boyfriend + pirates of Caribbean actor"}],references:[]},{number:"03",image:"images/oo/oliver_cromwell.jpg",letter:"oc",person:"oliver cromwell",action:" loading",hints:"Oliver Cromwell was an English military and political leader",object:"musket",alternatives:[],references:[]},{number:"04",image:"images/oo/officer_dibble.jpg",letter:"od",person:"officer dibble",action:"chasing",hints:"Top Cat is an American animated television series",object:"topcat",alternatives:[{name:"officer dibble",intro:"Top cat is a american animated television series  where Officer dibble chased top cat"},{name:"One Direction",intro:"Co-founded by simon cowel. Harry style, zyan malik"}],references:[]},{number:"05",image:"images/oo/omar_epps.jpg",letter:"oe",person:"omar epps",action:"playing baseball",hints:"no hints added yet",object:"baseball",alternatives:[],references:[]},{number:"06",image:"images/oo/oj_simpson.jpg",letter:"os",person:"oj simpson",action:"playing NFL",hints:"no hints added yet",object:"american national football",alternatives:[],references:[]},{number:"07",image:"images/oo/james_bond.jpg",letter:"og",person:"james bond",action:"shooting",hints:"Daniel Craig",object:"gun",alternatives:[],references:[]},{number:"08",image:"images/oo/oliver_hardy.jpg",letter:"oh",person:"oliver hardy",action:"put on",hints:"no hints added yet",object:"bowler hat",alternatives:[],references:[]},{number:"09",image:"/images/oo/oliver_north.jpg",letter:"on",person:"oliver north",action:"testifying",hints:"Oliver Laurence North is an American political commentator, television host, military historian, author, and retired United States Marine Corps Lieutenant Colonel.",object:"congressional committee",alternatives:[],references:[]},{number:"10",image:"",letter:"ao",person:"Lionel Messi",action:"playing football",hints:"jersi number 10",object:"Bercelona",alternatives:[{name:"Lionel Messi",intro:"Argentina footbal captain + Bercelona striker",hints:"jersi number 10"}],references:[]},{number:"11",image:"",letter:"aa",person:"amy-adams",action:"praising",hints:"2 times golden globe award",object:"award",alternatives:[{name:"aa",intro:"amy adams was in superman",ao:"praising for 2 time golden globe award"},{name:"Allu Arjun",intro:"Mr Perfect in Arya"}],references:[]},{number:"12",image:"",letter:"ab",person:"Alec Baldwin",action:"mocking",hints:"Alec baldwin mocking trump in saturday night",object:"trump",alternatives:[{name:"Alec Baldwin",intro:"Mocking Trump in Saturday night series",ao:"mocking Trump"},{name:"Amitabh Bachchan",intro:"Abhisek Bachchan father",hints:"pappu pass ho gaya in cadbury old advertisement",ao:"pass cudbery"},{name:"amanda Bynes",intro:"child Actress in Big Fat Liar movie"},{name:"Alia Bhatt",intro:"Mahesh bhatt daughter acted student of the year"}],references:[]},{number:"13",image:"",letter:"ac",person:"Anderson Cooper",action:"presenting",hints:"Anderson cooper working as news anchor in cnn.",object:"news",alternatives:[{name:"ANDERSON COOPER",intro:"news presenter in cnn"},{name:"Abbie Cornish",intro:"heroin in limitless movie"}]},{number:"14",image:"",letter:"ad",person:"Alexandra Daddario",action:"crave",hints:"ajay devgan punished his superman for rs99",object:"sex",alternatives:[{name:"Alexandra Daddario",intro:"Acted in Baywatch and Thelayover(kate upton)",hints:"Crave for sex in the layover"},{name:"Ajay devgan",intro:"Married to kajol. made bol bachchan and golmaal series movies"},{name:"Abhay Deol",intro:"Zindagi Na Milegi Dobara, dev d"}],references:[]},{number:"15",image:"",letter:"ae",person:"albert einstein",action:"writing",hints:"writing on a blackboard",object:"blackboard",alternatives:[{name:"Albert Einstein",intro:"developed theory of relativity"},{name:"Aaron Eckhart",intro:"Harvey dent in Darknight"},{name:"Alice Eve",intro:"She's Out of My League heroin"}],references:[]},{number:"16",image:"",letter:"as",person:"anushka sharma",action:"dancing",hints:"dancing with virat kohli",object:"Virat Kohli",alternatives:[{name:"anushka sharma",intro:"rab ne bana de jodi heroin + virat kohli husband",references:["https://www.youtube.com/watch?v=fqo-fCfJKt4"]},{name:"adam sandler",intro:"You don't mess with zohan"},{name:"alexander skarsgard",intro:"Brother of Taylor Kitsch in Battleship movie"},{name:"amanda seyfried",intro:"acted in mean girl, Ted 2"},{name:"andy samberg",intro:"Was son of Adam sandler in That's my boy movie"},{name:"ARNOLD SCHWARZENEGGER",intro:"Terminator 2 hero + body builder"},{name:"Amy Schumer",intro:"acted in snatched with Goldie Hawn"},{name:"arijith sing",intro:"indian singer"},{name:"Anushka Shetty",intro:"Baahubali heroin"}]},{number:"17",image:"",letter:"ag",person:"Ali G",action:"Drives",hints:"Ali G, is a satirical fictional character created and performed by British comedian Sacha Baron Cohen. Originally appearing on Channel 4",object:"yellow car",alternatives:[{name:"Ali G",intro:"Ali G is a character by Sacha Baron Cohen"},{name:"ashley greene",intro:"beautiful vampire in Twilight"}],references:[]},{number:"18",image:"",letter:"ah",person:"adolf hitler",action:" sieg-heiling",hints:"adolf hitler doing sieg-heiling with his nazi party",object:"Nazi Party",alternatives:[{name:"alyson hannigan",intro:"Jason Segel wife in How I met your mother tv series + american pie"},{name:"adolf hitler",intro:"founder of Nazi party"},{name:"Anne Hathaway",intro:"acted catwomen in batman and mocking katie holmes in saturday night show "}],references:[]},{number:"19",image:"",letter:"an",person:"alfred nobel",action:"lighting",hints:"lighting a match to a stick of dynamite",object:"dynamite",alternatives:[{name:"alfred noble",intro:"Dynamite inventor"},{name:"Akkineni Nagarjuna",intro:"Telegu actor"}],references:[]},{number:"20",image:"",letter:"bo",person:"barack obama",action:"speeching",hints:"Obama speaks to sold-out crowd in Montreal",object:"crowd",alternatives:[],references:[]},{number:"21",image:"",letter:"ba",person:"bill atkinson",action:"breaking",hints:"bill atkinson (macintosh developer) breaking into pixel",object:"pixel",alternatives:[],references:[]},{number:"22",image:"",letter:"bb",person:"banga bandhu sheikh mujibur rahman",action:"founded",hints:"founding father of bangladesh",object:"Bangladesh",alternatives:[{name:"Bipasha Basu",intro:"Married to Karan Singh Grover"},{name:"Banga bandhu",intro:"Founding father in Bangaldesh"}],references:[]},{number:"23",image:"",letter:"bc",person:"bradley cooper",action:"access",hints:"mysterious pill nzt-48 enables the user to access 100 percent of his brain.",object:"nzt-48",alternatives:["Bill clinton","bradley cooper"],references:[]},{number:"24",image:"",letter:"bd",person:"bobby deol",action:"celebrate",hints:"celebrate fathers day with dharmendra",object:"father's day",alternatives:[{name:"Bobby deol",intro:"sunney deol brother"}],references:[]},{number:"25",image:"",letter:"be",person:"billy elliott",action:"jumping",hints:"no hints added yet",object:"stage",alternatives:[],references:[]},{number:"26",image:"",letter:"bs",person:"ben stiller",action:"taking care",hints:"taking care Vietnamese child in Tropic thunder",object:"Vietnamese Child",alternatives:[{name:"Ben stiller",intro:"Acted in Zoolander, Tropic thunder, The Secret Life of Walter Mitty"},{name:"BRITNEY SPEARS",intro:"singer. snag Ooops did it again"}],references:[]},{number:"27",image:"",letter:"bg",person:"bill gates",action:"counting",hints:"counting money and chuckling evilly",object:"money",alternatives:[],references:[]},{number:"28",image:"",letter:"bh",person:"benny hill",action:"chased",hints:"as a milkman being chased by naked women",object:"naked women",alternatives:[{name:"benny hill",intro:"actor"},{name:"Bella Hadid",intro:"Gigi hadid sister"}],references:[]},{number:"29",image:"",letter:"bn",person:"bill nighy",action:"giving motor ride",hints:"Bill nighy giving motor ride to Judi Dench @ The Best Exotic Marie gold hotel",object:"Judi Dench",alternatives:[],references:[]},{number:"30",image:"",letter:"co",person:"conan o'brien",action:"hosting",hints:"conan o'brien hosting late night show and make sneak peak available @ Team coco Youtube channel",object:"Team Coco",alternatives:[],references:[]},{number:"31",image:"",letter:"ca",person:"Captain America",action:"frisbee-throws",object:"shield",hints:"frisbee-throws his shield",alternatives:[{name:"Captain America",intro:"Fictional Superhero in Marvel comic"},{name:"CHRISTINA AGUILERA",intro:"Singer. Sang Move like a jagger with Adam Levine"}],references:[]},{number:"32",image:"",letter:"cb",person:"christian bale",action:"push up",hints:"morning push up after taking green leafy vegetable juice from michael caine",object:"leafy vegetable",alternatives:[{name:"christian bale",intro:"Acted as batman in Batman series"},{name:"Chris Brown",intro:"physically assaulting her girlfriend Rihanna"},{name:"Chetan Bhagat",intro:"Wrote novel Half girlfriend, One india girl"}],references:[]},{number:"33",image:"",letter:"cc",person:"charlie chaplin",action:"twirling",hints:"twirling cane and waddling",object:"cane",alternatives:[{name:"Charlie Chaplin",intro:"Comedian"},{name:"Camila Cabello",intro:"sang havana, cuba american singer"}],references:[]},{number:"34",image:"",letter:"cd",person:"cameron diaz",action:"self defense",hints:"no hints added yet",object:"Zephyr",alternatives:[{name:"Cameron Diaz",intro:"Heroin of the musk, knight and day"},{name:"Céline Dion",intro:"sang titanic movie song"}],references:[]},{number:"35",image:"",letter:"ce",person:"clint eastwood",action:"mumbling",hints:"mumbling incoherently to chair - Actor Assails Obama Through Empty Chair",object:"chair",alternatives:[{name:"Clint Eastwood",intro:"Hollywood actor Assails Obama Through Empty Chair"},{name:"Chris Evans",intro:"Captain America, fantastic 4"}],references:[]},{number:"36",image:"",letter:"cs",person:"charlie sheen",action:"angry",hints:"key role in anger management",object:"management",alternatives:["charlie sheen","Cecily Strong"],references:[]},{number:"37",image:"",letter:"cg",person:"che guevara",action:"wearing",hints:"doing motorcycle wheelie wearing che t-shirt",object:"che t-shirt",alternatives:[],references:[]},{number:"38",image:"",letter:"ch",person:"chris hemsworth",action:"lifting",hints:"mighty thor lifting hammer(mjolnir)",object:"hammer(mjolnir)",alternatives:[{name:"chris hemsworth",intro:"Acted as Thor and famous for lifting hammer"}],references:[]},{number:"39",image:"",letter:"cn",person:"chuck norris",action:"roundhouse kicking",hints:"roundhouse kicking your face",object:"face",alternatives:[{name:"chuck norris",hints:"roundhouse kick"},{name:"Christopher Nolan",intro:"Directed The Dark night, Inception, Intersteller"}],references:[]},{number:"40",image:"",letter:"do",person:"dominc o'brien",action:"memorizing",hints:"8th times memory champion Dominic o'brien memorizing deck of card",object:"deck",alternatives:[],references:[]},{number:"41",image:"",letter:"da",person:"dan akroyd",action:"fighting",hints:"no hints added yet",object:"marshmallow man",alternatives:[{name:"dan akroyd",intro:"fighting with marshmallow man"},{name:"Dianna Agron",intro:"Daughter of robert d niro in family movie"},{name:"Dolly Ahluwalia",intro:"Viky donor mother"}],references:[]},(a={number:"42",image:"",letter:"db",person:"david beckham",action:"free kick",hints:"best free kick in sea beach. pointing Bin with football",object:"sea beach",alternatives:["Drew Barrymore","David Beckham"]},a.alternatives=[{name:"David Beckham",intro:"English footballer"},{name:"Drew Barrymore",intro:"first 50 dates"}],a),{number:"43",image:"",letter:"dc",person:"david copperfield",action:"disappear",hints:"making a pyramid disappear",object:"pyramid",alternatives:[],references:[]},{number:"44",image:"",letter:"dd",person:"Dr DRe",action:"branding - endorsing",hints:"no hints added yet",object:"Headphone",alternatives:[{name:"Didier Drogba",intro:"former captain of Ivory Coast"},{name:"Dr Dre",intro:"Beats Headphone"}],references:[]},{number:"45",image:"",letter:"de",person:"dwight eisenhower",action:"swearing",hints:"American army general and statesman who served as the 34th President of the United States from 1953 to 1961.",object:"oath",alternatives:[{name:"Dwight Eisenhower",intro:"American army general and statesman who served as the 34th President of the United States from 1953 to 1961."}],references:[]},{number:"46",image:"",letter:"ds",person:"dale steyn",action:"bowling",hints:"no hints added yet",object:"fast",alternatives:[{name:"daly steyn",intro:"south african fastest bowler"},{name:"David Schwimmer",intro:"Acted in Friends TV series"},{name:"DAVID SPADE",intro:"acted alongside adam sandler in many movie like grown up (naked) "},{name:"Dax Shepard",intro:"Acted police officer in CHIPS movie"},{name:"Daisy Shah",intro:"Race 3 actress, joi hoo"},{name:"Darsheel Safary",intro:"Bum Bum Bole"},{name:"Devi Sri Prasad",intro:"Music producer Dad mummy"}],references:[]},{number:"47",image:"",letter:"dg",person:"dolce gabana",action:" adjusting",hints:"no hints added yet",object:"sunglasses",alternatives:[],references:[]},{number:"48",image:"",letter:"dh",person:"dustin hoffman",action:"karate",hints:"Acted as shifu in Kunfu panda",object:"kunfu panda",alternatives:[{name:"Dustin Hoffman",intro:"Acted as shifu in Kunfu panda"},{name:"djimon hounsou",intro:"Acted in Blood Diamond movie with Leo. Was wrestler coach in Never back down"}],references:[]},{number:"49",image:"",letter:"dn",person:"duke nukem",action:"firing",hints:'firing a blaster and ssying "ooh, that gotta hurt"',object:"blaster",alternatives:[{name:"Duke Nukem",intro:"Duke Nukem Forever is a 2011 first-person shooter video gam"},{name:"Robert De Niro",intro:"grand pa with zack efron"}],references:[]},{number:"50",image:"",letter:"eo",person:"50 cent",action:"opening",hints:"no hints added yet",object:"candy shop",alternatives:[],references:[]},{number:"51",image:"",letter:"ea",person:"elizabeth arden",action:" spraying",hints:"no hints added yet",object:"perfume",alternatives:[],references:[]},{number:"52",image:"",letter:"eb",person:"emily bronte",action:"authoring",hints:"no hints added yet",object:"novel Wuthering height",alternatives:[{name:"emily bronte",intro:"Famous for writing Wuthering heighs"},{name:"ELIZABETH BANKS",intro:"Hollywood actress acted on Walk of Shame, 40 years of virgin, definitely or maybe"},{name:"Emily Blunt",intro:"Edge of Tomorrow"}],references:[]},{number:"53",image:"",letter:"ec",person:"eric clapton",action:"performing",hints:"Eric Clapton is a guitarist",object:"guitar",alternatives:[{name:"Eric Clapton",intro:"Guitarist"},{name:"Elisha Cuthbert",intro:"The Girl Next Door cute girl"},{name:"Emmanuelle Chriqui",intro:"Heroin in You don't mess with zohan"}],references:[]},(t={number:"54",image:"",letter:"ed",person:"Ellen Degeneres",action:"choosing",object:"celebrity",hints:"would you rather with celebrity",alternatives:["Ellen DeGeneres","Ernie Dingo"]},t.alternatives=[{name:"Ernie Dingo",intro:"Australian actor. aboriginal accent"},{name:"Ellen Degeneres",intro:"Ellen show, ellen tube"},{name:"Elizabeth Debicki",intro:"The great gatsby actress"}],t.references=[],t),{number:"55",image:"",letter:"ee",person:"e e cummings",action:"typing",hints:"no hints added yet",object:"poem",alternatives:[{name:"EE Cummings",intro:"Edward Estlin (E. E.) Cummings, often styled as e e cummings, as he sometimes signed his name, was an American poet, painter, essayist, author, and playwright"}],references:[]},{number:"56",image:"",letter:"es",person:"ED Sheeran",action:"exercising",object:"shape",hints:"singing shape of you",alternatives:[{name:"Edward scissorhands",intro:"Johny deep character in Edward Scissorhands movie"},{name:"Ed Sheeran",intro:"Singing - shape of you"},{name:"Emma Stone",intro:"Acted in Crazy stupid love, La la land, amazing spiderman. Good couple with Ryan Gosling"}],references:[]},{number:"57",image:"",letter:"eg",person:"Esha Gupta",action:"participating",hints:"no hints added yet",object:"Femina miss india",alternatives:[{name:"edvard grieg",intro:"conducting orchestra at the piano"},{name:"Esha Gupta",intro:"Beautiful actress in Jannat 2, commando 2, "},{name:"Ellie Goulding",intro:"Singer song writer - loving me like you do"},{name:"Eva green",intro:"Casino royal"}],references:[]},{number:"58",image:"",letter:"eh",person:"ethan hunt",action:"suspended",hints:"no hints added yet",object:"cia computer",alternatives:[{name:"ethan hunt",intro:"cia officer went rouge in mission impossible"},{name:"EMILE HIRSCH",intro:"Acted in into the wild and lone survivor costarred alongside Mark Wahlberg and Taylor Kitsch, the girl next door"},{name:"Emraan Hashmi",intro:"Kissing Hero in bollywood"}],references:[]},{number:"59",image:"",letter:"en",person:"edward norton",action:"smashing",object:"hulk",hints:"smashing while turning into hulk",alternatives:[],references:[]},{number:"60",image:"",letter:"so",person:"sharon osbourne",action:"kissing/squeezing",hints:"Kissing / Squeezing her pomeranian dog",object:"pomeranian",alternatives:[],references:[]},{number:"61",image:"",letter:"sa",person:"shakira",action:"singing",hints:"singing waka waka for world cup",object:"waka waka",alternatives:[{name:"shakira",intro:"sang waka waka for world cup, hips dont lie, wife of jerad pike"},{name:"Saif Ali Khan",inro:"Nawab family, Acted in Cocktail with Depika Padukone and Diana penty"},{name:"Shiney Ahuja",intro:"gangster, bhool bhulia, welcome back"}],references:[]},{number:"62",image:"",letter:"sb",person:"sandra bullock",action:"controlling",hints:"driving bus in speed movie",object:"bus",alternatives:["sandra bullock","Simon Baker from mentalist","sacha baron cohen"],references:[]},{number:"63",image:"",letter:"sc",person:"simon cowell",action:"judging",hints:"x factor",object:"Reality competition",alternatives:[{name:"Simon Cowell",intro:"Co-founded One direction band and judge of X factor"},{name:"Sunidhi Chauhan",intro:"sang Mere Hath main in fanaa movie, crazy kiya re, Sheila ki jawani, dance pe chance"}],references:[]},{number:"64",image:"",letter:"sd",person:"snoop dogg",action:"smoking",hints:"snoop dogg smoking pot in lot of movie",object:"pot",alternatives:[{name:"sanjoy datta",intro:"sanju movie performed by Ranbir kapoor",hints:"sanjoy datta showing gandhi giri in lago raho munna vi"},{name:"Shikhar Dhawan",intro:"Captain of Sunrise Hyderabad"},{name:"snoop dogg",intro:"snoop dogg and pharrell williams drop it like its hot",hints:"Snoop Dogg, smoking a blunt with his hoody up"}],references:[]},{number:"65",image:"",letter:"se",person:"sam elliot",action:"riding",hints:"riding a burning horse in ghost rider",object:"burning horse",alternatives:[{name:"Sam elliot",intro:"Riding burning horse in ghost rider"},{name:"Shankar–Ehsaan–Loy",intro:"Musical Trio sang Mitwa, Ik junon in zindegi na milengi dobara, zinda(Bhaag Milkha Bhaag)"}],references:[]},{number:"66",image:"",letter:"ss",person:"steven spielberg",action:"directing",hints:"Directing movie like ready plyer one",object:"movie",alternatives:[{name:"steven spielberg",intro:"directing movie like ready player one, "},{name:"seann william scott",intro:"Acted in american pie and goon"},{name:"S. Sreesanth",intro:"Indian cricketer. Who was slapped by Harbhajan sing. arrest after Spot fixing"},{name:"Salim-Sulaiman",intro:"Musical duo Salim merchant and Sulaiman merchant. used to listen their Khudaya Ve"},{name:"Sonakshi Sinha",intro:"R rajkumer and Akria Heroin"},{name:"Sushant Singh Rajput",intro:"Ms Dhoni untold story. Main tera boyfriend"},{name:"susmita singh",intro:"Acted as salman khan assistant in maine prayer kiyo kiya"},{name:"Shilpa Shetty",intro:"Daadkhan movie + youtube food channel"},{name:"Sunil Shetty",intro:"Gentleman villain with Siddarth"}],references:[]},(i={number:"67",image:"",letter:"sg",person:"sourav ganguly",action:"bangali captaincy",hints:"bangali captaincy in india",object:"indian cricket team",alternatives:["selena gomez","sourav ganguly"]},i.alternatives=[{name:"Selena Gomez",intro:"Singer, actress, Ex girlfriend of justin Bieber"},{name:"Sourav Ganguly",intro:"Indian ex cricet captain. Bengali"},{name:"Sunil Grover",intro:"Comedian doctor in Kapil sharma show"}],i.references=[],i),(r={number:"68",image:"",letter:"sh",person:"stephen hawking",action:"discover",hints:"discover theory of relativity",object:"big bang",alternatives:["salma hayek","Stephen Hawking"]},r.alternatives=[{name:"stephen hawking",intro:"Big bang theory"},{name:"Salma Hayek",intro:"adam sandler wife in grown up"},{name:"Shruti Haasan",intro:"Kamal Haasan Daughter"}],r.references=[],r),{number:"69",image:"",letter:"sn",person:"Sam Neill",action:"running",hints:"Running From A T-REX Jurassic Park",object:"t-rex",alternatives:[{name:"Sam neil",intro:"Running from a T-REX in Jurassic Park"},{name:"Sonu Nigam",intro:"Indian Singer"}],references:[]},{number:"70",image:"",letter:"go",person:"gary oldman",action:"curbing crime",hints:"Lieutenant Jim Gordon police commissioner Gothom city",object:"Gotham City",alternatives:[],references:[]},{number:"71",image:"",letter:"ga",person:"Giorgio Armani",action:"tailoring",hints:"Giorgio Armani is an Italian fashion house founded by Giorgio Armani",object:"suit",alternatives:[],references:[]},{number:"72",image:"",letter:"gb",person:"gerard butler",action:"telling",hints:"telling ugly truth on cable tv",object:"ugly truth",alternatives:[],references:[]},{number:"73",image:"",letter:"gc",person:"George Clooney",action:"marriage",hints:"George Clooney married Amal clooney a Lebanese-uk Barrister",object:"Amal Clooney",alternatives:[],references:[]},{number:"74",image:"",letter:"gd",person:"gandhi",action:"spinning",hints:"no hints added yet",object:"cotton wheel",alternatives:[],references:[]},{number:"75",image:"",letter:"ge",person:"Shakib Al Hasan",action:"playing cricket",hints:"odi shirt no",object:"bangladesh",alternatives:[],references:[]},{number:"76",image:"",letter:"gs",person:"Gene Simmons",action:"Spitting",hints:"no hints added yet",object:"blood",alternatives:[{name:"Gene simmons",intro:"Spitting blood in a concert"},{name:"Gracy Singh",intro:"Cinky in Munna Bhai MBBS"}],references:[]},{number:"77",image:"",letter:"gg",person:"gal gadot",action:"shielding/resisting",object:"bullet",hints:"Princess Diana - wonder women",alternatives:[{name:"Gulshan Grover",intro:"A. R. Rehman in Dil Maange More"},{name:"Gautam gambhir",intro:"Kolkata Knight Riders captain"},{name:"Gal Gadot",intro:"Wonder women"},{name:"Lady gaga",intro:"singer"}],references:[]},{number:"78",image:"",letter:"gh",person:"gigi hadid",action:"modeling",hints:"no hints added yet",object:"victoria secret",alternatives:[{name:"george harrison",intro:"making song for bangladesh"},{name:"Goldie Hawn",intro:"kate hudson mother. Acted in snatched Amy Schwimmer"},{name:"Gigi Hadid",intro:"Gigi Hadid is an American fashion model, zyan malik girlfriend"}],references:[]},{number:"79",image:"",letter:"gn",person:"greg norman",action:"swinging",hints:"swinging a golf club",object:"golf club",alternatives:[],references:[]},{number:"80",image:"",letter:"ho",person:"santa claus",action:"laughing",hints:"laughing until belly shakes (ho ho ho!)",object:"belly",alternatives:[],references:[]},{number:"81",image:"",letter:"ha",person:"humayun ahmed",action:"made - making",hints:"himu wear yellow dress",object:"himu character",alternatives:[],references:[]},{number:"82",image:"",letter:"hb",person:"halle barry",action:"leaping",hints:"no hints added yet",object:"catwoman",alternatives:[{name:"HALLE BERRY",intro:"acted in xmen, catwoman"}],references:[]},{number:"83",image:"",letter:"hc",person:"hillary clinton",action:"poll",hints:"no hints added yet",object:"bill clinton",alternatives:[{name:"hillary clinton",intro:"Bill clinton wife"},{name:"Henry Cavill",intro:"British actor Acted as superman in Man of Steel"}],references:[]},{number:"84",image:"",letter:"hd",person:"humpty dumpty",action:"crime",hints:"smashed open at wall crime scene",object:"wall",alternatives:[],references:[]},{number:"85",image:"",letter:"he",person:"herb elliott",action:"sprinting",hints:"running very fast",object:"very fast",alternatives:[],references:[]},{number:"86",image:"",letter:"hs",person:"Harry style",action:"formed",hints:"no hints added yet",object:"One direction",alternatives:[{name:"harbhajan singh",intro:"Indian spin bowler. Married to geeta basra. slapping sreesanth"},{name:"harry styles",intro:"one direction"},{name:"Honey sing",intro:"lungi dance singer"}],references:[]},{number:"87",image:"",letter:"hg",person:"hg wells",action:"traveling",hints:"driving the time machine",object:"time machine",alternatives:[{name:"Hg Wells",intro:"British writer wrote time machine novel"},{name:"Hugh Grant",intro:"British Actor acted in The Man from U.N.C.L.E. with Henry Cavill"}],references:[]},{number:"88",image:"",letter:"hh",person:"hulk hogan",action:"wrestling",hints:"hulk hogan wrestling",object:"www",alternatives:[],references:[]},{number:"89",image:"",letter:"hn",person:"horatio nelson",action:"operating",hints:"British flag officer in the Royal Navy",object:"wheel of the ship",alternatives:[{name:"Horatio nelson",intro:"British flag officer in the royal navy"}],references:[]},{number:"90",image:"",letter:"no",person:"norman osbourne",action:"altering",hints:"talking to his alter ego in the mirror",object:"ego",alternatives:[],references:[]},{number:"91",image:"",letter:"na",person:"neil armstrong",action:"stepping",hints:"stepping onto moon",object:"moon",alternatives:[],references:[]},{number:"92",image:"",letter:"nb",person:"napoleon bonaparte",action:"standing",hints:"hand in coat, standing for portrait",object:"portrait",alternatives:[{name:"Napoleon Bonaparte",intro:"French statesman and military leader "},{name:"Nushrat Bharucha",inro:"Actress of Sonu Ke Titu Ki Sweety, prayer ki panchnama"}],references:[]},{number:"93",image:"",letter:"nc",person:"nicholas cage",action:"conducting",hints:"conducting hallelujah in face off with gold guns",object:"hallelujah",alternatives:[{name:"Nicholas cage",intro:"ghost rider actor"},{name:"Naga Chaitanya",intro:"Akkineni Nagarjuna son and telegu hero"}],references:[]},{number:"94",image:"",letter:"nd",person:"Nina Dobrev",action:"challenging",hints:"no hints added yet",object:"kids in gymnastics",alternatives:[{name:"Nancy O'Dell",intro:"American television host. Donald Trump’s Lewd Remarks About Her"},{name:"neil diamond",intro:"Singer, Songwriter",hints:"Forever in Blue jeans"},{name:"Natalie Dormer",intro:"the hunger games",hints:"60 Seconds With...Natalie Dormer - she anticipated for photographic memory for her career"},{name:"Neal Dodson",intro:"Margin Call Producer Neal Dodson"},{name:"Nina Dobrev",intro:"xXx: Return of Xander Cage and the vampire diaries actress, flexible girl"}],references:[]},{number:"95",image:"",letter:"ne",person:"noel edmonds",action:"talking",hints:"no hints added yet",object:"banker",alternatives:[{name:"noel edmonds",intro:"talking to the banker"},{name:"Nicole Eggert",intro:"Original Baywatch actress"}],references:[]},{number:"96",image:"",letter:"ns",person:"Nawazuddin Siddiqui",action:"donate",hints:"in kick movie Nawazuddin Siddiqui donated rs 100 to Salman khan",object:"rs 100",alternatives:[{name:"Neil Sedaka",intro:"Happy birthday song"},{name:"Naseeruddin Shah",intro:"Wanted bhai in Welcome back "},{name:"Nawazuddin Siddiqui ",intro:"Acted in Gangs of Wasseypur, Kick"},{name:"Neel Sethi",intro:"child artist of The Jungle Book"},{name:"Namrata Shirodkar",intro:"Mahesh babu wife"}],references:[]},{number:"97",image:"",letter:"ng",
person:"nancy grace",action:"commenting",hints:"no hints added yet",object:"prosecutor",alternatives:[{name:"Nancy Grace",intro:"Nancy Ann Grace is an American legal commentator and television journalist + actress"},{name:"nell gwyn",action:"long-time mistress of king charles ii"}],references:[]},{number:"98",image:"",letter:"nh",person:"neil patrick harris",action:"saying",hints:"oooawesome in how I met your mother",object:"oooawesome",alternatives:[],references:[]},{number:"99",image:"",letter:"nn",person:"nicholas nickleby",action:"created",hints:"dickension charcter",object:"dickension character",alternatives:[{name:"Neil Nitin Mukesh",intro:"Acted in new York, jail, players"},{name:"nicholas nickleby",intro:"Dickension character"}],references:[]}];n.default={dominicPAO:s,dominicNumbers:o},e.exports=n.default},208:function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var i=a(2),r=t(i),o=a(11),s=(t(o),a(204)),l=a(41),c=t(l),m=a(203),h=t(m);n.default=function(){return r.default.createElement("div",null,r.default.createElement(c.default,{title:"Dominic system",arr:s.dominicNumbers}),r.default.createElement(h.default,{title:"Dominic PAO",arr:s.dominicPAO,columns:["letter","number","image","person","action","object"]}))},e.exports=n.default}});
//# sourceMappingURL=component---src-pages-dominic-js-36143b03505efba4b80e.js.map