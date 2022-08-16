function prepend(numSpaces, inputString) {
    var spaces = "";
    for (var x = 0; x < numSpaces; x++) {
        spaces += "&nbsp;";
    }
    return spaces + inputString;
}
console.log(prepend(3, "Hello"));
