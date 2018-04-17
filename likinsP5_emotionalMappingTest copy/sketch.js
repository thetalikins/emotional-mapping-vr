var img;
var imgMask;
var system;

function preload(){
    img = loadImage("bodyFrontGreylite.png");  
    imgMask- loadImage("bodyFrontPurple.png");
}

function setup () {
    createCanvas(800,1100);
    img.mask(img);
    imageMode(CENTER);
    system = new ParticleSystem(createVector(width/2, 50));
}

function draw () {
    background(51);
    image(img, width/2, height/2);
    //begin particle system:
    system.addParticle();
    system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.1);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 12, 12);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
