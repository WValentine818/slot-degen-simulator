// RNG Vault v0.1.0
let balance = 1000;
let bet = 10;

const symbols = ["🍒", "🔔", "💎", "⭐", "👑"];

const payouts = {
    "🍒": 2,
    "🔔": 5,
    "💎": 10,
    "⭐": 20,
    "👑": 80
};
function getRandomSymbol() {

    const randomIndex = Math.floor(
        Math.random() * symbols.length
    );

    return symbols[randomIndex];
}

function spin() {

    if (balance < bet) {

        document.getElementById("message").textContent =
            "Not enough coins.";

        return;
    }

    balance = balance - bet;

    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    document.getElementById("reel1").textContent = symbol1;
    document.getElementById("reel2").textContent = symbol2;
    document.getElementById("reel3").textContent = symbol3;

    if (
    symbol1 === symbol2 &&
    symbol2 === symbol3
) {

    const multiplier = payouts[symbol1];

    const winnings = bet * multiplier;

    balance = balance + winnings;

    document.getElementById("message").textContent =
        "WIN! " + symbol1 + symbol1 + symbol1 +
        " pays " + multiplier + "x! +" +
        winnings + " coins";

} else {

    document.getElementById("message").textContent =
        "No win.";
}

    document.getElementById("balance").textContent = balance;
}


document
    .getElementById("spinButton")
    .addEventListener("click", spin);