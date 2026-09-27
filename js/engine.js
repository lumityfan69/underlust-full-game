function initGame() {
    const zone = GameMaps[currentZone];
    document.getElementById("zone-title").innerText = zone.name;
    document.getElementById("zone-title").style.color = zone.color;
    document.getElementById("game-window").style.borderColor = zone.color;
    document.getElementById("text-box").innerText = zone.dialogue;
}

function pressButton(action) {
    let textBox = document.getElementById("text-box");
    if (action === "ACT") {
        textBox.innerText = "* You step back and request a safe boundary. The monster listens.";
    } else if (action === "MERCY") {
        textBox.innerText = "* You chose SPARE. The battle ends peacefully.";
        advanceStory();
    } else {
        textBox.innerText = `* You selected ${action}. (System template online)`;
    }
}

function advanceStory() {
    if (currentZone === "ruins_start") {
        currentZone = "snowdin";
    } else if (currentZone === "snowdin") {
        currentZone = "hall";
    } else {
        currentZone = "ruins_start"; // Loop back to start
    }
    initGame();
}

// Start the engine when page loads
window.onload = initGame;
