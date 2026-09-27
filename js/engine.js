// Setup player object tracking coordinates and movement speed
let player = {
    x: 50,
    y: 200,
    size: 15,
    speed: 4,
    color: "#ff66cc" // Pink soul trait
};

let keys = {};
let canvas, ctx;

function initGame() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    
    // Listen to keyboard press events
    window.addEventListener("keydown", (e) => keys[e.key] = true);
    window.addEventListener("keyup", (e) => keys[e.key] = false);
    
    updateUI();
    gameLoop();
}

function updateUI() {
    const zone = GameMaps[currentZone];
    document.getElementById("zone-title").innerText = zone.name;
    document.getElementById("zone-title").style.color = zone.color;
    document.getElementById("game-window").style.borderColor = zone.color;
    document.getElementById("text-box").innerText = zone.dialogue;
}

function gameLoop() {
    updateMovement();
    drawScreen();
    requestAnimationFrame(gameLoop); // Keep running at 60 FPS
}

function updateMovement() {
    // Process keyboard controls
    if (keys["ArrowUp"] && player.y > 20) player.y -= player.speed;
    if (keys["ArrowDown"] && player.y < 300) player.y += player.speed;
    if (keys["ArrowLeft"] && player.x > 10) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < 630) player.x += player.speed;

    // Map boundary logic: Check if player walks off the right side of the screen
    if (player.x >= 625) {
        player.x = 20; // Reset player to the left side of the next room
        advanceStory();
    }
}

function drawScreen() {
    const zone = GameMaps[currentZone];
    
    // Clear last frame canvas draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw room background elements
    if (zone.bgElements) {
        zone.bgElements.forEach(elem => {
            ctx.fillStyle = elem.color;
            ctx.fillRect(elem.x, elem.y, elem.w, elem.h);
        });
    }
    
    // Draw the player soul as a standard heart shape or placeholder block
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size / 2, 0, Math.PI * 2);
    ctx.fill();
}

function pressButton(action) {
    let textBox = document.getElementById("text-box");
    if (action === "ACT") {
        textBox.innerText = "* You request personal boundaries. The atmosphere shifts.";
    } else if (action === "MERCY") {
        textBox.innerText = "* You selected SPARE.";
    } else {
        textBox.innerText = `* You pressed ${action}.`;
    }
}

function advanceStory() {
    if (currentZone === "ruins_start") currentZone = "snowdin";
    else if (currentZone === "snowdin") currentZone = "hall";
    else currentZone = "ruins_start";
    
    updateUI();
}

// Kickstart engine execution
window.onload = initGame;
