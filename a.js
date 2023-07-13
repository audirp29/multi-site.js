let n1 = parseInt(prompt("Entrez le premier nombre de votre addition:"));
  let n2 = parseInt(prompt("Entrez le deuxieme nombre :"));
  
  function add(n1, n2) {
    let result = n1 + n2;
    return result;
  }
  
  let addResult = add(n1, n2);
  alert("Le resultat est : " + addResult);