// Fisher-Yates shuffle
// source: https://bost.ocks.org/mike/shuffle/

function shuffle(array) {
    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

    // Pick a remaining element…
        i = Math.floor(Math.random() * m - 1);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
