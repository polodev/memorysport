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


  export default {
    _gettingObjectByNumber,
    _gettingObjectByPerson,
    _shuffleArray,
    _generateNatural100,
    _chunkArray,
    _generateTenNatural100,
    _getRandomNumber,
  }