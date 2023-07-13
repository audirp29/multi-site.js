let n1 = parseInt(prompt("Entrez le premier nombre de votre multiplication:"));
  let n2 = parseInt(prompt("Entrez le deuxieme nombre :"));
  
  function mult(n1, n2) {
    let result = n1 * n2;
    return result;
  }
  
  let multResult = mult(n1, n2);
  alert("Le resultat est : " + multResult);