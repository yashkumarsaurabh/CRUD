let str = "abcabcbb";

let chart = new Array(26).fill(false);

let i=0;
let j=0;
let len = 0;

while(j<str.length && i<str.length) {

  if(!chart[str[j].charCodeAt()-97]){
    chart[str[j].charCodeAt()-97] = true;
  } else {

    while(str[i]!==str[j] && i<=j){
      chart[str[i].charCodeAt()-97] = false;
      i++;
    }
    i++;
  }

  if(j-i+1>len) {
      len = j-i+1;
    }
  j++
}

console.log(len); //3
