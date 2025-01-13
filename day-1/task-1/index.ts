function identicalLetters(str1: string, str2: string) {

  console.log(str1, str2 );
 
   const set1 = new Set(str1);
   const set2 = new Set(str2);
 
   const commonLetters = [...set1].filter(function (letter) {
     return set2.has(letter);
   });
 
   return commonLetters.join("");
 }
 
 console.log(identicalLetters("Варенье", "Венок"));
