function identicalLetters(str1: string, str2: string): string {

  const commonLetters = str1.split('').filter(function (char) {
      return str2.includes(char);
  });


  return commonLetters.join('');
}

console.log(identicalLetters("asdffg", "asdqffwe"));