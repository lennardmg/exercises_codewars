// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
    return b.toString();
}

// Alternative solutions:
const booleanToString = (b) => (b ? "true" : "false");

// or:

function booleanToString(b) {
    return `${b}`;
}

// A Needle in the Haystack
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle
function findNeedle(haystack) {
    if (haystack.includes("needle")) {
        return "found the needle at position " + haystack.indexOf("needle");
    }
}

// Alternative solutions:
function findNeedle(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "needle") return "found the needle at position " + i;
    }
}

// or:

function findNeedle(haystack = []) {
    return haystack.indexOf("needle") !== -1
        ? `found the needle at position ${haystack.indexOf("needle")}`
        : "needle not found";
}



// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  
    let gradeAvarage = (s1+s2+s3) / 3
    
    if (gradeAvarage >= 90) {
        return "A"
        }
    else if (gradeAvarage >= 80) {
        return "B"
        }
    else if (gradeAvarage >= 70) {
        return "C"
        }
    else if (gradeAvarage >= 60) {
        return "D"
        }
    else if (gradeAvarage < 60) {
        return "F"
        }
  }

  // Alternative solutions:

  function getGrade (s1, s2, s3) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    return average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "F"
  }

  // or:

  var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);

