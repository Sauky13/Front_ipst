function longestWord(str: string): string {
  let splitted = str.split(" ");

  let longest = "";

  for (const word of splitted) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("A Computer Science portal for geeks"));
