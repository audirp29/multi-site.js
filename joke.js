let lang = prompt("Entrez les 2 lettre de votres pays(de, en, es, fr):");


async function displayRandomJoke() {
    try {
      //const apiUrl = 'https://v2.jokeapi.dev/joke/Any?lang=fr'; 
      const apiUrl = `https://v2.jokeapi.dev/joke/Any?lang=${lang}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.error) {
        console.log(`Erreur : ${data.error}`);
      } else {
        const joke = data.type === 'single' ? data.joke : `${data.setup} ${data.delivery}`;
        alert(`la barre: : ${joke}`);
      }
    } catch (error) {
      console.log(`Erreur : ${error}`);
    }
  }
  
  displayRandomJoke();
  