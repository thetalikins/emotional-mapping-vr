import React from 'react'
import p5 from 'p5'

//nostalgia

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
        p.background(176,196,222);
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
//nostalgia
    class Particle {
        constructor () {
            this.r = 176;
            this.g = 196;
            this.b = 222;
            this.x = 400;
            this.y = 17;
            this.vx = p.random(-0.4, 0.4);
            this.vy = p.random(0, 1);
            this.alpha = 200;
        }
        
        finished() {
            return this.alpha < 0;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= 2;
        }
        
        show() {
            p.noStroke();
            p.fill(this.r, this.g, this.b, 40);
            // 3 = color triad; ?, color, ? , opacity
            p.ellipse(this.x, this.y, 16, 16)
        }
    }



}