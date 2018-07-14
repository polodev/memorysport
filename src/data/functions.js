/**
=================================
=================================

Pure function collections

=================================
=================================
 */



/**
 *
 * @param {*} arr (domincPAO)
 * @param {*} number (any number 00 to 99)
 */
const _gettingObjectByNumber = (arr, number) => arr.find(item => item.number == number)
/**
 *
 * @param {*} arr (domincPAO)
 * @param {*} person (person name stated in dominicPAO)
 */
const _gettingObjectByPerson = (arr, person) => arr.find(item => item.person == person)

/**
 *
 * @param {*} arr
 */
const _shuffleArray = arr => arr.concat().sort(() => Math.random() - 0.5);
/**
 * it will generate 00 to 100
 */
const _generateNatural100 = () => {
  let natural = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      natural.push(
        `${i}${j}`
      )
    }
  }
  return natural;
}
/**
 * it will generate 00 to 100 with 10 gap
 */
const _generateTenNatural100 = () => {
  let tenNatural = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      tenNatural.push(
        `${j}${i}`
      )
    }
  }
  return tenNatural;
}


/**
 * it will chunk array
 */

const _chunkArray = (myArray, chunk_size = 10) => {
  var arr = myArray.concat([]);
  var results = [];
  while(arr.length) {
    results.push(arr.splice(0, chunk_size))
  }
  return results;
}

/**
 *
 * @param {Number} min
 * @param {Number} max
 * return value will always less than max value
 */
const  _getRandomNumber = (min = 0, max = 20)  => Math.floor( Math.random() * (max - min) + min)

/**
 * generating shape for title, nook, village title
 * @param  {[array]} shapes [shape array which describe inside data/shapeArr.js file]
 * @param  {[integer]} number [expected 0 to 9 any digit]
 * @return {[string]}        [mnemonic]
 */
const _generating_shape = (shapes, number) => {
  const object = shapes.find(item => item.number == number)
  return object.mnemonic;
}

/**
 * generating rhyme for title, nook, village title
 * @param  {[array]} rhymes [rhymes array which describe inside data/rhymeArr.js file]
 * @param  {[integer]} number [expected 0 to 9 any digit]
 * @return {[string]}        [mnemonic]
 */
const _generating_rhyme = (rhymes, number) => {
  number = number == '0' ? 10 : number
  const object = rhymes.find(item => item.number == number)
  return object.mnemonic;
}
/**
 * _generating_dominic
 * @param  {[array]} dominicPAO [mnemonic array describe in data folder]
 * @param  {[array]} shapes     [shape array which describe inside data/shapeArr.js file]
 * @param  {[array]} rhymes     [rhyme array which describe inside data/rhymeArr.js file]
 * @param  {[integer]} number     [expected 0 to 9]
 * @return {[string]}            [full generated mnemonics for dominic ]
 */
const _generating_dominic = (dominicPAO, shapes, rhymes, number) => {
  var stringNumber = number.toString();
  var shape, rhyme, person, personText, personNumber, shapeNumber, actionNumber, action, actionText
  switch (stringNumber.length) {
    case 1:
      shape = _generating_shape(shapes, number);
      rhyme = _generating_rhyme(rhymes, number);
      return `${number} --- ${shape} : ${rhyme}`;
      break;
    case 2:
      person = _gettingObjectByNumber(dominicPAO, stringNumber);
      personText = person.person;
      return `${number} --- ${personText}`;
      break;
    case 3:
      personNumber = stringNumber.substr(0, 2);
      shapeNumber = stringNumber.substr(2, 3);
      person = _gettingObjectByNumber(dominicPAO, personNumber);
      personText = person.person;
      shape = _generating_shape(shapes, shapeNumber);
      rhyme = _generating_rhyme(rhymes, shapeNumber);
      return `${number} --- ${personText}, --- ${shape} : ${rhyme}`;
      break;
    case 4:
      personNumber = stringNumber.substr(0, 2);
      actionNumber = stringNumber.substr(2, 4);
      person = _gettingObjectByNumber(dominicPAO, personNumber);
      action = _gettingObjectByNumber(dominicPAO, actionNumber);
      personText = person.person;
      actionText = action.fullAction;
      return `${number} --- ${personText} --- ${actionText}`;
      break;
    default:
      return 'not found'
  }
}


export default {
  _gettingObjectByNumber,
  _gettingObjectByPerson,
  _shuffleArray,
  _generateNatural100,
  _chunkArray,
  _generateTenNatural100,
  _getRandomNumber,
  _generating_shape,
  _generating_rhyme,
  _generating_dominic,
}