/**
 * Mr. Furious
 * Frid + Christie
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
        r: 255,
        g: 225,
        b: 225
  }
};

let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
};

let bird = {
    x: 0,
    y: 80,
    size: 20,
    fill: {
        r: 255,
        g: 105,
        b: 180
    },
    velocity: {
        x: 1.5
    }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(sky.fill.r, sky.fill.g, sky.fill.b);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  // Change turn red over time
  mrFurious.fill.g = mrFurious.fill.g - 0.5;
  mrFurious.fill.b = mrFurious.fill.b - 0.5;

  // Change sky from blue to black over time
  sky.fill.r = sky.fill.r - 1;
  sky.fill.g = sky.fill.g - 1;
  sky.fill.b = sky.fill.b - 1;

  // Drawing a bird
  push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  ellipse(bird.x, bird.y, bird.size);
  pop();

  // Moving the bird
  bird.x = bird.x + bird.velocity.x;

  // Make Mr. Furious shake and become bigger
  mrFurious.x = mrFurious.x + random(-2, 2);
  mrFurious.y = mrFurious.y + random(-2, 2);
  mrFurious.size = mrFurious.size + 0.5;

}
