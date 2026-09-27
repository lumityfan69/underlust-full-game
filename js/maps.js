const GameMaps = {
    ruins_start: { 
        name: "The Ruins - Golden Flowerbed", 
        color: "#ff66cc", 
        dialogue: "* You fell into a bed of glowing pink flowers. Flowey watches from the shadows.",
        bgElements: [{x: 50, y: 180, w: 120, h: 40, color: "#e11d48"}] // Pink flower bed coordinates
    },
    snowdin: { 
        name: "Snowdin - Glowing Pines", 
        color: "#33ccff", 
        dialogue: "* Cold neon blue trees twist around you. You feel someone watching you.",
        bgElements: [{x: 200, y: 100, w: 40, h: 100, color: "#1e3a8a"}, {x: 400, y: 120, w: 40, h: 100, color: "#1e3a8a"}] // Neon blue trees
    },
    hall: { 
        name: "The Judgement Hall - Final Trial", 
        color: "#ffff33", 
        dialogue: "* Golden light streams through stained glass windows. Sans stands directly in your path.",
        bgElements: [{x: 100, y: 0, w: 20, h: 320, color: "#eab308"}, {x: 300, y: 0, w: 20, h: 320, color: "#eab308"}, {x: 500, y: 0, w: 20, h: 320, color: "#eab308"}] // Golden pillars
    }
};
let currentZone = "ruins_start";
