// Start game!
const k = kaplay();

// Load assets
k.loadSprite("bean", "assets/sprites/bean.png");

// Create a scene
k.scene("game", () => {
    // Add a Bean
    k.add([
        k.sprite("bean"),
        k.pos(40, 80),
    ]);
});

// Go to the game scene
k.go("game");