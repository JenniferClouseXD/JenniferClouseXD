var background = function (window) {
    'use strict';

    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;

    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function (app, ground) {
        /* Error Checking - DO NOT DELETE */
        if (!app) {
            throw new Error("Invalid app argument");
        }
        if (!ground || typeof (ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;

        // container which will be returned
        var background;

        // ANIMATION VARIABLES HERE:
        var cat;
        var buildings = [];


        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            //  var backgroundFill = draw.rect(canvasWidth, canvasHeight, 'pink');
            // background.addChild (backgroundFill);

            var backgroundImage = draw.bitmap("img/kawaiiBackground.jpg");
            backgroundImage.x = 0.1;
            backgroundImage.y = 0.1;
            backgroundImage.scaleX = 0.6;
            backgroundImage.scaleY = 0.4;
            background.addChild(backgroundImage);

            // TODO: 3 - Add a moon and starfield
            var computerTab = draw.bitmap("img/computerTab.png");
            computerTab.x = 1245;
            computerTab.y = 17;
            computerTab.scaleX = 0.4;
            computerTab.scaleY = 0.4;
            background.addChild(computerTab);

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 21; ++i){
                var buildingHeight = 295 * Math.random();
                var building = draw.rect(75, buildingHeight, "pink", "magenta", 3);
                building.x = 75 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building)
                buildings.push(buildings);
            }

            // TODO 4: Part 1 - Add a tree
            cat = draw.bitmap("img/nyanCat.png");
            cat.x = 1400;
            cat.y = 405;
            cat.scaleX = 0.1;
            cat.scaleY = 0.1;
            background.addChild(cat);


        } // end of render function - DO NOT DELETE


        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            // TODO 4: Part 2 - Move the tree!
            cat.x = cat.x - 1;

            if (cat.x < -200) {
              cat.x = canvasWidth;
            }

            // TODO 5: Part 2 - Parallax


        } // end of update function - DO NOT DELETE



        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;

        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);

        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
