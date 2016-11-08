/*
    TIPS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
    http://www.regexr.com/
*/
'use strict';
module.exports = function vowelConsonantCount(word){
  //Your code here

  let v = 0;
  let c = 0;

// if ( word && word !== '' && isNaN(word) ){ // ou word !== null
//   for (let i in word){
//       if (word[i].toLowerCase() == 'a' ||word[i].toLowerCase() == 'e' ||
//     word[i].toLowerCase() == 'i' || word[i].toLowerCase() == 'o' ||
//   word[i].toLowerCase() == 'u' || word[i].toLowerCase() == 'y')
//           v+=1
//       else {
//           c+=1
//       }}
//     }
// return {v:v, c:c}


// RegEx

// if ( word && word !== '' && isNaN(word) ){
//     v = word.toLowerCase().match(/[aeiouy]/g).length;
//     c = word.length - v;
// }
// return {v:v, c:c}


// RegEx en ternaire

return (word && word !== '' && isNaN(word) ?
  {v : word.toLowerCase().match(/[aeiouy]/g).length,
  c : word.toLowerCase().match(/[^aeiouy]/g).length} :
  {v : 0 , c : 0} )

}
