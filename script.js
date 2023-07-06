const movie = ['2067', 'Jiu Jitsu', 'Love and Monsters', 'The Midnight Sky', 'Skylines', 'Tenet'];


// Calculate the number of hidden words based on the movie name length
function calNumHiddenWord(movieName) {
    return Math.max(Math.floor(movieName.length * 1.1 - 2), 0);
}

function ranIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random word from the movie array
function generateMovie(movieArray) {
    let movieName = ranIndex(movieArray);
    let tempName = movieName.split(' ');
    let replaceStr;

    // hide middle part of the name if the name only have 1 word
    if (!Array.isArray(tempName)) {
        replaceStr = tempName.slice(1, tempName.length - 1);
        movieName = movieName.replace(replaceStr, '_ '.repeat(replaceStr.length));
    } else {
        // hide X words of the name if the name have more than 1 word
        const tempNameLength = tempName.length;
        const numHiddenWord = calNumHiddenWord(tempName);
        let ranPosition = Math.round(Math.random() * tempNameLength);
        let ranHistory = [];
        let replaceStrLenght;

        for (let i = 0; i <= numHiddenWord; i++) {
            for (i = 0; i <= ranHistory.length; i++) {
                if (ranPosition === ranHistory[i]) {
                    ranPosition = Math.round(Math.random() * tempNameLength);
                }
            }

            replaceStr = tempName[ranPosition];
            replaceStrLength = replaceStr.length;
            movieName = movieName.replace(replaceStr, '_ '.repeat(replaceStr.length));
            ranHistory.push(ranPosition);
        }
    }

    return movieName;
}


console.log(generateMovie(movieArray));
// Event listener for the "Generate" button
document.getElementById('generateButton').addEventListener('click', generateMovie(movieArray));
