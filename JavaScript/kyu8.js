// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
    return b.toString();
}

// Alternative solutions:
const booleanToString = (b) => (b ? "true" : "false");

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

function findNeedle(haystack = []) {
    return haystack.indexOf("needle") !== -1
        ? `found the needle at position ${haystack.indexOf("needle")}`
        : "needle not found";
}
