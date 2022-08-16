function prepend(numSpaces: number, inputString: string) {
  let spaces: string = "";
  for(let x=0; x<numSpaces;x++){
  spaces +=  "&nbsp;";
  }
  return spaces + inputString;
}

console.log(prepend(3, "Hello"));
