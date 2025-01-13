function runLengthEncoding(input: string): string {
  let result = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += input[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

function runLengthDecoding(encoded: string): string {
  let result = "";
  let i = 0;

  while (i < encoded.length) {
    let char = encoded[i];
    i++;

    let count = "";
    while (i < encoded.length && !isNaN(Number(encoded[i]))) {
      count += encoded[i];
      i++;
    }

    result += char.repeat(Number(count));
  }

  return result;
}

const originalString = "HHELLOOO";

const encodedString = runLengthEncoding(originalString);
console.log(`Кодирование: ${encodedString}`);

const decodedString = runLengthDecoding(encodedString);
console.log(`Декодирование: ${decodedString}`);
