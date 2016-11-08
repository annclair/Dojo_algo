'use strict';
let Hamming = {

    compare(sequence1, sequence2) {
        //Your code here
        let Result = 0;

        if (sequence1.length !== sequence2.length) {
            Result = -1;
        } else {
            for (let i in sequence1) {
                Result += (sequence1[i] !== sequence2[i] ? 1 : 0)
                }
            }

        return Result;
    }

}

module.exports = Hamming;

// let Result = 0;
//
// if (sequence1.length !== sequence2.length) {
//     Result = -1;
// } else {
//     for (let i = 0; i < sequence1.length; i++) {
//         if (sequence1[i] !== sequence2[i]) {
//             Result += 1;
//         }
//     }
// }
// return Result;
