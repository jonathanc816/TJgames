export function generateSecretWord() {
    let words = ['APPLE'];
    return words[Math.floor(Math.random()*words.length)];
}

export function guessingSecretWord(numOfTriesRemaining, secretWord, guessingWord) {

    const results = Array(secretWord.length).fill(0);
    const occurrences = Array(26).fill(0);
    let count = 0;
    for (let i = 0; i < secretWord.length; i++) {
        const guessCharacter = guessingWord[i];
        const secretCharater = secretWord[i];
        
        if (secretCharater === guessCharacter) {
            results[i] = 1;
            count++;
        } else {
            occurrences[secretCharater.charCodeAt(0)-97]++;
        }
    }

    for (let i = 0; i < guessingWord.length; i++) {
        const guessCharacter = guessingWord[i];
        if (results[i] == 0 && occurrences[guessCharacter.charCodeAt(0)-97]) { 
            occurrences[guessCharacter.charCodeAt(0)-97]--;
            results[i] = 2;
        }
    }
    console.log(results);
    
    if (count == secretWord.length) {
        alert("you guessed the secret word!");
        for (let i = 0; i < numOfTriesRemaining; i++) {
            document.getElementById(`guess${i}`).disabled = true;
        }
    }

    let answer = ""
    for (let i = 0; i < results.length; i++) {
        if (results[i] == 0) {
            answer = answer.concat("W");
        } else if (results[i] == 1) {
            answer = answer.concat("C");
        } else {
            answer = answer.concat("P");
        }
    }
    numOfTriesRemaining--;
    if (numOfTriesRemaining == 0) {
        alert('You have used all your tries to guess a secret word.')
        return 0;
    }
    
    // Display hint if guess is wrong
    if (answer != "WWWWW"){
        alert(answer);
    }
    return numOfTriesRemaining;

}