const text = 'My viewers on Twitch are the best!';

let index = 0;

function writeText() {
    document.body.innerHTML = text.slice(0, index);
    // The slice() method returns selected elements in an array, as a new array.
    // The slice() method selects from a given start, up to a (not inclusive) given end.
    // The slice() method does not change the original array.

    index++;

    if (index > text.length) {
        index = 0
    }
}

setInterval(writeText, 100);