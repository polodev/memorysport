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

const dominicPAO = 
[
  {
    number: "00",
    letter: "oo",
    person: "ozzy osbourne",
    action: " biting",
    hints: "singer who biting bat head in a concert",
    object: 'bat',
    alternatives: [
      {
        name: "Ozzy Osbourne",
        intro: "singer who biting bat head in a concert"
      }
    ],
    references: [],
  },
  {
    number: "01",
    letter: "oa",
    person: "Quaker Oats guy",
    action: "offering",
    hints: 'no hints added yet',
    object: 'oats',
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
    alternatives: [
      {
        name: "Orlando bloom",
        intro: "Miranda Kerr and kate perry boyfriend + pirates of Caribbean actor",
      }
    ],
    references: [],
  },
  {
    number: "03",
    letter: "oc",
    person: "oliver cromwell",
    action: " loading",
    hints: 'Oliver Cromwell was an English military and political leader',
    object: 'musket',
    alternatives: [],
    references: [],
  },
  {
    number: "04",
    letter: "od",
    person: "officer dibble",
    action: "chasing",
    hints: 'Top Cat is an American animated television series',
    object: 'topcat',
    alternatives: [
      {
        name: "officer dibble",
        intro: "Top cat is a american animated television series  where Officer dibble chased top cat"
      },
      {
        name: "One Direction",
        intro: "Co-founded by simon cowel. Harry style, zyan malik",
      }
    ],
    references: [],
  },
  {
    number: "05",
    letter: "oe",
    person: "omar epps",
    action: "playing baseball",
    hints: 'no hints added yet',
    object: 'baseball',
    alternatives: [],
    references: [],
  },
  {
    number: "06",
    letter: "os",
    person: "oj simpson",
    action: "playing NFL",
    hints: 'no hints added yet',
    object: "american national football",
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
    action: "put on",
    hints: 'no hints added yet',
    object: 'bowler hat',
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
    alternatives: [
        {
            name: "Lionel Messi",
            intro: "Argentina footbal captain + Bercelona striker",
            hints: "jersi number 10"
        }
    ],
    references: [],
  },
  {
    number: "11",
    letter: "aa",
    person: "amy-adams",
    action: "praising",
    hints: '2 times golden globe award',
    object: 'award',
    alternatives: [
        {
            name: 'aa',
            intro: 'amy adams was in superman',
            ao: "praising for 2 time golden globe award"
        },
        {
          name: "Allu Arjun",
          intro: "Mr Perfect in Arya",
        }
    ],
    references: [],
  },
  {
    number: "12",
    letter: "ab",
    person: "Alec Baldwin",
    action: "mocking",
    hints: "Alec baldwin mocking trump in saturday night",
    object: 'trump',
    alternatives: [
        {
            name: 'Alec Baldwin',
            intro: 'Mocking Trump in Saturday night series',
            ao: "mocking Trump"
        },
        {
            name: 'Amitabh Bachchan',
            intro: 'Abhisek Bachchan father',
            hints: 'pappu pass ho gaya in cadbury old advertisement',
            ao: "pass cudbery"
        },
        {
            name: "amanda Bynes",
            intro: "child Actress in Big Fat Liar movie",
        },
        {
          name: 'Alia Bhatt',
          intro: "Mahesh bhatt daughter acted student of the year",
        }
    ],
    references: [],
  },
  {
    number: "13",
    letter: "ac",
    person: "Anderson Cooper",
    action: "presenting",
    hints: 'Anderson cooper working as news anchor in cnn.',
    object: 'news',
    alternatives: [
        {
            name: "ANDERSON COOPER",
            intro: "news presenter in cnn"
        },
        {
            name: "Abbie Cornish",
            intro: "heroin in limitless movie"
        },

    ]
  },
  {
    number: "14",
    letter: "ad",
    person: "ajay devgan",
    action: "laugh",
    hints: 'ajay devgan can talk english, laugh english in bol bachchan movie',
    object: 'english',
    alternatives: [
      {
        name: "Alexandra Daddario",
        intro: "Acted in Baywatch and Thelayover(kate upton)"
      },
      {
        name: "Ajay devgan",
        intro: "Married to kajol. made bol bachchan and golmaal series movies",
      },
      {
        name: "Abhay Deol",
        intro: "Zindagi Na Milegi Dobara, dev d",
      }
    ],
    references: [],
  },
  {
    number: "15",
    letter: "ae",
    person: "albert einstein",
    action: "writing",
    hints: 'writing on a blackboard',
    object: 'blackboard',
    alternatives: [
      {
        name: "Albert Einstein",
        intro: "developed theory of relativity"
      },
      {
        name: "Aaron Eckhart",
        intro: "Harvey dent in Darknight",
      },
    ],
    references: [],
  },
  {
    number: "16",
    letter: "as",
    person: "anushka sharma",
    action: "dancing",
    hints: 'dancing with virat kohli',
    object: 'Virat Kohli',
    alternatives: [
        {
            name: "anushka sharma",
            intro: "rab ne bana de jodi heroin + virat kohli husband",
            references: ['https://www.youtube.com/watch?v=fqo-fCfJKt4'],
        },
        {
            name: "adam sandler",
            intro: "You don't mess with zohan",
        },
        {
            name: "alexander skarsgard",
            intro: "Brother of Taylor Kitsch in Battleship movie",
        },
        {
            name: "amanda seyfried",
            intro: "acted in mean girl, Ted 2"
        },
        {
            name: "andy samberg",
            intro: "Was son of Adam sandler in That's my boy movie",
        },
        {
            name: "ARNOLD SCHWARZENEGGER",
            intro: "Terminator 2 hero + body builder",
        },
        {
          name: "Amy Schumer",
          intro: "acted in snatched with Goldie Hawn",
        },
        {
          name: "arijith sing",
          intro: "indian singer",
        },
        {
          name: "Anushka Shetty",
          intro: "Baahubali heroin",
        }
    ],
  },
  {
    number: "17",
    letter: "ag",
    person: "Ali G",
    action: "Drives",
    hints: 'Ali G, is a satirical fictional character created and performed by British comedian Sacha Baron Cohen. Originally appearing on Channel 4',
    object: 'yellow car',
    alternatives: [
        {
            name: "Ali G",
            intro: "Ali G is a character by Sacha Baron Cohen",
        },
        {
            name: "ashley greene",
            intro: "beautiful vampire in Twilight",
        }
    ],
    references: [],
  },
  {
    number: "18",
    letter: "ah",
    person: "adolf hitler",
    action: " sieg-heiling",
    hints: 'adolf hitler doing sieg-heiling with his nazi party',
    object: 'Nazi Party',
    alternatives: [
        {
            name: "alyson hannigan",
            intro: "Jason Segel wife in How I met your mother tv series + american pie",
        },
        {
            name: "adolf hitler",
            intro: "founder of Nazi party"
        },
        {
          name: "Anne Hathaway",
          intro: "acted catwomen in batman and mocking katie holmes in saturday night show "
        }
    ],
    references: [],
  },
  {
    number: "19",
    letter: "an",
    person: "alfred nobel",
    action: "lighting",
    hints:  "lighting a match to a stick of dynamite",
    object: 'dynamite',
    alternatives: [
      {
        name: "alfred noble",
        intro: "Dynamite inventor",
      },
      {
        name: "Akkineni Nagarjuna",
        intro: "Telegu actor",
      }
    ],
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
    action: "breaking",
    hints: 'bill atkinson (macintosh developer) breaking into pixel',
    object: 'pixel',
    alternatives: [],
    references: [],
  },
  {
    number: "22",
    letter: "bb",
    person: "banga bandhu sheikh mujibur rahman",
    action: "found",
    hints: 'founding father of bangladesh',
    object: 'Bangladesh',
    alternatives: [
      {
        name: "Bipasha Basu",
        intro: "Married to Karan Singh Grover",
      },
      {
        name: "Banga bandhu",
        intro: "Founding father in Bangaldesh"
      }
    ],
    references: [],
  },
  {
    number: "23",
    letter: "bc",
    person: "bradley cooper",
    action: "access",
    hints: 'mysterious pill nzt-48 enables the user to access 100 percent of his brain.',
    object: 'nzt-48',
    alternatives: ['Bill clinton', 'bradley cooper'],
    references: [],
  },
  {
    number: "24",
    letter: "bd",
    person: "bobby deol",
    action: "celebrate",
    hints: 'celebrate fathers day with dharmendra',
    object: "father's day",
    alternatives: [
      {
        name: "Bobby deol",
        intro: "sunney deol brother",
      }
    ],
    references: [],
  },
  {
    number: "25",
    letter: "be",
    person: "billy elliott",
    action: "jumping",
    hints: 'no hints added yet',
    object: 'stage',
    alternatives: [],
    references: [],
  },
  {
    number: "26",
    letter: "bs",
    person: "ben stiller",
    action: "taking care",
    hints: 'taking care Vietnamese child in Tropic thunder',
    object: 'Vietnamese Child',
    alternatives: [
        {
            name: "Ben stiller",
            intro: "Acted in Zoolander, Tropic thunder, The Secret Life of Walter Mitty",
        },
        {
            name: "BRITNEY SPEARS",
            intro: "singer. snag Ooops did it again",
        }

    ],
    references: [],
  },
  {
    number: "27",
    letter: "bg",
    person: "bill gates",
    action: "counting",
    hints: 'counting money and chuckling evilly',
    object: 'money',
    alternatives: [],
    references: [],
  },
  {
    number: "28",
    letter: "bh",
    person: "benny hill",
    action: "chased",
    hints: 'as a milkman being chased by naked women',
    object: 'naked women',
    alternatives: [
      {
        name: "benny hill",
        intro: "actor"
      },
      {
        name: "Bella Hadid",
        intro: "Gigi hadid sister",
      }
    ],
    references: [],
  },
  {
    number: "29",
    letter: "bn",
    person: "bill nighy",
    action: "giving motor ride",
    hints: 'Bill nighy giving motor ride to Judi Dench @ The Best Exotic Marie gold hotel',
    object: 'Judi Dench',
    alternatives: [],
    references: [],
  },
  {
    number: "30",
    letter: "co",
    person: "conan o'brien",
    action: "hosting",
    hints: "conan o'brien hosting late night show and make sneak peak available @ Team coco Youtube channel",
    object: 'Team Coco',
    alternatives: [],
    references: [],
  },
  {
    number: "31",
    letter: "ca",
    person: "Captain America",
    action: 'frisbee-throws',
    object: 'shield',
    hints: "frisbee-throws his shield",
    alternatives: [
        {
            name: "Captain America",
            intro: "Fictional Superhero in Marvel comic",
        },
        {
            name: "CHRISTINA AGUILERA",
            intro: "Singer. Sang Move like a jagger with Adam Levine",
        }
    ],
    references: [],
  },
  {
    number: "32",
    letter: "cb",
    person: "christian bale",
    action: "push up",
    hints: "morning push up after taking green leafy vegetable juice from michael caine",
    object: 'michael caine',
    alternatives: [
        {
            name: "christian bale",
            intro: "Acted as batman in Batman series"
        },
        {
            name: "Chris Brown",
            intro: "physically assaulting her girlfriend Rihanna"
        },
        {
          name: "Chetan Bhagat",
          intro: "Wrote novel Half girlfriend, One india girl"
        }
    ],
    references: [],
  },
  {
    number: "33",
    letter: "cc",
    person: "charlie chaplin",
    action: "twirling",
    hints: "twirling cane and waddling",
    object: 'cane',
    alternatives: [
      {
        name: "Charlie Chaplin",
        intro: "Comedian"
      },
      {
        name: "Camila Cabello",
        intro: "sang havana, cuba american singer"
      }
    ],
    references: [],
  },
  {
    number: "34",
    letter: "cd",
    person: "cameron diaz",
    action: "self defense",
    hints: 'no hints added yet',
    object: 'Zephyr',
    alternatives: [
      {
        name: "Cameron Diaz",
        intro: "Heroin of the musk, knight and day"
      },
      {
        name: "Céline Dion",
        intro: "sang titanic movie song",
      }
    ],
    references: [],
  },
  {
    number: "35",
    letter: "ce",
    person: "clint eastwood",
    action: "mumbling",
    hints: "mumbling incoherently to chair - Actor Assails Obama Through Empty Chair",
    object: 'chair',
    alternatives: [
        {
            name: "Clint Eastwood",
            intro: "Hollywood actor Assails Obama Through Empty Chair"
        },
        {
            name: "Chris Evans",
            intro: "Captain America, fantastic 4",
        }
    ],
    references: [],
  },
  {
    number: "36",
    letter: "cs",
    person: "charlie sheen",
    action: "anger",
    hints: 'no hints added yet',
    object: 'management',
    alternatives: ['charlie sheen', 'Cecily Strong'],
    references: [],
  },
  {
    number: "37",
    letter: "cg",
    person: "che guevara",
    action: "wearing",
    hints: "doing motorcycle wheelie wearing che t-shirt",
    object: 'che t-shirt',
    alternatives: [],
    references: [],
  },
  {
    number: "38",
    letter: "ch",
    person: "chris hemsworth",
    action: "lifting",
    hints: "mighty thor lifting hammer(mjolnir)",
    object: 'hammer(mjolnir)',
    alternatives: [
        {
            name: "chris hemsworth",
            intro: "Acted as Thor and famous for lifting hammer"
        }
    ],
    references: [],
  },
  {
    number: "39",
    letter: "cn",
    person: "chuck norris",
    action: "roundhouse kicking",
    hints: "roundhouse kicking your face",
    object: 'face',
    alternatives: [
      {
        name: "chuck norris",
        hints: "roundhouse kick",
      },
      {
        name: "Christopher Nolan",
        intro: "Directed The Dark night, Inception, Intersteller",
      }
    ],
    references: [],
  },
  {
    number: "40",
    letter: "do",
    person: "dominc o'brien",
    action: "memorizing",
    hints: "8th times memory champion Dominic o'brien memorizing deck of card",
    object: 'deck',
    alternatives: [],
    references: [],
  },
  {
    number: "41",
    letter: "da",
    person: "dan akroyd",
    action: "fighting",
    hints: 'no hints added yet',
    object: 'marshmallow man',
    alternatives: [
      {
        name: "dan akroyd",
        intro: "fighting with marshmallow man",
      },
      {
        name: "Dianna Agron",
        intro: "Daughter of robert d niro in family movie",
      }
    ],
    references: [],
  },
  {
    number: "42",
    letter: "db",
    person: "david beckham",
    action: "free kick",
    hints: "best free kick in sea beach. pointing Bin with football",
    object: 'sea beach',
    alternatives: ['Drew Barrymore', 'David Beckham'],
    alternatives: [
      {
        name: "David Beckham",
        intro: "English footballer",
      },
      {
        name: "Drew Barrymore",
        intro: "first 50 dates"
      }
    ]

  },
  {
    number: "43",
    letter: "dc",
    person: "david copperfield",
    action: "making disappear",
    hints: "making a pyramid disappear",
    object: 'pyramid',
    alternatives: [],
    references: [],
  },
  {
    number: "44",
    letter: "dd",
    person: "Dr DRe",
    action: "creating",
    hints: 'no hints added yet',
    object: 'Headphone',
    alternatives: [
      {
        name: "Didier Drogba",
        intro: "former captain of Ivory Coast",
      },
      {
        name: "Dr Dre",
        intro: "Beats Headphone"
      }
    ],
    references: [],
  },
  {
    number: "45",
    letter: "de",
    person: "dwight eisenhower",
    action: " sworn",
    hints: 'no hints added yet',
    object: 'office',
    alternatives: [],
    references: [],
  },
  {
    number: "46",
    letter: "ds",
    person: "dale steyn",
    action: "bowling",
    hints: 'no hints added yet',
    object: 'fast',
    alternatives: [
        {
            name: "daly steyn",
            intro: "south african fastest bowler",
        },
        {
            name: "David Schwimmer",
            intro: "Acted in Friends TV series",
        },
        {
            name: "DAVID SPADE",
            intro: "acted alongside adam sandler in many movie like grown up (naked) ",
        },
        {
            name: "Dax Shepard",
            intro: "Acted police officer in CHIPS movie",
        }

    ],
    references: [],
  },
  {
    number: "47",
    letter: "dg",
    person: "dolce gabana",
    action: " adjusting",
    hints: 'no hints added yet',
    object: 'sunglasses',
    alternatives: [],
    references: [],
  },
  {
    number: "48",
    letter: "dh",
    person: "dustin hoffman",
    action: "fight",
    hints: 'Acted as shifu in Kunfu panda',
    object: 'tai lung',
    alternatives: [
      {
        name: "Dustin Hoffman",
        intro: "Acted as shifu in Kunfu panda",
      },
      {
        name:  "djimon hounsou",
        intro: "Acted in Blood Diamond movie with Leo. Was wrestler coach in Never back down",
      }
    ],
    references: [],
  },
  {
    number: "49",
    letter: "dn",
    person: "duke nukem",
    action: "firing",
    hints: 'firing a blaster and ssying "ooh, that gotta hurt"',
    object: 'blaster',
    alternatives: [
      {
        name: "Duke Nukem",
        intro: "Duke Nukem Forever is a 2011 first-person shooter video gam",
      },
      {
        name: "Robert De Niro",
        intro: "grand pa with zack efron",
      }
    ],
    references: [],
  },
  {
    number: "50",
    letter: "eo",
    person: "50 cent",
    action: "opening",
    hints: 'no hints added yet',
    object: 'candy shop',
    alternatives: [],
    references: [],
  },
  {
    number: "51",
    letter: "ea",
    person: "elizabeth arden",
    action: " spraying",
    hints: 'no hints added yet',
    object: 'perfume',
    alternatives: [],
    references: [],
  },
  {
    number: "52",
    letter: "eb",
    person: "emily bronte",
    action: "authoring",
    hints: 'no hints added yet',
    object: 'novel Wuthering height',
    alternatives: [
      {
        name: "emily bronte",
        intro: "Famous for writing Wuthering heighs" 
      },
      {
        name: "ELIZABETH BANKS",
        intro: "Hollywood actress acted on Walk of Shame, 40 years of virgin, definitely or maybe",
      },
      {
        name: "Emily Blunt",
        intro: "Edge of Tomorrow"
      }

    ],
    references: [],
  },
  {
    number: "53",
    letter: "ec",
    person: "eric clapton",
    action: " playing an electric guitar",
    hints: 'Eric Clapton is a guitarist',
    object: 'guitar',
    alternatives: [
      {
        name: "Eric Clapton",
        intro: "Guitarist"
      },
      {
        name: "Elisha Cuthbert",
        intro: "The Girl Next Door cute girl",
      },
      {
        name: "Emmanuelle Chriqui",
        intro: "Heroin in You don't mess with zohan",
      }
    ],
    references: [],
  },
  {
    number: "54",
    letter: "ed",
    person: "ernie dingo",
    action: "talking",
    hints: " talking in aboriginal accent",
    object: 'aboriginal accent',
    alternatives: ['Ellen DeGeneres', 'Ernie Dingo'],
    alternatives: [
      {
        name: 'Ernie Dingo',
        intro: "Australian actor. aboriginal accent",
      },
      {
        name: "ellen degeneres",
        intro: "Ellen show, ellen tube",
      },
      {
        name: "Elizabeth Debicki",
        intro: "The great gatsby actress"
      }
    ],
    references: [],
  },
  {
    number: "55",
    letter: "ee",
    person: "e e cummings",
    action: "typing",
    hints: 'no hints added yet',
    object: 'poem',
    alternatives: [
      {
        name: "EE Cummings",
        intro: "Edward Estlin (E. E.) Cummings, often styled as e e cummings, as he sometimes signed his name, was an American poet, painter, essayist, author, and playwright"
      }
    ],
    references: [],
  },
  {
    number: "56",
    letter: "es",
    person: "ED Sheeran",
    action: "exercising",
    hints: 'no hints added yet',
    object: 'for shape of you',
    alternatives: [
      {
        name: "Edward scissorhands",
        intro: "Johny deep character in Edward Scissorhands movie"
      },
      {
        name: "Ed Sheeran",
        intro: "Singing - shape of you",
      },
      {
        name: "Emma Stone",
        intro: "Acted in Crazy stupid love, La la land, amazing spiderman. Good couple with Ryan Gosling",
      }
    ],
    references: [],
  },
  {
    number: "57",
    letter: "eg",
    person: "Esha Gupta",
    action: "participating",
    hints: 'no hints added yet',
    object: 'Femina miss india',
    alternatives: [
      {
        name: "edvard grieg",
        intro: "conducting orchestra at the piano"
      },
      {
        name: "Esha Gupta",
        intro: "Beautiful actress in Jannat 2, commando 2, "
      },
      {
        name: "Ellie Goulding",
        intro: "Singer song writer - loving me like you do",
      },
      {
        name: "Eva green",
        intro: "Casino royal",
      }
    ],
    references: [],
  },
  {
    number: "58",
    letter: "eh",
    person: "ethan hunt",
    action: "suspended",
    hints: 'no hints added yet',
    object: 'cia computer',
    alternatives: [
      {
        name: "ethan hunt",
        intro: "cia officer went rouge in mission impossible",
      },
      {
        name: "EMILE HIRSCH",
        intro: "Acted in into the wild and lone survivor costarred alongside Mark Wahlberg and Taylor Kitsch, the girl next door",
      },
      {
        name: "Emraan Hashmi",
        intro: "Kissing Hero in bollywood",
      }
    ],
    references: [],
  },
  {
    number: "59",
    letter: "en",
    person: "edward norton",
    action: "smashing",
    object: 'hulk',
    action: "smashing while turning into hulk",
    hints: 'no hints added yet',
    alternatives: [],
    references: [],
  },
  {
    number: "60",
    letter: "so",
    person: "sharon osbourne",
    action: "kissing/squeezing",
    hints: "Kissing / Squeezing her pomeranian dog",
    object: 'pomeranian',
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
    alternatives: [
      {
        name: "shakira",
        intro: "sang waka waka for world cup, hips dont lie, wife of jerad pike",
      },
      {
        name: "Saif Ali Khan",
        inro: 'Nawab family, Acted in Cocktail with Depika Padukone and Diana penty',
      },
      {
        name: "Shiney Ahuja",
        intro: "gangster, bhool bhulia, welcome back"
      },

    ],
    references: [],
  },
  {
    number: "62",
    letter: "sb",
    person: "sandra bullock",
    action: "driving",
    hints: 'driving bus in speed movie',
    object: 'bus',
    alternatives: ['sandra bullock', 'Simon Baker from mentalist', 'sacha baron cohen'],
    references: [],
  },
  {
    number: "63",
    letter: "sc",
    person: "simon cowell",
    action: "judging",
    hints: 'x factor',
    object: 'Reality competition',
    alternatives: [
      {
        name: "Simon Cowell",
        intro: "Co-founded One direction band and judge of X factor",
      },
      {
        name: "Sunidhi Chauhan",
        intro: "sang Mere Hath main in fanaa movie, crazy kiya re, Sheila ki jawani, dance pe chance",
      },
    ],
    references: [],
  },
  {
    number: "64",
    letter: "sd",
    person: "sanjay dutt",
    action: "Gandhigiri",
    hints: 'sanjoy datta showing gandhi giri in lago raho munna vi',
    object: 'munna bhai',
    alternatives: [
      {
        name: "sanjoy datta",
        intro: "sanju movie performed by Ranbir kapoor",
      },
      {
        name: "Shikhar Dhawan",
        intro: "Captain of Sunrise Hyderabad",
      },
      {
        name: "snoop dogg",
        intro: "snoop dogg and pharrell williams drop it like its hot",
      }
    ],
    references: [],
  },
  {
    number: "65",
    letter: "se",
    person: "sam elliot",
    action: "riding",
    hints: 'riding a burning horse in ghost rider',
    object: 'burning horse',
    alternatives: [
      {
        name: "Sam elliot",
        intro: "Riding burning horse in ghost rider",
      },
      {
        name: "Shankar–Ehsaan–Loy",
        intro: "Musical Trio sang Mitwa, Ik junon in zindegi na milengi dobara, zinda(Bhaag Milkha Bhaag)"
      }
    ],
    references: [],
  },
  {
    number: "66",
    letter: "ss",
    person: "steven spielberg",
    action: "directing",
    hints: 'Directing movie like ready plyer one',
    object: 'movie',
    alternatives: [
      {
        name: "steven spielberg",
        intro: "directing movie like ready player one, ",
      },
      {
        name: "seann william scott",
        intro: "Acted in american pie and goon",
      }, 
      {
        name: 'S. Sreesanth',
        intro: "Indian cricketer. Who was slapped by Harbhajan sing. arrest after Spot fixing",
      },
      {
        name: "Salim-Sulaiman",
        intro: "Musical duo Salim merchant and Sulaiman merchant. used to listen their Khudaya Ve",
      },
      {
        name: "Sonakshi Sinha",
        intro: "R rajkumer and Akria Heroin",
      },
      {
        name: "Sushant Singh Rajput",
        intro: "Ms Dhoni untold story. Main tera boyfriend",
      },
      {
        name: "susmita singh",
        intro: "Acted as salman khan assistant in maine prayer kiyo kiya"
      },
      {
        name: "Shilpa Shetty",
        intro: "Daadkhan movie + youtube food channel",
      },
      {
        name: "Sunil Shetty",
        intro: "Gentleman villain with Siddarth"
      }
    ],
    references: [],
  },
  {
    number: "67",
    letter: "sg",
    person: "sourav ganguly",
    action: "bangali captaincy",
    hints: 'bangali captaincy in india',
    object: 'indian cricket team',
    alternatives: ['selena gomez', 'sourav ganguly'],
    alternatives: [
      {
        name: "Selena Gomez",
        intro: "Singer, actress, Ex girlfriend of justin Bieber"
      },
      {
        name: "Sourav Ganguly",
        intro: "Indian ex cricet captain. Bengali",
      },
      {
        name: "Sunil Grover",
        intro: "Comedian doctor in Kapil sharma show",
      }

    ],
    references: [],
  },
  {
    number: "68",
    letter: "sh",
    person: "stephen hawking",
    action: "discover",
    hints: "discover theory of relativity",
    object: 'theory of relativity',
    alternatives: ['salma hayek', 'Stephen Hawking'],
    alternatives: [
      {
        name: "stephen hawking",
        intro: "Big bang theory",
      },
      {
        name: "Salma Hayek",
        intro: "adam sandler wife in grown up",
      }, 
      {
        name: "Shruti Haasan",
        intro: "Kamal Haasan Daughter",
      }
    ],
    references: [],
  },
  {
    number: "69",
    letter: "sn",
    person: "Sam Neill",
    action: "running",
    hints: 'Running From A T-REX Jurassic Park' ,
    object: 't-rex',
    alternatives: [
      {
        name: "Sam neil",
        intro: "Running from a T-REX in Jurassic Park",
      },
      {
        name: "Sonu Nigam",
        intro: "Indian Singer",
      }
    ],
    references: [],
  },
  {
    number: "70",
    letter: "go",
    person: "gary oldman",
    action: "curbing crime",
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
    action: "spinning",
    hints: 'no hints added yet',
    object: 'wheel',
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
    action: "Spitting",
    hints: 'no hints added yet',
    object: 'blood',
    alternatives: [
      {
        name: "Gene simmons",
        intro: "Spitting blood in a concert",
      },
      {
        name: "Gracy Singh",
        intro: "Cinky in Munna Bhai MBBS"
      }
    ],
    references: [],
  },
  {
    number: "77",
    letter: "gg",
    person: "gal gadot",
    action: "fighting",
    hints: 'Princess Diana - wonder women',
    object: 'wonder women',
    alternatives: [
      {
        name: "Gulshan Grover",
        intro: "A. R. Rehman in Dil Maange More",
      },
      {
        name: "Gautam gambhir",
        intro: "Kolkata Knight Riders captain",
      },
      {
        name: "Gal Gadot",
        intro: "Wonder women",
      }
    ],
    references: [],
  },
  {
    number: "78",
    letter: "gh",
    person: "gigi hadid",
    action: "modeling",
    hints: 'no hints added yet',
    object: 'victoria secret',
    alternatives: [
      {
        name: "george harrison",
        intro: "making song for bangladesh",
      },
      {
        name: "Goldie Hawn",
        intro: "kate hudson mother. Acted in snatched Amy Schwimmer",
      },
      {
        name: "Gigi Hadid",
        intro: "Gigi Hadid is an American fashion model, zyan malik girlfriend",
      }
    ],
    references: [],
  },
  {
    number: "79",
    letter: "gn",
    person: "greg norman",
    action: "swinging",
    hints: "swinging a golf club",
    object: 'golf club',
    alternatives: [],
    references: [],
  },
  {
    number: "80",
    letter: "ho",
    person: "santa claus",
    action: "laughing",
    hints: "laughing until belly shakes (ho ho ho!)",
    object: 'belly',
    alternatives: [],
    references: [],
  },
  {
    number: "81",
    letter: "ha",
    person: "humayun ahmed",
    action: "creating",
    hints: "himu wear yellow dress",
    object: 'yellow dress',
    alternatives: [],
    references: [],
  },
  {
    number: "82",
    letter: "hb",
    person: "halle barry",
    action: "leaping",
    hints: 'no hints added yet',
    object: 'catwoman',
    alternatives: [
      {
        name: "HALLE BERRY",
        intro: "acted in xmen, catwoman"
      }
    ],
    references: [],
  },
  {
    number: "83",
    letter: "hc",
    person: "hillary clinton",
    action: "poll",
    hints: 'no hints added yet',
    object: 'bill clinton',
    alternatives: [
      {
        name: "hillary clinton",
        intro: "Bill clinton wife",
      },
      {
        name: "Henry Cavill",
        intro: "British actor Acted as superman in Man of Steel",
      },
    ],
    references: [],
  },
  {
    number: "84",
    letter: "hd",
    person: "humpty dumpty",
    action: "crime",
    hints: "smashed open at wall crime scene",
    object: 'wall',
    alternatives: [],
    references: [],
  },
  {
    number: "85",
    letter: "he",
    person: "herb elliott",
    action: "running",
    hints: "running very fast",
    object: 'very fast',
    alternatives: [],
    references: [],
  },
  {
    number: "86",
    letter: "hs",
    person: "Harry style",
    action: "formed",
    hints: 'no hints added yet',
    object: 'One direction',
    alternatives: [
      {
        name: "harbhajan singh",
        intro: "Indian spin bowler. Married to geeta basra. slapping sreesanth",
      },
      {
        name: "harry styles",
        intro: "one direction",
      }
    ],
    references: [],
  },
  {
    number: "87",
    letter: "hg",
    person: "hg wells",
    action: "driving",
    hints: "driving the time machine",
    object: 'time machine',
    alternatives: [
      {
        name: "Hg Wells",
        intro: "British writer wrote time machine novel"
      },
      {
        name: "Hugh Grant",
        intro: "British Actor acted in The Man from U.N.C.L.E. with Henry Cavill",
      },
    ],
    references: [],
  },
  {
    number: "88",
    letter: "hh",
    person: "hulk hogan",
    action: "wrestling",
    hints: "hulk hogan wrestling",
    object: 'www',
    alternatives: [],
    references: [],
  },
  {
    number: "89",
    letter: "hn",
    person: "horatio nelson",
    action: "standing at the wheel of the ship",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [],
    references: [],
  },
  {
    number: "90",
    letter: "no",
    person: "norman osbourne",
    action: "altering",
    hints: "talking to his alter ego in the mirror",
    object: 'ego',
    alternatives: [],
    references: [],
  },
  {
    number: "91",
    letter: "na",
    person: "neil armstrong",
    action: "stepping",
    action: "stepping onto moon",
    object: 'moon',
    alternatives: [],
    references: [],
  },
  {
    number: "92",
    letter: "nb",
    person: "napoleon bonaparte",
    action: "standing",
    hints: "hand in coat, standing for portrait",
    object: 'portrait',
    alternatives: [
      {
        name: "Napoleon Bonaparte",
        intro: "French statesman and military leader ",
      },
      {
        name: "Nushrat Bharucha",
        inro: "Actress of Sonu Ke Titu Ki Sweety, prayer ki panchnama",
      }
    ],
    references: [],
  },
  {
    number: "93",
    letter: "nc",
    person: "nicholas cage",
    action: "riding",
    hints: "conducting hallelujah in face off with gold guns",
    object: 'burning motor cyyle',
    alternatives: [
      {
        name: "Nicholas cage",
        intro: "ghost rider actor"
      },
      {
        name: "Naga Chaitanya",
        intro: "Akkineni Nagarjuna son and telegu hero",
      }
    ],
    references: [],
  },
  {
    number: "94",
    letter: "nd",
    person: "Nina Dobrev",
    action: "challenging",
    hints: 'no hints added yet',
    object: 'kids in gymnastics',
    alternatives: [
      {
        name: "Nancy O'Dell",
        intro: "American television host. Donald Trump’s Lewd Remarks About Her",
      },
      {
        name: "neil diamond",
        intro: "Singer, Songwriter",
        hints: "Forever in Blue jeans",
      },
      {
        name: "Natalie Dormer",
        intro: "the hunger games",
        hints: "60 Seconds With...Natalie Dormer - she anticipated for photographic memory for her career"
      },
      {
        name: "Neal Dodson",
        intro: "Margin Call Producer Neal Dodson",
      },
      {
        name: "Nina Dobrev",
        intro: "xXx: Return of Xander Cage and the vampire diaries actress, flexible girl",
      }
    ],
    references: [],
  },
  {
    number: "95",
    letter: "ne",
    person: "noel edmunds",
    action: "talking",
    hints: 'no hints added yet',
    object: 'banker',
    alternatives: [
      {
        name: "noel edmunds",
        intro: "talking to the banker"
      }
    ],
    references: [],
  },
  {
    number: "96",
    letter: "ns",
    person: "neil sedaka",
    action: "singing happy birthday sweet 16",
    hints: 'no hints added yet',
    object: 'not',
    alternatives: [
      {
        name: "Neil Sedaka",
        intro: "Happy birthday song",
      },
      {
        name: "Naseeruddin Shah",
        intro: "Wanted bhai in Welcome back "
      },
      {
        name: "Nawazuddin Siddiqui ",
        intro: "Acted in Gangs of Wasseypur, Kick",
      },
      {
        name: "Neel Sethi",
        intro: "child artist of The Jungle Book",
      },
      {
        name: "Namrata Shirodkar",
        intro: "Mahesh babu wife",
      }
    ],
    references: [],
  },
  {
    number: "97",
    letter: "ng",
    person: "nancy grace",
    action: "commenting",
    hints: 'no hints added yet',
    object: 'prosecutor',
    alternatives: [
      {
        name: 'Nancy Grace',
        intro: "Nancy Ann Grace is an American legal commentator and television journalist + actress",
      },
      {
        name: "nell gwyn",
        action: "long-time mistress of king charles ii",
      }
    ],
    references: [],
  },
  {
    number: "98",
    letter: "nh",
    person: "neil patrick harris",
    action: "oooawesome",
    hints: "oooawesome",
    object: 'How I met your mother',
    alternatives: [],
    references: [],
  },
  {
    number: "99",
    letter: "nn",
    person: "nicholas nickleby",
    action: "created",
    hints: "dickension charcter",
    object: 'dickension character',
    alternatives: [
      {
        name: "Neil Nitin Mukesh",
        intro: "Acted in new York, jail, players"
      },
      {
        name: "nicholas nickleby",
        intro: "Dickension character",
      }
    ],
    references: [],
  }
]

export default {
  dominicPAO,
  dominicNumbers
}