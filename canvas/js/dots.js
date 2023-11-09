const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle(x,y){
  this.x = x;
  this.y = y;
  this.direction = {
    x: Math.random()*2,
    y: Math.random()*2

  }

  this.radius = Math.random()*20+2;
  this.update();
 
}

Particle.prototype.draw = function(){
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = 'rgba(255,255,255,.6)';
  ctx.strokeStyle = 'rgba(222,222,222,.3)';
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
  ctx.stroke();
  ctx.fill();
}

Particle.prototype.update = function(){
  this.x += this.direction.x;
  this.y += this.direction.y;
  if(this.x - this.radius <0 || this.x + this.radius > canvas.width){
    this.direction.x = -this.direction.x;
  }
  if(this.y - this.radius <0 || this.y + this.radius > canvas.height){
    this.direction.y = -this.direction.y;
  }
  this.draw();
}

let particleArray = []
for(let i=0; i<100; i++){
  const x = Math.random()*canvas.width;
  const y= Math.random()*canvas.height;
  particleArray.push(new Particle(x,y));
}

console.log(particleArray);

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<particleArray.length; i++){
    particleArray[i].update();
  }
}

window.onresize = function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
animate();