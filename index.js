const quoteText = document.getElementById("quote");
const btn = document.getElementById("btn");

async function getQuote() {
   quoteText.style.opacity = 0;

    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();

        setTimeout(() => {
            quoteText.style.opacity = 1;
            quoteText.textContent = `"${data.quote}"`;
            
        }, 300);
    } catch (err) {
        console.error("failed to fetch the api", err);
        quoteText.textContent = "Could not fetch quote";
        quoteText.style.opacity = 1;
    }
    
}

btn.addEventListener("click", getQuote);

