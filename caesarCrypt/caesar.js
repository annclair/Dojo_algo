'use strict';

var Caesar = function(){
}

Caesar.prototype.encrypt = function(word){
    let hash = '';


// SOLUTION 1 - version longue

    // let min = 'abcdefghijklmnopqrstuvwxyz';
    // let maj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //
    // for (let i in word) {
    //     if (min.indexOf(word[i]) !== -1)
    //         if (min.indexOf(word[i]) >= 23)
    //             hash += min[min.indexOf(word[i]) - 23]
    //         else
    //             hash += min[min.indexOf(word[i]) + 3];
    //     else
    //         if (maj.indexOf(word[i]) >= 23)
    //             hash += maj[maj.indexOf(word[i]) - 23]
    //         else
    //             hash += maj[maj.indexOf(word[i]) + 3];
    // }

// SOLUTION 1 - en IIIre

    // let min = 'abcdefghijklmnopqrstuvwxyz' ;
    // let maj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    //
    // for (let i in word){
    //     hash += (min.indexOf(word[i])!== -1 ? (min.indexOf(word[i])>22 ? min[min.indexOf(word[i])-23] : min[min.indexOf(word[i])+3]) : (maj.indexOf(word[i])>22 ? maj[maj.indexOf(word[i])-23] : maj[maj.indexOf(word[i])+3]))
    // }


// AVEC ASCII

for (let i in word) {
let ascii = word[i].charCodeAt()

  if (ascii >= 88 && ascii <= 90 || ascii >= 120)
    hash += String.fromCharCode(ascii - 23)
   else
    hash += String.fromCharCode(ascii + 3)
  }

    return hash;
}


Caesar.prototype.decrypt = function(hash){
    let word = '';

    let min = 'abcdefghijklmnopqrstuvwxyz' ;
    let maj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;

    for (let i in hash){
            if (min.indexOf(hash[i])!== -1)
                if (min.indexOf(hash[i])<3)
                    word += min[min.indexOf(hash[i])+23]
                else
                    word += min[min.indexOf(hash[i])-3];
            else
                if (maj.indexOf(hash[i])<3)
                    word += maj[maj.indexOf(hash[i])+23]
                else
                    word += maj[maj.indexOf(hash[i])-3];
    }
        return word;

}

module.exports = new Caesar();
