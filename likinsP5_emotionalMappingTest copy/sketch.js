var img;
var imgMask;
particles = [];

function preload(){
    img = loadImage("bodyFrontGreylite.png");  
    imgMask- loadImage("bodyFrontPurple.png");
}

function setup () {
    createCanvas(800,1100);
    img.mask(img);
    imageMode(CENTER);
}


function draw () {
    background(100);
    image(img, width/2, height/2);
//    //begin particle system:
    for (let i=0; i <5; i++) {
        let p = new Particle();
        particles.push(p);
    }
    for (let i=particles.length -1; i>=0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i,1)
        }
    }
}

class Particle {
    constructor() {
        this.x = 400;
        this.y = 345;
        this.vx = random(-1, 1);
        this.vy = random(-5,-1);
        this.alpha = 255;
    }
    
    finished() {
        return this.alpha < 0;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }
    
    show() {
        noStroke();
//        stroke(255);
        fill(255, 10);
        ellipse(this.x, this.y, 16, 16)
    }
}


