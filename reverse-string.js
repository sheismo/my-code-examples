// How to reverse a string in JS
// Strings can be converted to arrays. 
// Arrays can be reversed, and they can be transformed into a string again.

const reverseString = (str) => {
    if (!str || str.length < 2) {
        return str
    }

    return str
        .split('')
        .reverse()
        .join('');
}