document.getElementById("getJoke").addEventListener("click",async function() {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent ="loading...";
    try{
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        jokeElement.textContent = data.value;
    }catch(error){
        jokeElement.textContent ="failed to fetch joke try again!";
    }
})
