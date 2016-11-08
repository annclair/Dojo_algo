function count(jeu){

  // déclaration des variables pour le nombre de points

  let count1 = 0;
  let count2 = 0;

  // déclaration des résultats possibles dans un array

  tableauRef = [0, 15, 30, 40];

    for (i=0; i < jeu.length; i++){
      if (jeu[i] === '1') {
          count1++;}

      else if (jeu[i] === '2')
          {count2++;}
    }

    return [tableauRef[count1] , tableauRef[count2]];
}

console.log( count('1'))

console.log (count('11'))

console.log (count('112'))

console.log (count('1122'))

console.log (count('21221'))
