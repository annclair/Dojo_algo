'use strict';
module.exports = function count(game) {
    //Your code here

    let count = [0, 0]
    let tableauRef = [0, 15, 30, 40];

    for (let i in game) { ( game[i]==='1' ? count[0]++ : count[1]++)}

    return  [tableauRef[count[0]], tableauRef[count[1]]]
}

// déclaration des variables pour le nombre de points

// let count1 = 0;
// let count2 = 0;

// déclaration des résultats possibles dans un array

// let tableauRef = [0, 15, 30, 40];


// for (let i = 0; i < game.length; i++) {
//     if (game[i] === '1') {
//         count1++;
//     } else if (game[i] === '2') {
//         count2++;
//     }
// }

//return [tableauRef[count1], tableauRef[count2]];
