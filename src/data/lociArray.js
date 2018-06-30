const groundRule = `
outside door will be called before door
wall holding door will be call(facing) immediately after door
first wall than stuff near wall
from now on visit left hand side first
all bed will be call at same time in one room then fan
for new room '<br>' will be used
after '<br>' next location starting will be by ## followed by location
top to bottom (like window first then oven area incase of feni kitchen)

`
const fatepurHome = [
  'entrance of house',
  'stair to main door',
  'main __pira near main door',
  'door itself',
  'chain of main door',
  'lock of main door',
  '__dhasa inside main door',
  'south facing wall',
  'upper decoration like flower on tin and polyester cloth',
  'alamgir pic on south wall',
  'window 1 of south wall',
  'cement pillar near bed',
  'bed',
  'mosquito net of this bed',
  'ceiling fan above bed',
  'window facing south wall',
  'west facing wall near bed',
  'window on west facing wall - adjacent of my reading room',
  'north facing middle wall',
  'naked Chinese boy picture with train bye on north facing wall',
  'reading table',
  'first to 2nd room entrance door inside room',
  'ajanta clock',
  'mirror',
  'east facing wall',
  'TV box',
  'sofa',
  'window 4 on south wall near sofa',

  '<br>',

  '## West facing wall inside middle room ',
  'hanger for baba/dadu shirt',
  'door inside middle room to way to my bed room',
  'east facing wall in my bed room',
  'south facing wall',
  'built in __changa to visit __kar',
  'a old busket to keep essential in __kar',
  'tin layer (which feel dangerous to sit)',
  'bed',
  'mosquito net for my bed',
  'ceiling fan of my bed',
  'west facing wall',
  'winter bed storing rack near window',
  'window on west facing wall',
  'north facing wall',
  'showcase',

  '<br>',

  '## north facing wall in middle room',
  'door to go inside back room(__picer __ghar)',
  'middle room showcase',
  'rack top of the show case for storing puffed rice',
  'little bed for grandfather shop',
  'east facing wall',
  'window on east facing wall of middle room',
  'door of east facing wall',
  'south facing wall',
  'door of south facing wall to enter into didis room',
  'north facing wall in didis room',
  'bed',
  'mosquito net',
  'fan',
  'didis room east facing wall',
  'didis room window on east facing wall',
  'didis room south facing wall',
  'didis room window on south facing wall - used to see __dhalim tree',
  'west facing wall - tv reverse side',
  'cassette player',
  '__gangar __jal for dadu',
  'wall alna on south facing wall of middle room to store horinarayana duti',

  '<br>',

  '## __picer __ghar south facing wall',
  'west facing wall in between bed room and tin box',
  'door to enter __picer __ghar bed room',
  'east facing wall in bed room',
  'south facing wall',
  'west facing wall',
  'door on west facing to a take a look outside, mizan house',
  'winter bed storing rack near door',
  'north facing wall',
  'north facing window',
  'bed',
  'bed mosquito net',
  'bed ceiling fan',

  '<br>',

  '## tin-wood storing box',
  'north facing wall',
  'window of north facing wall west',
  'window of north facing wall east near food almira',
  'rack above window',
  'almirah for storing food',
  'east facing wall',
  'door to go to outside and kitchen room in east facing wall',
  'dental stuff keeper rack',

  '<br>',

  '## mango tree near study room(==============my study room=================)',
  'study room mud stair',
  'study room door',
  'study room door bottom chain for lock',
  '__dhasa inside door south facing door',
  'south facing wall',
  'west facing wall',
  'winter rack',
  'north facing wall',
  'door in north facing wall',
  'east facing wall',
  'window in east facing wall north',
  'window in east facing wall south',
  'east side __pira of the main room',
  'sleeping bed',
  'mosquito net',
  'reading table',

  '<br>',

  '## __larki(wood for cook temporary) (============kitchen=============)',
  'north facing wall',
  '__matir oven area',
  'east facing wall',
  'south facing wall',
  'roof of the little kitchen',

  '<br>',

  '## __pira of the main kitchen room',
  'door of the main kitchen room',
  'chain of the main kitchen room',
  'south facing wall',
  'west facing wall',
  'bamboo pillar to store __beter__mulla for sitting when we used to eat',
  'north facing wall',
  'east facing wall',
  'oven area',
  '__larki(wood for cook reserved edition)',

  '<br>',

  '## __thakur __ghar stair__pira in front of south door',
  '__thakur __ghar south door',
  'south door chain',
  'west facing wall',
  'north facing wall',
  'door on north facing',
  'east facing wall',
  '__thakur small temple',
 'south facing wall',

 '<br>',

  '## __stair__pira in front of north door',
  'north door',
  'north door chain',
  'west facing wall',
  'bed',
  'north facing wall',
  'east facing wall',
  'south facing wall',

  '<br>',

  
  '## __dhekhi__ghar',
  '__dhekhi__itself',

  '<br>',

  '## __hawar__baper__ghar entrace (always open)',
  'cotton for dress drying in front of __hawar__baper__ghar',
  '__larki(wood for cook) inside __hawar__baper__ghar',

  '<br>',

  '## our tubewell',
  'our pee area',
  'our ash area',
  'our toilet door',
  'our toilet'
]
const palashpurBasudev = [
  'outdoor sitting',
  'place for shoe',
  'oven area',
  'cotton for dress drying top of the oven',
  'south toilet',
  'room adjacent south toilet',
  'room adjacent our main room',
  'entrance door of our main door',

  '<br>',

  '## west facing wall',
  'permanent rack above door for keep puffed rice tin',
  'window where we drying our dress on west facing wall',
  'north facing wall',
  'door in north facing wall',
  'mirror in north facing wall',
  'showcase',
  'Tv box',
  'Tv',
  'east facing wall',
  'east facing window',
  'bed',
  'mosquito net',
  'ceiling fan',
  'table for eating + study',
  'south facing wall',

  '<br>',

  '## south facing wall in fathers room',
  'west facing wall',
  'door to go inside food room',
  'north facing wall',
  'tagor temple',
  '___tagorer __beter__mulla placing place',
  'tiny west facing wall',
  'north facing wall',
  'bottom rack on north facing wall',
  '__tapecall basin for cleaning utensils',
  'east facing wall',
  'rack in east facing wall',
  'steel almirah',
  'window on east facing wall',
  'bed',
  'mosquito net',
  'ceiling fan',
  'walton fridge',

  '<br>',

  '## east facing wall',
  '__beter__mulla for sitting when eat',
  'south facing wall',
  'door on south facing wall',
  '__dhasa/__banga on door in south facing wall',
  'utensils on floor',
  'food storing wood almirah',
  'west facing wall',
  'little window on west facing wall',
  'lpg gas cylinder',
  'gas oven',
  'cotton for dress drying top of the oven',
  'wood table for keeping vegetable',
  'north facing wall',
  'toilet door',
  'toilet',
]
const palashpurBiren = [
  'door',
  'north facing wall',
  'east facing wall',
  'door to go inside',
  'south facing wall',
  'tvbox',
  'tv',
  'rack for net and puffed rice',
  'bed',
  'mosquito net',
  'fan',
  'west facing wall',
  'rack for puffed rice',
  'table',
  'window at north facing wall',

  '<br>',

  '## west facing wall from almirah room',
  'north facing wall',
  'rack on north facing wall',
  'window on north facing wall',
  'cotton __alna for keeping dresses',
  'steel __almira',
  'east facing wall',
  '__thakur',
  'cotton __alna on east facing wall',
  'bed',
  'mosquito net',
  'fan',
  'south facing wall',
  'rack for puffed rice and net tin on south facing wall',
  'food almira',
  'dining table',

  '<br>',

  '## kitchen door',
  'south facing wall',
  'west facing wall',
  'gas oven area',
  'north facing wall',
  'window on north facing wall',
  'east facing wall',
  'gas oven area',

   '<br>',
 
  '__chap__kall area',
  '__toilet area',
  'preety (bhagnir) ghar',
  'Khusum er ghar',
  'shoag ar ghar',

   '<br>',
 

  '## pisar gharer door',
  'west facing wall',
  'tiny window on west facing wall',
  'north facing wall',
  'food almirah',
  'east facing wall',
  'door on east facing wall',
  'rack on east facing wall',
  'south facing wall',
  
   '<br>',
 
  '## west facing wall in middle room',
  'bed',
  'mosquito net',
  'ceiling fan',
  'north facing wall',
  'east facing wall',
  'window on east facing wall',
  'door on east facing wall',
  'south facing wall',
  'door on south facing wall to go to thakur gahr',
  '__thakur __ghar',

   '<br>',
 
  '## lithoner ghar old',
  'lithoner ghar 2'

]
const feniMess = [
  'gate of the japani bhaban',
  'east facing gate wall',
  'south facing wall where lot of meter',
  'west facing wall',
  'mama __khat',
  'fan above __khat',
  'north facing wall',
  'door on north facing wall',
  'tubewell',
  
   '<br>',
 
  '## door on north facing wall',
  'door on north facing wall',
  'west facing wall beside stair',
  'stair',

   '<br>',

  '## __papoosh in front of door where we hide key',
  'calling bell switch',
  'door of 302',
  'tiny north facing wall',
  'east facing wall',
  'north facing wall',
  'shoe rack',
  'water filter',
  'east facing wall',
  'basin',
  'door to go to my room',
  'south facing wall',
  'door to go to kitchen',
  'door to go to banker room',
  'door to go to toilet',
  'toilet',
  'tiny west facing room',
  'door to go to mainuddin vi room',
  'north facing wall',
  'west facing wall',
  'winter storage in between east facing west facing and main door top',

   '<br>',
 
  '## east facing wall',
  'rakib study table',
  'south facing wall',
  'door on south facing wall',
  'balcony',
  'big window on south facing wall',
  'bed',
  'fan',
  'west facing wall',
  'north facing wall',
  'big study table table',
  'x style table which purchased from me',

   '<br>',
 
  '## north facing wall from banker room',
  'banker __vagina __shoag study table',
  'east facing wall',
  'south facing wall',
  'big window on south facing wall',
  'bed',
  'fan',
  'west facing wall',
  'winter stuff store house',
  'study table on west facing wall',
  
   '<br>',

  '## north facing wall in kitchen',
  'rack on north facing area where Mainuddin and Rakib rice be placed',
  'east facing wall',
  'top rack on east facing wall -  sometimes stuff',
  'bottom rack on east facing wall -  regular stuff',
  'south facing wall',
  'tape area',
  'rack on south facing area',
  'window on south facing wall',
  'oven area',
  'west facing wall in kitchen',
  'rack on west facing wall where banker keep stuff',

   '<br>',
 
  '## tiny south facing wall in my room',
  'north facing wall',
  'white board',
  'main table',
  'red table above main table',
  '100tk rack near north facing wall',
  'east facing wall',
  'door on east facing wall',
  'window on east facing wall',
  'bed',
  'fan',
  '2 __gaj gym floor mate',
  'bin bag',
  'south facing wall',
  'tiny east facing wall',
  'toilet door in tiny east facing wall',
  'toilet',
  'south facing wall',
  'rack in south facing wall',
  'rack above head in between east and west facing wall',
  'west facing wall',
  'regal laptop table',
  'pure it',
  'tiny south facing wall near main door',
  
   '<br>',
 
  '## west facing wall in side balcony',
  'north facing tiny wall',
  'east facing wall',
  'window on east facing wall',
  'south facing tiny wall',
]
const palashHome = [
  'palash east stir',
  'door',
  'north facing wall',
  'reading table',
  'east facing wall',
  'window on east facing wall',
  'bed',
  'mosquito net',
  'ceiling fan',
  'south facing wall',
  'window on south facing wall',
  'sofa bed side',
  'west facing wall',
  'temple',
  'steel almirah',
  'door on west facing wall',

   '<br>',
 
  '## east facing wall',
  'sofa near baidh bed',
  'bed',
  'mosquito net',
  'fan',
  'south facing wall',
  'window on south facing wall',
  'west facing wall',
  'showcase',
  'Transtec tv',
  'door to enter west room',
  'north facing wall',
  'window on north facing wall',
  'sofa near north facing wall',
  
   '<br>',
 
  '## east facing wall from jumur didi room',
  'bed',
  'mosquito net', 
  'fan',
  'south facing wall',
  'window on south facing wall',
  'videocon fridge',
  'west facing wall',
  'food almirah in west facing wall',
  'north facing wall',
  'door to go outside on north facing wall',
  'table near north facing wall',
  '__alna near north facing wall socket',

   '<br>',
 
  '## kitchen room door',
  'east facing wall',
  'south facing wall',
  'door to go bath room',
  'bathroom basin',
  'bathroom area',
  'door to go to toilet',
  'toilet',
  'almirah near south facing wall',
  'tape call in corner',
  'west facing wall',
  'oven near west facing wall',
  'tubewell near west facing wall',
  'north facing wall',
  'new toilet on east side as well'
]
const indiaMama = [
  'tape call outside before starting gate',
  'gate',
  'new __mandir area',
  'gate to enter main house',
  'south facing wall only gate part',
  'west facing wall',
  'door to go to mama room from north facing wall',
  'tiny north facing wall',
  'door to go inside shubha room from north facing wall',
  'east facing wall',
  'big window on east wall',
  'nest for bird',

   '<br>',
 
  '## East facing wall',
  'chair near bed',
  'bed',
  'mosquito net',
  'fan',
  'south facing wall',
  'window on south facing wall',
  'west facing wall',
  'Television',
  'showcase case',
  'north facing wall',
  'door on north facing wall',
  'big mirror near north facing wall',

   '<br>',
 
  '## south facing wall --shubha room',
  'cycle near south facing wall',
  'west facing wall',
  'door to go to kitchen from subha room',
  'almirah in west facing wall',
  'north facing wall',
  '__thakur in north facing wall',
  'table near bed',
  'bed',
  'fan',
  'east facing wall',
  'window in east facing wall',

   '<br>',
 
  '## kitchen room entrance - south facing wall',
  'west facing wall',
  'oven',
  'oven smoke extinguisher',
  'tape call',
  'north facing wall',
  'window on north facing wall',
  'east facing wall in kitchen',

   '<br>',

  '## East facing wall in didima room',
  'table - sumi',
  'chair near bed',
  'bed',
  'mosquito net',
  'fan',
  'south facing wall',
  'window on south facing wall',
  'west facing wall',
  'alna',
  'steel almirah',
  'north facing wall in didima room',
  'door to go to barun mama room on north facing wall',
  'little west facing room near basin',
  'basin',
  'little north facing room',
  'toilet door',
  'toilet room',

   '<br>',

  '## tiny south facing wall (only for door)',
  'tiny east facing wall',
  'south facing wall',
  'gate in south facing wall',
  'west facing wall',
  'stir',
  'door to go to barun mama house',
  'door to go to kitchen',
  'kitchen room + oven area',
  'north facing wall',
  'door to go outside toilet',
  'windown in north facing wall',
  'east facing wall',
  'old fridge',

   '<br>',


  '## choto mama room east facing wall',
  'show case',
  'south facing wall',
  'window on south facing wall',
  'bed',
  'mosquito bed',
  'fan',
  'west facing wall',
  'north facing wall',

   '<br>',

  '## upstairs mama another room',
  'roof',

   '<br>',
 
  '## tape call outside before toilet',
  'old __koop',
  'straight toilet door',
  'toilet',
  'big toilet door',
  'big toilet',
]
const dhakaMess1 = [
  'gate',
  'khalek mama room',
  'khalek mama wash room',
  'stir',
  'door of 401',

   '<br>',

  '## east facing wall',
  'south facing wall',
  'door to enter manik dada and my room',
  'shoe rack in south facing wall',
  'door to enter apu vai room',
  'basin in south facing wall',
  'west facing wall',
  'door to go to kitchen in west facing wall',

   '<br>',

  '## kitchen east facing wall',
  'kitchen south facing wall',
  'kitchen basin',
  'west facing wall',
  'window on west facing wall',
  'kitchen oven',
  'north facing wall',

   '<br>',


  '## door of toilet in west facing wall',
  'toilet',
  'north facing wall',
  'asif table',
  'asif bed',
  'east facing wall',

   '<br>',

  '## west facing wall from mojo room',
  'dider table',
  'mojo khaled, arif vi bed',
  'fan',
  'north facing wall',
  'arif/khaled vi table',
  'mojo table',

   '<br>',

  '## north facing wall in manik dada room',
  'east facing wall',
  'dada table',
  'dada wardrobe',
  'south facing wall',
  'mytable',
  'west facing wall',
  'bed',
  'fan',

   '<br>',

  '## north facing wall in apu vai room',
  'east facing wall',
  'apu vai + khokon vi + atik vi bed',
  'fan',
  'south facing wall',
  'window in south facing wall',
  'west facing wall',
  'storage like almira in west facing wall',
  'khokon vi computer table',
  'south facing wall tiny ',
  'west facing wall',
  'atik vi table',
  'door to view outside in west facing wall',
  'balcony',
  'toilet door in north facing wall',
  'toilet itself',
  'apu vai table',

   '<br>',

  '## door of 402',
  'south facing wall',
  'west facing wall',
  'shoe rack in west facing wall',
  'water jar in west facing wall',
  'basin in west facing door',
  'south facing wall',
  'west facing wall tiny',
  'door on tiny west facing area',
  'north facing wall',
  'door in north facing wall to enter toilet',
  'toilet',
  'door in north facing wall to go to kitchen',

   '<br>',

  '## south facing wall',
  'west facing wall',
  'top rack of west facing wall',
  'bottom rack of west facing wall + basin',
  'north facing wall',
  'window in north facing wall',
  'oven area',
  'east facing wall',
  'top rack in east facing wall',
  'bottom rack in east facing wall',

   '<br>',

  '## east facing wall',
  'door to go to milky room from east facing wall',
  'north facing wall from liton vi room',
  'liton + bappi + mostofa vi bed', 
  'fan',
  'east facing wall',
  'bappi vi computer',

   '<br>',

  '## west facing wall in milky room',
  'milky table in west facing wall',
  'north facing wall',
  'window in north facing wall',
  'east facing wall',
  'milky + mamun vi bed',
  'fan',
  'south facing wall',
  'mamun vi table',

  '<br>',

  '## east facing wall in our room',
  'south facing wall',
  'sarif + mine + rabbi bed',
  'fan',
  'west facing wall',
  'door in west facing wall',
  'balcony',
  'window in west facing wall',
  'built in rack in west facing wall',
  'north facing wall',
  'window in north facing wall',
  'rabbi table',
  'door in north facing wall to enter toilet',
  'toilet',

   '<br>',

  '## door of 403',
  'west facing wall',
  'north facing wall',
  'shoe area',
  'west facing wall',
  'north facing wall',
  'door in north facing wall to enter nishat room',
  'east facing wall',
  'door in east facing wall to go to toilet',
  'toilet',
  'door in east facing wall to go to kitchen',
  'kitchen',
  'south facing wall tiny',
  'door in tiny south facing wall to go to badhon sumon room',
  'east facing wall',
  'shoag + saikat + anamul bed',
  'fan',
  'south facing wall',
  'window in south facing wall',
  'anamul table in west facing wall',

   '<br>',

  '## north facing wall in badhon sumon room',
  'sumon table in north facing wall',
  'sumon + badhon bed',
  'fan',
  'east facing wall',
  'window in east facing wall',
  'south facing wall',
  'badhon table',
  'west facing wall',

   '<br>',

  '## south facing wall in nishat room',
  'west facing wall',
  'mamun table',
  'mamun + __vagina rabbi + nishat bed',
  'north facing wall',
  'east facing wall',
  'window in east facing wall',
  'nishat table',
  'door in east facing wall',
  'balcony',
  'door in south facing wall to go to toilet',
  'toilet',
  'Nishater __vagina (rabbi) table'

]
const palashMess = [
  'shop ground floor of palash mess',
  'gate',
  'stir',
  'door',

   '<br>',

  '## east facing wall',
  'north facing wall',
  'shoe rack',
  'east facing wall',
  'door to go to palash room',
  'basin',
  'south facing wall',
  'door to go to toilet',
  'toilet',
  'east facing wall',
  'water filter',
  'south facing wall',
  'window on south facing wall',
  'oven area',
  'west facing wall',
  'basin in west facing wall',
  'east facing wall',
  'south facing wall',
  'window in south facing wall',
  'asim table',
  'west facing wall',
  'asim friends table',
  'asim + friends + anik bed',
  'fan',
  'anik table',
  'north facing wall',

   '<br>',

  '## west facing wall in palash room',
  'north facing wall',
  'palash + taposh + shuvo + sanjoy dada bed',
  'fan',
  'east facing wall',
  'window in east facing wall',
  'palash table',
  'sanjoy dada wardrobe',
  'south facing wall',
  'window in south facing wall',
  'shuvo da table',
  'taposh dada table',
]
const dhakaMama = [
  'gate to enter mama house',
  'lift',
  'door',

  '<br>',

  '## west facing wall',
  'north facing wall',
  'sofa',
  'door to view out',
  'east facing wall',
  'south facing wall',
  'television on south facing wall',
  'east facing wall',
  'door to go inside rakesh room',
  'entrance to go to kitchen',
  'kitchen oven',
  'kitchen basin',
  'door to go to washroom',
  'washroom',
  'basin',
  'south facing room',
  'door to go to mama room',
  'mama room',
  'door to go to bristy room',
  'bristy room',
  'fridge',
  'dining table',

  '<br>',

  '## west facing wall inside rakesh room',
  'north facing wall',
  'door to go to toilet',
  'toilet',
  'east facing wall',
  'window in east facing wall',
  'ac in east facing wll',
  'bed',
  'fan',
  'south facing wall',
  'mirror',
  'almirah',
  'table',

]
const tarunHouse = [
  'door to go inside main room',
  'east facing wall',
  'window in east facing wall',
  'bed',
  'fan',
  'south facing wall',
  'window on south facing wall',
  'west facing wall',
  'table',
  'door in west facing wall to go inside',
  'north facing wall',
  'sofa in north facing wall',

   '<br>',

  '## east facing wall',
  'dadi bed',
  'fan',
  'south facing wall',
  'window in south facing wall',
  'west facing wall',
  'steel almirah',
  'showcase',
  'north facing wall',
  'door in north facing wall',

   '<br>',

  '## south facing wall',
  'west facing wall',
  'door to go to tarun barandha',
  'north facing wall',
  'window in north facing wall',
  'door in north facing wall to go to tarun kitchen and wash room',
  'east facing wall',
  'door to enter naim kagu room',
  'naim kagu room',

   '<br>',

  '## east facing wall in tarun barandha',
  'south facing wall (on partision)',
  'entrance door to go to tarun bed room',
  'north facing wall',
  'east facing wall',
  'south facing wall',
  'door to go outside for pee @ night in south facing wall',
  'tarun bed',
  'west facing wall',
  'north facing wall',

   '<br>',

  '## west facing wall',
  'rack in west facing wall',
  'north facing wall',
  'door in north facing wall to go to kitchen and washroom',

   '<br>',

  '## washroom',
  'kitchen',

   '<br>',

   '## __puber _ghar door',
   'south facing wall',
   'west facing wall',
   'bed',
   'north facing wall',
   'east facing wall',
   'window on east facing wall',
   '2nd room(north) of __puber __ghar',
   'factory'

]
const banjaraHills  = [
  'gate',
  'glass door in basement',
  'stir',
  'shoe rack',

   '<br>',

  '## glass door',
  'west facing glass wall',
  'north facing wall',
  'Air Condition',
  'ramu reception table',
  'door to go inside cubical room',
  'east facing wall',
  'door in east facing room',
  'south facing door',

   '<br>',

  '## west facing wall',
  'north facing wall',
  'prudvi table',
  'east facing wall',
  'south facing wall',

   '<br>',

  '## south facing wall',
  'water filter',
  '3 cubical',
  'Ac in middle cubical',
  'west facing wall',
  'window in west facing wall',
  'north facing wall',
  'door in north facing wall to go to nikhil',
  'Nikhil cubical',
  'door north facing wall to go to jk',
  'jk cubical',
  'west facing wall',
  'door in west facing wall to go to main room',

   '<br>',

  '## east facing wall from sir room',
  'south facing wall',
  'west facing wall',
  'table of the sir',
  'north facing wall of the sir room',

   '<br>',

  '## north facing room of the main cubical room',
  'tiny west facing wall',
  'door in tiny west facing wall to go to toilet',
  'toilet',
  'north facing wall tiny',
  'door in north facing wall',
  'toilet',
  'tiny east facing wall',
  'door to go to coffer and food room',

   '<br>',

  '## west facing wall from food room',
  'north facing wall',
  'rack on top',
  'coffe machine',
  'east facing wall',
  'built in place for keeping food, oven area',
  'fridge',
  'south facing wall',

   '<br>',

  '## north facing wall from nandeep cubical',
  'nandip and others cubical',
  'east facing wall',
  'window-north in east facing wall',
  'window-south in east facing wall', 
  'south facing wall',
  'glass door to go inside cloth drying room',

   '<br>',

  '## north facing wall',
  'east facing wall',
  'window in east facing wall',
  'south facing wall',
  'ac in south facing wall',
  'west facing wall',
  'some wardrobe in middle',

   '<br>',

  '## cubical where I used to sit',
  'cubical where sasank bro used to sit',
  'sunny bro cubical'
]
const hyderabadMtww = [
  'gate',
  'door to go to down stair',
  'east facing wall',
  'south facing wall',
  'west facing wall',
  'library',
  'reception table',
  'door in west facing wall',
  'north facing wall',

   '<br>',

   '## east facing wall',
   'book stack',
   'space for work',
   'south facing wall',
   'door in south facing wall (going no where or bin dump)',
   'window in south facing wall',
   'west facing wall',
   'south facing wall tiny',
   'door in south facing wall to go to room where i get salary from sir',

   '<br>',


   '## west facing wall',
   'basin in west facing wall',
   'north facing wall tiny',
   'west facing wall',
   'door to go to sleeping room',
   'sleeping room of girl',
   'north facing wall',

   '<br>',

   '## north facing wall from sir room',
   'south facing wall',
   'window in south facing wall',
   'west facing wall',
   'table of sir',
   'toilet door in north facing wall',
   'toilet',

   '<br>',

   '## stir to go to up stair',
   'open space infront of 1st floor door + krishna chura tree',
   'door',
   'east facing wall',
   'window in east facing wall',
   'north cubical east',
   'south cubical east',
   'south cubical west',
   'north cubical west',
   'south facing wall',
   'east facing wall',
   'door in east facing wall to go to iot room',
   'water jar',
   'south facing wall',
   'door in south facing wall',
   'balcony ( usually its dirty) ',
   'window in south facing wall',
   'south cubical east (ganesh)',
   'north cubical east',
   'south cubical east (tarun)',
   'north cubical east',
   'west facing wall',
   'south facing wall',
   'door in south facing wall to go to tarun room',
   'west facing wall',
   'door in west facing wall to visit toilet',
   'toilet',
   'north facing wall',
   'west facing wall',
   'middle cubical west',
   'middle cubical east',
   'door to go to our room in west facing wall',
   'north facing wall',
   'window in north facing wall',
   'door to go outside hallway in north facing wall',
   'north hallway outside',
   'window in north facing wall',

   '<br>',

   '## east facing wall in our room',
   'a abandoned bed for storing mattress',
   'south facing wall',
   'all bed',
   'fan',
   'west facing wall',
   'rack in west facing wall',
   'north facing wall',
   'window in north facing wall',

   '<br>',

   '## west facing wall in iot room',
   'north facing wall',
   'east facing wall',
   'little window in east facing wall',
   'south facing wall',
   'almira near south facing wall',
   'west facing wall',
   'almirah near west facing wall',
   'table for iot work',

   '<br>',

   '## north facing wall in tarun room',
   'east facing wall',
   'single uncommon bed for ganesh in east facing wall',
   'south facing wall',
   'window in south facing wall',
   'west facing wall',

   '<br>',

   '## stir to go up 1st floor to 2nd floor',
   'door in 2nd floor',
   'east facing wall',
   'window in east facing wall',
   'full working space',
   'south facing wall',
   'basin',
   'water jar',
   'door to go to south hallway which the way we can visit roof',
   'south hallway',
   'window in south facing wall',
   'west facing wall',
   'tiny south facing wall',
   'door in tiny south facing wall',

   '<br>',

   '## north facing wall',
   'east facing wall',
   'south facing wall',
   'floor mate keeper in south facing wall',,
   'west facing wall',
   'window in west facing wall',
   'little almirah like things to keep facewash and others cosmetics',

   '<br>',

   '## west facing wall',
   'door in west facing wall to go to toilet',
   'toilet',
   'north facing wall',
   'south facing wall',
   'west facing wall',
   'north facing wall',
   'window in north facing wall west',
   'door in north facing wall to go to north hall way',
   'north hallway',
   'window in north facing wall west',

   '<br>',

   '## roof'
  
]
const hyderabadVillaStay = [
  'door',
  'east facing wall',
  'south facing wall',
  'west facing wall',
  'door in west facing wall',
  'sofa in west facing wall',
  'north facing wall',
  'tv in north facing wall',
  'sofa in east facing wall',

   '<br>',

  '## east facing wall',

   '<br>',

   '## north facing wall inside kitchen',
   'east facing wall',
   'window in east facing wall',
   'oven',
   'south facing wall',
   'west facing wall',

   '<br>',

   'south facing wall',
   'stair',
   'west facing wall',
   'door in west facing wall to enter chodagiri parents bedroom',
   'bed room',
   'door in west facing room to go to north room',
   'north room',
   'north facing wall',

   '<br>',

   'west facing wall in 2nd floor',
   'south facing wall',
   'door in south facing wall',

   '<br>',

   '## north facing wall',
   'east facing wall',
   'south facing wall',
   'bed',
   'fan',
   'west facing wall',
   'rack in west facing wall',
   'window',
   'north facing wall',
   'west facing wall tiny',
   'door in west facing wall to go to toilet',
   'toilet',
   'north facing wall',
   'mirror in north facing wall',

   '<br>',

   '## south facing wall',
   'door in south facing wall',
   'west room 2',
   'north facing wall',
   'east facing wall',
   'door on east facing wall to enter east north room',
   'room - east north',
   'door on east facing wall to enter east south room',
   'room - east south ( where chapabazz and his wife stayed )',




]
const hyderabadVillaWork = [
  'gate',
  'door',
  'west facing wall',
  'north facing wall tiny',
  'west facing wall',
  'north facing wall',
  'window + parda in north facing wall',
  'east facing wall',
  'south facing wall',
  'door in south facing wall to go to kitchen room',

   '<br>',

 
  '## north facing wall in kitchen room',
  'east facing wall',
  'washer in east facing wall',
  'window in east facing wall',
  'basin',
  'south facing wall',
  'door in south facing wall',
  'west facing wall',
  'rack in west facing wall',

   '<br>',

   '## east facing wall',
   'south facing wall',
   'stair to go 1st floor',
   'west facing wall',
   'door in west facing wall to go to girls bed room',
   'south facing wall',

   '<br>',

   '## upstairs  west facing wall',
   'south facing wall',
   'door in south facing wall',

   '<br>',

   '## north facing wall',
   'east facing wall',
   'south facing wall tiny',
   'door in south facing wall to go to toilet',
   'toilet',
   'east facing wall',
   'south facing wall',
   'west facing wall',
   'door in west facing wall',

   '<br>',

   '## south facing wall',
   'west facing wall',
   'door in west facing wall to view in balcony',
   'north facing wall',
   'table',
   'east facing wall',
   'bed near east facing wall',
   'west facing wall',
   'north facing wall',
   'east facing wall',
   'door in east facing wall to go to bed room',
   'bed room',










]
const fd = [
]
const bangalore = [
  
]
const ratanMama = [
  
]
export default {
  fatepurHome,
  palashpurBasudev,
  palashpurBiren,
  feniMess,
  palashHome,
  indiaMama,
  bangalore,
  hyderabadMtww,
  banjaraHills ,
  ratanMama,
  dhakaMess1,
  palashMess,
  dhakaMama,
  tarunHouse,
  hyderabadVillaStay,
  hyderabadVillaWork
}