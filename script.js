// DATE ET HEURE

const DATEHEURE = new Date().toLocaleString(undefined, {dateStyle : 'long', timeStyle :"short"});
document.getElementById("datetime").textContent = DATEHEURE;


// CITATION DU JOUR

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.getElementById("quoteoftheday").textContent = `"${data.slip.advice}"`;
    })
    .catch(error => {
        console.error("Erreur", error);
        document.getElementById("quoteoftheday").textContent = "Impossible de charger la citation";
    })


// BLAGUE DU JOUR

fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        document.getElementById("jokeroftheday").innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
    })
    .catch(error => {
        console.error("Erreur", error);
        document.getElementById("jokeroftheday").textContent = "Impossible de charger le joker";
    })


// EVENEMENTS HISTORIQUES

fetch('http://history.muffinlabs.com/date')
    .then(response => response.json())
    .then(data => {
        document.getElementById("event").textContent = data.onThisDay.events[0].text;
    })
    .catch(error => {
        console.error("Erreur", error);
        document.getElementById("event").textContent = "Impossible de charger l'évènement historique";
    })


// MOCKTAIL DU JOUR 

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(response => response.json())
    .then(date => {
        document.getElementById("mocktail").textContent = date.drinks[0].strDrink;
    })
    .catch(error => {
        console.error("Erreur", error);
        document.getElementById("mocktail").textContent = "Impossible de charger le mocktail";
    })


//RECETTE DU JOUR

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(date => {
        document.getElementById("recette").textContent = date.meals[0].strMeal;
    })
    .catch(error => {
        console.error("Erreur", error);
        document.getElementById("recette").textContent = "Impossible de charger la recette";
    })

