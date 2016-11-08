module.exports = function scramble(word) {
    'use strict'
    //YOUR CODE HERE
    let newWord = word[0];
    let extract = word.substr(1, word.length - 2)


    //  si on a un mot à quatre lettre on inverse les 2 du milieu
    //    sinon, on les met dans l'ordre inverse alphabetique

    // if (extract.length == 2){
    //   newWord += extract.split('').reverse().join('')
    // } else {
    //   newWord += extract.split('').sort().reverse().join('')
    // }
    //
    // newWord += word[word.length - 1];



        //  entre la première et la dernière lettre, on décale
        //    les lettre d'une position vers la gauche

    for (let i = 0; i < extract.length - 1; i++) {
        newWord += extract[i + 1]
    }
    newWord += extract[0]



    newWord += word[word.length - 1];

    return newWord

}
