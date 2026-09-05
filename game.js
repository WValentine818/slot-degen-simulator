// Slot Degen Simulator v0.2.0-dev
let balance = 1000;
let bet = 10;

let totalSpins = 0;
let totalWagered = 0;
let totalWon = 0;
let totalWins = 0;
let biggestWin = 0;

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

    totalSpins = totalSpins + 1;
    totalWagered = totalWagered + bet;

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

    totalWon = totalWon + winnings;
    totalWins = totalWins + 1;

    if (winnings > biggestWin) {
        biggestWin = winnings;
    }

    document.getElementById("message").textContent =
        "WIN! " + symbol1 + symbol1 + symbol1 +
        " pays " + multiplier + "x! +" +
        winnings + " coins";

} else {

    document.getElementById("message").textContent =
        "No win.";
}

    document.getElementById("balance").textContent = balance;

    updateStats();
}

function resetCoins() {

    balance = 1000;

    document.getElementById("balance").textContent =
        balance;

    document.getElementById("message").textContent =
        "Test coins restored to 1000.";
}

function updateStats() {

    let hitRate = 0;
    let observedRtp = 0;

    if (totalSpins > 0) {
        hitRate = (totalWins / totalSpins) * 100;
    }

    if (totalWagered > 0) {
        observedRtp = (totalWon / totalWagered) * 100;
    }

    document.getElementById("totalSpins").textContent =
        totalSpins;

    document.getElementById("totalWagered").textContent =
        totalWagered;

    document.getElementById("totalWon").textContent =
        totalWon;

    document.getElementById("totalWins").textContent =
        totalWins;

    document.getElementById("hitRate").textContent =
        hitRate.toFixed(2) + "%";

    document.getElementById("observedRtp").textContent =
        observedRtp.toFixed(2) + "%";

    document.getElementById("biggestWin").textContent =
        biggestWin;
}

    document
        .getElementById("spinButton")
        .addEventListener("click", spin);
    
    document
        .getElementById("resetButton")
        .addEventListener("click", resetCoins);