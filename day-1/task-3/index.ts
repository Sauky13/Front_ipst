function indexOf(mainStr: string, subStr: string): number {
  if (subStr === "") {
    return 0;
  }

  const mainStrLength = mainStr.length;
  const subStrLength = subStr.length;

  for (let i = 0; i <= mainStrLength - subStrLength; i++) {
    let match = true;
    for (let j = 0; j < subStrLength; j++) {
      if (mainStr[i + j] !== subStr[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf("синий иней", "иней"));
console.log(indexOf("синий иней", "синий"));
console.log(indexOf("синий иней", "красный"));
