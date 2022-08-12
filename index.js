const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];





const titleCased = () => {
  const newTutorials = []

  for(let tutorial of tutorials) {
    const newSentence = []

    const sentenceArray = tutorial.split(' ')

    for(let word of sentenceArray) {
      const upper = word[0].toUpperCase()
      let newWord = upper + word.substring(1, word.length)
      newSentence.push(newWord)
    }

    const combinedSentence = newSentence.reduce((previousValue, currentValue) => `${previousValue} ${currentValue}`);
    
    newTutorials.push(combinedSentence)
  }
  
  return newTutorials

}
