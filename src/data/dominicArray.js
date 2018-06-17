const dominicNumbers = [
{ index: 0, letter: "O" },
{ index: 1, letter: "A" },
{ index: 2, letter: "B" },
{ index: 3, letter: "C" },
{ index: 4, letter: "D" },
{ index: 5, letter: "E" },
{ index: 6, letter: "S" },
{ index: 7, letter: "G" },
{ index: 8, letter: "H" },
{ index: 9, letter: "N" },
];

const dominicPAO = [
  {
    number: "00",
    letter: "oo",
    person: "ozzy osbourne",
    action: " biting",
    hints: 'no hints added yet',
    object: 'bat',
    alternatives: [],
    references: [],
  },
  {
    number: "01",
    letter: "oa",
    person: "Quaker Oats guy",
    action: " offering bowl",
    hints: 'no hints added yet',
    object: 'oats meal',
    alternatives: [],
    references: [],
  },
  {
    number: "02",
    letter: "ob",
    person: "orlando bloom",
    action: "love",
    hints: 'no hints added yet',
    object: 'kate perry',
    alternatives: [],
    references: [],
  },
  {
    number: "03",
    letter: "oc",
    person: "oliver cromwell",
    action: " loading",
    hints: 'Oliver Cromwell was an English military and political leader',
    object: 'loading a musket',
    alternatives: [],
    references: [],
  },
  {
    number: "04",
    letter: "od",
    person: "officer dibble",
    action: " chasing",
    hints: 'Top Cat is an American animated television series',
    object: 'topcat',
    alternatives: [],
    references: [],
  },
  {
    number: "05",
    letter: "oe",
    person: "omar epps",
    action: " playing basketball with rap song",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "06",
    letter: "os",
    person: "oj simpson",
    action: " playing football",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "07",
    letter: "og",
    person: "james bond",
    action: "shooting",
    hints: 'Daniel Craig',
    object: 'gun',
    alternatives: [],
    references: [],
  },
  {
    number: "08",
    letter: "oh",
    person: "oliver hardy",
    action: " wearing a bowler hat",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "09",
    letter: "on",
    person: "oliver north",
    action: " swearing",
    hints: 'Oliver Laurence North is an American political commentator, television host, military historian, author, and retired United States Marine Corps Lieutenant Colonel.',
    object: 'oath',
    alternatives: [],
    references: [],
  },
  {
    number: "10",
    letter: "ao",
    person: "Lionel Messi",
    action: "playing football",
    hints: 'jersi number 10',
    object: 'Bercelona',
    alternatives: [],
    references: [],
  },
  {
    number: "11",
    letter: "aa",
    person: "amy-adams",
    action: "ellen degeneres praising her for 2 times golden globe award",
    hints: 'praising award',
    object: 'Ellen degeneres',
    alternatives: [],
    references: [],
  },
  {
    number: "12",
    letter: "ab",
    person: "amitabh bachchan",
    action: "pass",
    hints: 'pappu pass ho gaya in cadbury old advertisement',
    object: 'Cadbury',
    alternatives: [],
    references: [],
  },
  {
    number: "13",
    letter: "ac",
    person: "Anderson Cooper",
    action: "presenting",
    hints: 'Anderson cooper working as news anchor in cnn.',
    object: 'news',
    alternatives: ['ANDERSON COOPER', 'Abbie Cornish']
  },
  {
    number: "14",
    letter: "ad",
    person: "ajay devgan",
    action: "laugh",
    hints: 'ajay devgan can talk english, laugh english in bol bachchan movie',
    object: 'english',
    alternatives: [],
    references: [],
  },
  {
    number: "15",
    letter: "ae",
    person: "albert einstein",
    action: "writing",
    hints: 'writing on a blackboard',
    object: 'blackboard',
    alternatives: [],
    references: [],
  },
  {
    number: "16",
    letter: "as",
    person: "anushka sharma",
    action: " dancing",
    hints: 'dancing with virat kohli',
    object: 'Virat Kohli',
    alternatives: [],
    references: ['https://www.youtube.com/watch?v=fqo-fCfJKt4']
  },
  {
    number: "17",
    letter: "ag",
    person: "Ali G",
    action: "Drives",
    hints: 'Ali G, is a satirical fictional character created and performed by British comedian Sacha Baron Cohen. Originally appearing on Channel 4',
    object: 'yellow car',
    alternatives: [],
    references: [],
  },
  {
    number: "18",
    letter: "ah",
    person: "adolf hitler",
    action: " sieg-heiling",
    hints: 'adolf hitler doing sieg-heiling with his nazi party',
    object: 'Nazi Party',
    alternatives: [],
    references: [],
  },
  {
    number: "19",
    letter: "an",
    person: "alfred nobel",
    action: "lighting",
    hints:  "lighting a match to a stick of dynamite",
    object: 'dynamite',
    alternatives: [],
    references: [],
  },
  {
    number: "20",
    letter: "bo",
    person: "barack obama",
    action: "speech",
    hints: 'Obama speaks to sold-out crowd in Montreal',
    object: 'crowd',
    alternatives: [],
    references: [],
  },
  {
    number: "21",
    letter: "ba",
    person: "bill atkinson",
    action: " breaking into pixels",
    hints: 'bill atkinson (macintosh developer)',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "22",
    letter: "bb",
    person: "banga bandhu sheikh mujibur rahman",
    action: " founding leader of bangladesh",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "23",
    letter: "bc",
    person: "bradley cooper",
    action: " mysterious pill nzt-48 enables the user to access 100 percent of his brain.",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "24",
    letter: "bd",
    person: "bobby deol",
    action: " celebrate fathers day with dharmendra",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "25",
    letter: "be",
    person: "billy elliott",
    action: " jumping in the air and dancing",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "26",
    letter: "bs",
    person: "ben stiller",
    action: " taking care Vietnamese child in Tropic thunder",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "27",
    letter: "bg",
    person: "bill gates",
    action: " counting money and chuckling evilly",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "28",
    letter: "bh",
    person: "benny hill",
    action: " as a milkman being chased by naked women",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "29",
    letter: "bn",
    person: "bill nighy",
    action: " playing guitar with red lipped girls",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "30",
    letter: "co",
    person: "conan o'brien",
    action: " dancing jig in jeggings",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "31",
    letter: "ca",
    person: "captain america",
    action: " frisbee-throws his shield",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "32",
    letter: "cb",
    person: "christian bale",
    action: " morning push up after taking green leafy vegetable juice from michael caine",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "33",
    letter: "cc",
    person: "charlie chaplin",
    action: " twirling cane and waddling",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "34",
    letter: "cd",
    person: "cameron diaz",
    action: " being knight like tom cruise at the end of the movie while she took out tom cruise from hospital",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "35",
    letter: "ce",
    person: "clint eastwood",
    action: " mumbling incoherently to chair",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "36",
    letter: "cs",
    person: "charlie sheen",
    action: " anger management",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: ['charlie sheen', 'Cecily Strong'],
    references: [],
  },
  {
    number: "37",
    letter: "cg",
    person: "che guevara",
    action: " doing motorcycle wheelie wearing che t-shirt",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "38",
    letter: "ch",
    person: "chris hemsworth",
    action: " mighty thor lifting hammer(mjolnir)",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "39",
    letter: "cn",
    person: "chuck norris",
    action: " roundhouse kicking your face",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "40",
    letter: "do",
    person: "dominc o'brien",
    action: " memorizing deck",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "41",
    letter: "da",
    person: "dan akroyd",
    action: " fighting the stay puft marshmallow man",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "42",
    letter: "db",
    person: "david beckham",
    action: " best free kick in sea beach",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "43",
    letter: "dc",
    person: "david copperfield",
    action: " making a pyramid disappear",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "44",
    letter: "dd",
    person: "didier drogba",
    action: " playing for ivory coast",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "45",
    letter: "de",
    person: "dwight eisenhower",
    action: " 34th president being sworn into office",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "46",
    letter: "ds",
    person: "dale steyn",
    action: " south african fastest bowler",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "47",
    letter: "dg",
    person: "dolce gabana",
    action: " adjusting sunglasses",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "48",
    letter: "dh",
    person: "dustin hoffman",
    action: " shifu fight with tai lung",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "49",
    letter: "dn",
    person: "duke nukem",
    action: 'firing a blaster and ssying "ooh, that gotta hurt"',
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "50",
    letter: "eo",
    person: "50 cent",
    action: " opening candy shop with olivia",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "51",
    letter: "ea",
    person: "elizabeth arden",
    action: " spraying perfume",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "52",
    letter: "eb",
    person: "emily bronte",
    action: " writing wuthering heights",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "53",
    letter: "ec",
    person: "eric clapton",
    action: " playing an electric guitar",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "54",
    letter: "ed",
    person: "ernie dingo",
    action: " talking in aboriginal accent",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "55",
    letter: "ee",
    person: "e e cummings",
    action: " typing a poem",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "56",
    letter: "es",
    person: "edward scissorhands",
    action: " snipping the bushes with his scissor hands",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "57",
    letter: "eg",
    person: "edvard grieg",
    action: " conducting orchestra at the piano",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "58",
    letter: "eh",
    person: "ethan hunt",
    action: " suspended above cia computer",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "59",
    letter: "en",
    person: "edward norton",
    action: " hulk-fist smashing while turning into hulk",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "60",
    letter: "so",
    person: "sharon osbourne",
    action: " kissing/squeezing her pomeranian",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "61",
    letter: "sa",
    person: "shakira",
    action: "singing",
    hints: 'singing waka waka for world cup',
    object: 'waka waka',
    alternatives: [],
    references: [],
  },
  {
    number: "62",
    letter: "sb",
    person: "sandra bullock",
    action: "driving",
    hints: 'driving bus in speed movie',
    object: 'bus',
    alternatives: ['sandra bullock', 'Simon Baker from mentalist'],
    references: [],
  },
  {
    number: "63",
    letter: "sc",
    person: "simon cowell",
    action: " judging",
    hints: 'x factor',
    object: 'Reality competition',
    alternatives: [],
    references: [],
  },
  {
    number: "64",
    letter: "sd",
    person: "sanjay dutt",
    action: " gandhi giri",
    hints: 'sanjoy datta showing gandhi giri in lago raho munna vi',
    object: 'munna bhai',
    alternatives: [],
    references: [],
  },
  {
    number: "65",
    letter: "se",
    person: "sam elliot",
    action: "riding",
    hints: 'riding a burning horse in ghost rider',
    object: 'burning horse',
    alternatives: [],
    references: [],
  },
  {
    number: "66",
    letter: "ss",
    person: "steven spielberg",
    action: "directing",
    hints: 'Directing movie like ready plyer one',
    object: 'movie',
    alternatives: [],
    references: [],
  },
  {
    number: "67",
    letter: "sg",
    person: "sourav ganguly",
    action: "bangali captaincy",
    hints: 'bangali captaincy in india',
    object: 'indian cricket team',
    alternatives: [],
    references: [],
  },
  {
    number: "68",
    letter: "sh",
    person: "stephen hawking",
    action: "spinning",
    hints: "spinning in wheelchair, getting sucked into black hole",
    object: 'wheelchair',
    alternatives: [],
    references: [],
  },
  {
    number: "69",
    letter: "sn",
    person: "Sam Neill",
    action: " running",
    hints: 'Running From A T-REX Jurassic Park' ,
    object: 't-rex',
    alternatives: [],
    references: [],
  },
  {
    number: "70",
    letter: "go",
    person: "gary oldman",
    action: "ridding the city of crime",
    hints: "Lieutenant Jim Gordon police commissioner Gothom city",
    object: 'Gotham City',
    alternatives: [],
    references: [],
  },
  {
    number: "71",
    letter: "ga",
    person: "Giorgio Armani",
    action: "tailoring",
    hints: 'Giorgio Armani is an Italian fashion house founded by Giorgio Armani',
    object: 'suit',
    alternatives: [],
    references: [],
  },
  {
    number: "72",
    letter: "gb",
    person: "gerard butler",
    action: "telling",
    hints: 'telling ugly truth on cable tv',
    object: 'ugly truth',
    alternatives: [],
    references: [],
  },
  {
    number: "73",
    letter: "gc",
    person: "George Clooney",
    action: "marriage",
    hints: 'George Clooney married Amal clooney a Lebanese-uk Barrister',
    object: 'Amal Clooney',
    alternatives: [],
    references: [],
  },
  {
    number: "74",
    letter: "gd",
    person: "gandhi",
    action: " spinning on a wheel",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "75",
    letter: "ge",
    person: "Shakib Al Hasan",
    action: "playing cricket",
    hints: 'odi shirt no',
    object: 'bangladesh',
    alternatives: [],
    references: [],
  },
  {
    number: "76",
    letter: "gs",
    person: "Gene Simmons",
    action: " Spitting Blood",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "77",
    letter: "gg",
    person: "gautam gambhir",
    action: " angry with virat",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "78",
    letter: "gh",
    person: "george harrison",
    action: " tapping foot and playing guitar",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "79",
    letter: "gn",
    person: "greg norman",
    action: " swinging a golf club",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "80",
    letter: "ho",
    person: "santa claus",
    action: " laughing until belly shakes (ho ho ho!)",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "81",
    letter: "ha",
    person: "humayun ahmed",
    action: " himu wear yellow dress",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "82",
    letter: "hb",
    person: "halle barry",
    action: " leaping as catwoman",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "83",
    letter: "hc",
    person: "hillary clinton",
    action: " presidential run with opponent donald trump",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "84",
    letter: "hd",
    person: "humpty dumpty",
    action: " smashed open at wall crime scene",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "85",
    letter: "he",
    person: "herb elliott",
    action: " running very fast",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "86",
    letter: "hs",
    person: "harbhajan singh",
    action: " married train girl geeta basra",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "87",
    letter: "hg",
    person: "hg wells",
    action: " driving the time machine",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "88",
    letter: "hh",
    person: "hulk hogan",
    action: " hulk hogan wrestling",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "89",
    letter: "hn",
    person: "horatio nelson",
    action: " standing at the wheel of the ship",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "90",
    letter: "no",
    person: "norman osbourne",
    action: " talking to his alter ego in the mirror",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "91",
    letter: "na",
    person: "neil armstrong",
    action: " stepping onto moon",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "92",
    letter: "nb",
    person: "napoleon bonaparte",
    action: " hand in coat, standing for portrait",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "93",
    letter: "nc",
    person: "nicholas cage",
    action: " conducting hallelujah in face off with gold guns",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "94",
    letter: "nd",
    person: "neil diamond",
    action: " forever in blue jeans",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "95",
    letter: "ne",
    person: "noel edmunds",
    action: " talking to the banker",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "96",
    letter: "ns",
    person: "neil sedaka",
    action: " singing happy birthday sweet 16",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "97",
    letter: "ng",
    person: "nell gwyn",
    action: " long-time mistress of king charles ii",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "98",
    letter: "nh",
    person: "neil patrick harris",
    action: " oooawesome from how i met your mother",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "99",
    letter: "nn",
    person: "nicholas nickleby",
    action: " dickension charcter",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  }
]

export default {
  dominicPAO,
  dominicNumbers
}