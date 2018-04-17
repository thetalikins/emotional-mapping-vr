//var img;
//var imgMask;
let particles = [];

//function preload(){
//    img = loadImage("bodyFrontGreylite.png");  
//    imgMask- loadImage("bodyFrontPurple.png");
//}

function setup () {
    createCanvas(800,1100);
//    img.mask(img);
//    imageMode(CENTER);
}


function draw () {
    background(100);
    image(img, width/2, height/2);
    //begin particle system:
    let p = new Particle();
    particles.push(p);
    for (let i=0; i < particles.length; i++) {
        particles[i].show();
        particles[i].update();
    }
}

class Particle {
    constructor() {
        this.x = 300;
        this.y = 390;
        this.vx = random(-1, 1);
        this.vy = random(-5,-1);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    show() {
        stroke(255);
        fill(255, 10);
        ellipse(this.x, this.y, 16, 16)
    }
}