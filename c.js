let n1 = parseInt(prompt("Entrez le premier nombre de votre soustraction:"));
  let n2 = parseInt(prompt("Entrez le deuxieme nombre :"));
  
  function sous(n1, n2) {
    let result = n1 - n2;
    return result;
  }
  
  let sousResult = sous(n1, n2);
  alert("Le resultat est : " + sousResult);