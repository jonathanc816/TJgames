export function generateSecretWord() {
    let words = ['apple'];
    return words[Math.floor(Math.random()*words.length)];
}

export function guessingSecretWord(numOfTriesRemaining, secretWord) {
    if (numOfTriesRemaining == 0) {
        alert('You have used all your tries to guess a secret word.')
        return 0
    }
    numOfTriesRemaining--;
    return numOfTriesRemaining;

}