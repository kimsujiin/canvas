const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.shadowColor = '#444'
ctx1.shadowBlur = 10;
ctx1.shadowOffsetX = 15;
ctx1.shadowOffsetY = 15;
ctx1.fillStyle='pink';
ctx1.fillRect(150,100,300,200);




const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0,0); ctx2.lineTo(600,400);
ctx2.strokeStyle='skyblue';
ctx2.stroke();



const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300,50);ctx3.lineTo(50,350);ctx3.lineTo(550,350);ctx3.lineTo(300,50);
ctx3.fillStyle= 'rgba(10,0,180,0.5';
ctx3.fill();