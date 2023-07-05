# Portfolio Words Generator
Project for the Codecademy Full-stack Development Program


# Overview
The purpose of this project is to create a responsive website that generates random sci-fi movie names. The generated names will reveal only a portion of the full name, challenging players to guess the complete movie title.


# Logic
The randomization will be accomplished using the default JavaScript `Math.random` library. The hidden portion of the movie name will be generated randomly for each new request using the string library.

The amount of hidden words will be determined based on the length of the movie name. For instance:
- If the movie name has 1 word, the generator will display the first and last characters.
- If the movie name has 2 words, 1 word will be hidden.
- If the movie name has more than 3 words, a variable X will determine the number of words to hide, calculated as follows:
     X = Math.floor((length * 1.1) - 2)


# Technology
- HTML
- CSS
- JavaScript