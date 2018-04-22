import React from 'react'
import p5 from 'p5'

export default function sketch (p) {
    let rotation = 0;



    var img;
    // var imgMask;
    var particles = [];

    p.preload = function (){
        img = p.loadImage("images/bodyFrontGreylite.png");  
        // imgMask- p.loadImage("images/bodyFrontPurple.png");
    }

    p.setup = function  () {
        p.createCanvas(800,1100);
        // p.img.mask(img);
        p.imageMode(p.CENTER);
    }


    p.draw = function () {
        p.background(100);
        p.image(img, p.width/2, p.height/2);
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
            this.vx = p.random(-1, 1);
            this.vy = p.random(-1, 1);
            this.alpha = 250;
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
            p.noStroke();
            p.fill(255, 10);
            p.ellipse(this.x, this.y, 16, 16)
        }
    }



}

// p5 react wrapper 
// a different vector comp which pulls in each sketch, and a function to call each
