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
    action: " biting the head off of a bat",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "01",
    letter: "oa",
    person: "quaker oats guy",
    action: " offering bowl of oatmeal (oats)",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "02",
    letter: "ob",
    person: "orlando bloom",
    action: " do love with selena gomez. earlier love with miranda kerr",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "03",
    letter: "oc",
    person: "oliver cromwell",
    action: " loading a musket",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "04",
    letter: "od",
    person: "officer dibble",
    action: " chasing top cat",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "05",
    letter: "oe",
    person: "omar epps",
    action: " playing basketball with rap song",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "06",
    letter: "os",
    person: "oj simpson",
    action: " playing football",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "07",
    letter: "og",
    person: "james bond",
    action: " turning and shooting, viewed through gun barrel",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "08",
    letter: "oh",
    person: "oliver hardy",
    action: " wearing a bowler hat",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "09",
    letter: "on",
    person: "oliver north",
    action: " swearing an oath",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "10",
    letter: "ao",
    person: "ashley olsen",
    action: " has twin",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "11",
    letter: "aa",
    person: "amy-adams",
    action: " ellen degeneres praising her for 2 times golden globe award",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "12",
    letter: "ab",
    person: "amitabh bachchan",
    action: " controversial twitter about cricket",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "13",
    letter: "ac",
    person: "abbie cornish",
    action: " you deserve that from limitless",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "14",
    letter: "ad",
    person: "ajay devgan",
    action: " can laugh english, walk english, talk english",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "15",
    letter: "ae",
    person: "albert einstein",
    action: " writing on a blackboard",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "16",
    letter: "as",
    person: "anushka sharma",
    action: " dancing with virat kohali",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "17",
    letter: "ag",
    person: "Ali G",
    action: " Drives yellow car",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "18",
    letter: "ah",
    person: "adolf hitler",
    action: " sieg-heiling",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "19",
    letter: "an",
    person: "alfred nobel",
    action: " lighting a match to a stick of dynamite",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "20",
    letter: "bo",
    person: "barack obama",
    action: " loudly debating romney",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "21",
    letter: "ba",
    person: "bill atkinson(macintosh developer)",
    action: " breaking into pixels",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "22",
    letter: "bb",
    person: "banga bandhu sheikh mujibur rahman",
    action: " founding leader of bangladesh",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "23",
    letter: "bc",
    person: "bradley cooper",
    action: " mysterious pill nzt-48 enables the user to access 100 percent of his brain.",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "24",
    letter: "bd",
    person: "bobby deol",
    action: " celebrate fathers day with dharmendra",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "25",
    letter: "be",
    person: "billy elliott",
    action: " jumping in the air and dancing",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "26",
    letter: "bs",
    person: "ben stiller",
    action: " taking care Vietnamese child in Tropic thunder",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "27",
    letter: "bg",
    person: "bill gates",
    action: " counting money and chuckling evilly",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "28",
    letter: "bh",
    person: "benny hill",
    action: " as a milkman being chased by naked women",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "29",
    letter: "bn",
    person: "bill nighy",
    action: " playing guitar with red lipped girls",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "30",
    letter: "co",
    person: "conan o'brien",
    action: " dancing jig in jeggings",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "31",
    letter: "ca",
    person: "captain america",
    action: " frisbee-throws his shield",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "32",
    letter: "cb",
    person: "christian bale",
    action: " morning push up after taking green leafy vegetable juice from michael caine",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "33",
    letter: "cc",
    person: "charlie chaplin",
    action: " twirling cane and waddling",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "34",
    letter: "cd",
    person: "cameron diaz",
    action: " being knight like tom cruise at the end of the movie while she took out tom cruise from hospital",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "35",
    letter: "ce",
    person: "clint eastwood",
    action: " mumbling incoherently to chair",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "36",
    letter: "cs",
    person: "charlie sheen",
    action: " anger management",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "37",
    letter: "cg",
    person: "che guevara",
    action: " doing motorcycle wheelie wearing che t-shirt",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "38",
    letter: "ch",
    person: "chris hemsworth",
    action: " mighty thor lifting hammer(mjolnir)",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "39",
    letter: "cn",
    person: "chuck norris",
    action: " roundhouse kicking your face",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "40",
    letter: "do",
    person: "dominc o'brien",
    action: " memorizing deck",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "41",
    letter: "da",
    person: "dan akroyd",
    action: " fighting the stay puft marshmallow man",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "42",
    letter: "db",
    person: "david beckham",
    action: " best free kick in sea beach",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "43",
    letter: "dc",
    person: "david copperfield",
    action: " making a pyramid disappear",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "44",
    letter: "dd",
    person: "didier drogba",
    action: " playing for ivory coast",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "45",
    letter: "de",
    person: "dwight eisenhower",
    action: " 34th president being sworn into office",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "46",
    letter: "ds",
    person: "dale steyn",
    action: " south african fastest bowler",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "47",
    letter: "dg",
    person: "dolce gabana",
    action: " adjusting sunglasses",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "48",
    letter: "dh",
    person: "dustin hoffman",
    action: " shifu fight with tai lung",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "49",
    letter: "dn",
    person: "duke nukem",
    action: 'firing a blaster and ssying "ooh, that gotta hurt"',
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "50",
    letter: "eo",
    person: "50 cent",
    action: " opening candy shop with olivia",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "51",
    letter: "ea",
    person: "elizabeth arden",
    action: " spraying perfume",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "52",
    letter: "eb",
    person: "emily bronte",
    action: " writing wuthering heights",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "53",
    letter: "ec",
    person: "eric clapton",
    action: " playing an electric guitar",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "54",
    letter: "ed",
    person: "ernie dingo",
    action: " talking in aboriginal accent",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "55",
    letter: "ee",
    person: "e e cummings",
    action: " typing a poem",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "56",
    letter: "es",
    person: "edward scissorhands",
    action: " snipping the bushes with his scissor hands",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "57",
    letter: "eg",
    person: "edvard grieg",
    action: " conducting orchestra at the piano",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "58",
    letter: "eh",
    person: "ethan hunt",
    action: " suspended above cia computer",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "59",
    letter: "en",
    person: "edward norton",
    action: " hulk-fist smashing while turning into hulk",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "60",
    letter: "so",
    person: "sharon osbourne",
    action: " kissing/squeezing her pomeranian",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "61",
    letter: "sa",
    person: "shakira",
    action: " waka waka. this time for africa",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "62",
    letter: "sb",
    person: "sandra bullock",
    action: " driving bus dressed as ms congeniality",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "63",
    letter: "sc",
    person: "simon cowell",
    action: " judging x factor",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "64",
    letter: "sd",
    person: "sanjay dutt",
    action: " gandhi giri in movie mastan giri in real life",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "65",
    letter: "se",
    person: "sam elliot",
    action: " riding a burning horse in ghost rider",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "66",
    letter: "ss",
    person: "steven spielberg",
    action: " directing a movie",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "67",
    letter: "sg",
    person: "sourav ganguly",
    action: " bangali captaincy in india",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "68",
    letter: "sh",
    person: "stephen hawking",
    action: " spinning in wheelchair, getting sucked into black hole",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "69",
    letter: "sn",
    person: "sam neill",
    action: " running from a t.rex",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "70",
    letter: "go",
    person: "gary oldman",
    action: " Lieutenant Jim Gordon in Gothom city",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "71",
    letter: "ga",
    person: "georgio armani",
    action: " making a suit",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "72",
    letter: "gb",
    person: "gerard butler",
    action: " telling ugly truth",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "73",
    letter: "gc",
    person: "george clooney",
    action: " liberal father with shailene woodley in 'the descendants'",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "74",
    letter: "gd",
    person: "gandhi",
    action: " spinning on a wheel",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "75",
    letter: "ge",
    person: "general electric",
    action: " a robot in uniform saluting",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "76",
    letter: "gs",
    person: "Gene Simmons",
    action: " Spitting Blood",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "77",
    letter: "gg",
    person: "gautam gambhir",
    action: " angry with virat",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "78",
    letter: "gh",
    person: "george harrison",
    action: " tapping foot and playing guitar",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "79",
    letter: "gn",
    person: "greg norman",
    action: " swinging a golf club",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "80",
    letter: "ho",
    person: "santa claus",
    action: " laughing until belly shakes (ho ho ho!)",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "81",
    letter: "ha",
    person: "humayun ahmed",
    action: " himu wear yellow dress",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "82",
    letter: "hb",
    person: "halle barry",
    action: " leaping as catwoman",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "83",
    letter: "hc",
    person: "hillary clinton",
    action: " presidential run with opponent donald trump",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "84",
    letter: "hd",
    person: "humpty dumpty",
    action: " smashed open at wall crime scene",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "85",
    letter: "he",
    person: "herb elliott",
    action: " running very fast",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "86",
    letter: "hs",
    person: "harbhajan singh",
    action: " married train girl geeta basra",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "87",
    letter: "hg",
    person: "hg wells",
    action: " driving the time machine",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "88",
    letter: "hh",
    person: "hulk hogan",
    action: " hulk hogan wrestling",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "89",
    letter: "hn",
    person: "horatio nelson",
    action: " standing at the wheel of the ship",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "90",
    letter: "no",
    person: "norman osbourne",
    action: " talking to his alter ego in the mirror",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "91",
    letter: "na",
    person: "neil armstrong",
    action: " stepping onto moon",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "92",
    letter: "nb",
    person: "napoleon bonaparte",
    action: " hand in coat, standing for portrait",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "93",
    letter: "nc",
    person: "nicholas cage",
    action: " conducting hallelujah in face off with gold guns",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "94",
    letter: "nd",
    person: "neil diamond",
    action: " forever in blue jeans",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "95",
    letter: "ne",
    person: "noel edmunds",
    action: " talking to the banker",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "96",
    letter: "ns",
    person: "neil sedaka",
    action: " singing happy birthday sweet 16",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "97",
    letter: "ng",
    person: "nell gwyn",
    action: " long-time mistress of king charles ii",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "98",
    letter: "nh",
    person: "neil patrick harris",
    action: " oooawesome from how i met your mother",
    'hints': 'not',
    'object': 'not'
  },
  {
    number: "99",
    letter: "nn",
    person: "nicholas nickleby",
    action: " dickension charcter",
    'hints': 'not',
    'object': 'not'
  }
]

export default {
  dominicPAO,
  dominicNumbers
}