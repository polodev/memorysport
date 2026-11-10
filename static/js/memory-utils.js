/**
 * Memory Sport Utility Functions (Pure JS - Browser & Alpine.js ready)
 */
window.MemoryUtils = {
  gettingObjectByNumber(arr, number) {
    const numStr = number.toString().padStart(2, '0');
    return arr.find(item => item.number === numStr || item.number == number) || null;
  },

  gettingObjectByPerson(arr, person) {
    if (!person) return null;
    return arr.find(item => item.person && item.person.toLowerCase() === person.toLowerCase()) || null;
  },

  shuffleArray(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
  },

  generateNatural100() {
    const natural = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        natural.push(`${i}${j}`);
      }
    }
    return natural;
  },

  generateTenNatural100() {
    const tenNatural = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        tenNatural.push(`${j}${i}`);
      }
    }
    return tenNatural;
  },

  chunkArray(myArray, chunkSize = 10) {
    const arr = myArray.slice();
    const results = [];
    while (arr.length) {
      results.push(arr.splice(0, chunkSize));
    }
    return results;
  },

  getRandomNumber(min = 0, max = 20) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  generatingShape(shapes, number) {
    const num = parseInt(number, 10);
    const obj = shapes.find(item => item.number === num);
    return obj ? obj.mnemonic : '';
  },

  generatingRhyme(rhymes, number) {
    let num = parseInt(number, 10);
    num = num === 0 ? 10 : num;
    const obj = rhymes.find(item => item.number === num);
    return obj ? obj.mnemonic : '';
  },

  generatingDominic(dominicPAO, shapes, rhymes, number) {
    const stringNumber = number.toString();
    switch (stringNumber.length) {
      case 1: {
        const shape = this.generatingShape(shapes, number);
        const rhyme = this.generatingRhyme(rhymes, number);
        return `${number} --- ${shape} : ${rhyme}`;
      }
      case 2: {
        const personObj = this.gettingObjectByNumber(dominicPAO, stringNumber);
        const personText = personObj ? personObj.person : 'unknown';
        return `${number} --- ${personText}`;
      }
      case 3: {
        const personNumber = stringNumber.substr(0, 2);
        const shapeNumber = stringNumber.substr(2, 3);
        const personObj = this.gettingObjectByNumber(dominicPAO, personNumber);
        const personText = personObj ? personObj.person : 'unknown';
        const shape = this.generatingShape(shapes, shapeNumber);
        const rhyme = this.generatingRhyme(rhymes, shapeNumber);
        return `${number} --- ${personText}, --- ${shape} : ${rhyme}`;
      }
      case 4: {
        const personNumber = stringNumber.substr(0, 2);
        const actionNumber = stringNumber.substr(2, 4);
        const personObj = this.gettingObjectByNumber(dominicPAO, personNumber);
        const actionObj = this.gettingObjectByNumber(dominicPAO, actionNumber);
        const personText = personObj ? personObj.person : 'unknown';
        const actionText = actionObj ? actionObj.fullAction : 'unknown';
        return `${number} --- ${personText} --- ${actionText}`;
      }
      default:
        return 'not found';
    }
  }
};
