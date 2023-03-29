// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    let lowerCaseStr = str.toLowerCase();
    
    for (let i = 0; lowerCaseStr.length > i; i++) {
      if (lowerCaseStr.indexOf(str[i]) !== lowerCaseStr.lastIndexOf(str[i])) {
        return false
      } 
    } 
    return true
}

// Alternative solutions:

function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}

// OR:

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}