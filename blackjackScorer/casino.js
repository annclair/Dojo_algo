'use strict';

module.exports = function casino(cards) {
        // Your code here =)

        let pt = [0,0];

    for (let i in cards){
        for (let j in cards[i].sort().reverse() ) {
            pt[i] += (cards[i][j] == 'R' || cards[i][j] == 'D' || cards[i][j] == 'V' ? 10 : (cards[i][j] == 'A' ? ( cards[i][j]=='A' && pt[i]<11 ? 11 : 1) : Number(cards[i][j])))
        }
    }

    // ON REGARDE QUI A GAGNÉ, EN VERSION TERNAIRE

    return ((pt[0] > pt[1] && pt[0] < 22 || pt[1] > 22) ? 'J' : "C")


}

// Calcul du nombre de points

// for (let j in cards[0]) {
//     if (cards[0][j] == 'R' || cards[0][j] == 'D' || cards[0][j] == 'V')
//         pt[0] += 10;
//     else if (cards[0][j] == 'A')
//         pt[0] += 1;
//     else
//         pt[0] += Number(cards[0][j]);
// }
//
// for (let j in cards[1]) {
//     if (cards[1][j] == 'R' || cards[1][j] == 'D' || cards[1][j] == 'V')
//         pt[1] += 10;
//     else if (cards[1][j] == 'A')
//         pt[1] +=1;
//     else
//         pt[1] += Number(cards[1][j]);
// }

//Première solution
// for (let i in cards){
// for (let j in cards[i]) {
//     if (cards[i][j] == 'R' || cards[i][j] == 'D' || cards[i][j] == 'V')
//         pt[i] += 10;
//     else if (cards[i][j] == 'A')
//         pt[i] += 1;
//     else
//         pt[i] += Number(cards[i][j]);
// }
// }

// SI ON A UN AS ON TESTE SI LA VALEUR VA ETRE 1 OU 11
// for (let i in cards) {
//     for (let j in cards[i]){
//         pt[i] += ( cards[i][j]=='A' && pt[i]<=11 ? 10 : 0)
//     }
// }
