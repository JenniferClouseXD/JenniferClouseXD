(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
    createPlatform(0, game.world.height - 32, 4, 2); // DO NOT DELETE
    createPlatform(150, 600, 1.2, 0.7);
    createPlatform(380, 510, 1.2, 5);
    createPlatform(750, 600, 1, 0.6);
    createPlatform(700, 400, 1.8, 0.7);
    createPlatform(285, 300, 1.9, 0.8);
    createPlatform(0, 265, 1, 0.6);
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
