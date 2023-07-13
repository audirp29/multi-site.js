/*
NO VARIABLE to 1 set de chiffres
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let Result = (getRandomInt(12));
  alert("Le mdp est : " + Result);*/






  /*
  AVEC VARIABLES to 1 set de chiffres
  let n1 = parseInt(prompt("Entrez la longueur de votre nombre random:"));
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let Result = (getRandomInt(n1));
  alert("Le mdp est : " + Result);*/

  
  alert("Generateur de mdp (si il commence par un chiffre prendre le prochain)");
  const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= Math.random().toString(36).substring(num);       

    return result1;
}

let Result = (generateRandomString(2));
Result = Result.charAt(0).toUpperCase() + Result.slice(1).toLowerCase();
  alert("Le mdp est : " + Result);