module.exports = function (text) {
    // Ignore capitals, punctuation, word dividers
    text = text.toLowerCase();
    text = text.replace(/[ \.,-\/#“”’!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');

    var halfLength = Math.floor(text.length / 2); // floor because the middle one doesn't matter

    // Loop through text up to middle; test if every next letter is equal to its
    // counterpart from the end
    for (var i = 0; i < halfLength; i++) {
        var charFromStart = text.slice(i, i + 1);
        var charFromEnd = text.slice(text.length - 1 - i, text.length - i);

        if (charFromEnd !== charFromStart) {
            return false;
        }
    }

    return true;
}
