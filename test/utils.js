export function correctAnswer(word) {
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y'){
        return true;
    } else {
        return false;
    }
}