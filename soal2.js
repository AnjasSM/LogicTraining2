countChar = (word, letter) => {
    let output = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == letter) {
            output += 1
        }
    }
    return output
}

console.log(countChar('bootcamp', 'o'))