import React from 'react'
import p5 from 'p5'

//mystery

export default function sketch (p) {
    let rotation = 0;



    var img;
    var particles = [];

    p.preload = function (){
        img = p.loadImage("images/bodyFrontGreylite.png");  
    }

    p.setup = function  () {
        p.createCanvas(800,1100);
        p.imageMode(p.CENTER);
    }


    p.draw = function () {
        p.background(230, 230, 250);
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
        constructor () {
            this.r = 230;
            this.g = 230;
            this.b = 250;
            this.x = 400;
            this.y = 175;
            this.vx = p.random(-0.7, 0.7);
            this.vy = p.random(-1.5, 1.5);
            this.alpha = 500;
        }
        
        finished() {
            return this.alpha < 0;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= 12;
        }
        
        show() {
            p.noStroke();
            p.fill(this.r, this.g, this.b, 40);
            // 3 = color triad; ?, color, ? , opacity
            p.ellipse(this.x, this.y, 16, 16)
        }
    }



}