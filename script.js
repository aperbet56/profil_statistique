// Récupération des éléments
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  // counter de départ à zéro
  counter.textContent = "0";
  // Appel de la fonction incrementCounter
  incrementCounter();

  // Déclaration de la fonction incrementCounter
  function incrementCounter() {
    let currentNumber = +counter.innerText;
    const dataCeil = counter.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    //La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.
    currentNumber = Math.ceil(currentNumber + increment);

    if (currentNumber < dataCeil) {
      counter.textContent = currentNumber;
      //La méthode globale setTimeout() permet de définir un minuteur (en millisecondes) qui exécute une fonction ou un code donné après la fin du délai indiqué.
      setTimeout(incrementCounter, "50");
    } else {
      counter.textContent = dataCeil;
    }
  }
});
