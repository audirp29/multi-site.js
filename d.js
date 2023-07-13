let n1 = parseInt(prompt("Entrez le premier nombre de votre division:"));
  let n2 = parseInt(prompt("Entrez le deuxieme nombre :"));
  
  function div(n1, n2) {
    let result = n1 / n2;
    return result;
  }
  
  let divResult = div(n1, n2);
  alert("Le resultat est : " + divResult);