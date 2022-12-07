var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Cutesy Computer Screen",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createHeartAttack(x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var heartHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            heartHitZone.x = x;
            heartHitZone.y = y;
            game.addGameItem(heartHitZone);
            var obstacleImage = draw.bitmap("img/pixelHeart.png");
            obstacleImage.x = -x;
            obstacleImage.y = -y;
            obstacleImage.scaleX = 25;
            obstacleImage.scaleY = 25;
            heartHitZone.addChild(obstacleImage);
        }
        return createHeartAttack(200, 200)
//edit the size of the pixel heart png to match the sawblade png
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
