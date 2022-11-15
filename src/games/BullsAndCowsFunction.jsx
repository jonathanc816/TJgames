export function getHint(secret, guess) {
    let cows = 0;
    let bulls = 0;
    const occurrences = Array(10).fill(0);

    for (let i = 0; i < secret.length; i++) {
        const guessNumber = parseInt(guess[i]);
        const secretNumber = parseInt(secret[i]);
        
        if (secretNumber === guessNumber) {
            bulls++;
            continue
        }

        if(occurrences[secretNumber] < 0) {
            cows++;
        }
        
        if(occurrences[guessNumber] > 0) {
            cows++;
        }
        
        occurrences[secretNumber]++;
        occurrences[guessNumber]--;
    }

    if (bulls == 4) {
        alert('Congrats!!!')
        return `${bulls}A${cows}B`;
    }
    alert(`Guess Again: ${bulls}A${cows}B`);
    return `${bulls}A${cows}B`;
}

export function generateSecret(numDigit) {
    let digits = Math.pow(10, numDigit - 1) * 9;
    let res = (Math.floor(digits/10 + Math.random() * digits)).toString();
    console.log(res);
    return res;
}