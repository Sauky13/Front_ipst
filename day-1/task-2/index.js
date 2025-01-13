function longestWord(str) {
    var splitted = str.split(" ");
    var longest = "";
    for (var _i = 0, splitted_1 = splitted; _i < splitted_1.length; _i++) {
        var word = splitted_1[_i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("A Computer Science portal for geeks"));
