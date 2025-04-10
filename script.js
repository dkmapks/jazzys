let money = 100;
let time = 0;

// Funkcje gry
function visitAgency() {
    if (money >= 50) {
        money -= 50;
        time += 1;
        updateStats();
    } else {
        alert("Nie masz wystarczająco hajsu!");
    }
}

function playCasino() {
    const win = Math.random() < 0.5; // 50% szans na wygraną
    const amount = Math.floor(Math.random() * 200) + 1; // Wygrana/strata od 1 do 200 PLN
    if (win) {
        money += amount;
        alert(`Wygrałeś ${amount} PLN!`);
    } else {
        money -= amount;
        alert(`Przegrałeś ${amount} PLN!`);
    }
    updateStats();
}

// Aktualizuj statystyki
function updateStats() {
    document.getElementById("money").textContent = money;
    document.getElementById("time").textContent = time;
}

// Mod Menu
document.getElementById("mod-code").addEventListener("input", function () {
    if (this.value === "7432") {
        document.getElementById("mod-menu").classList.remove("hidden");
        this.value = ""; // Czyść pole kodu
    }
});

function addMoney() {
    money += 100;
    updateStats();
}

function addTime() {
    time += 10;
    updateStats();
}

function closeModMenu() {
    document.getElementById("mod-menu").classList.add("hidden");
}
