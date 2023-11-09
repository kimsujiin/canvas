/* ctx1 */

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
ctx1.shadowColor = '#444'
ctx1.shadowBlur = 10;
ctx1.shadowOffsetX = 15;
ctx1.shadowOffsetY = 15;
ctx1.fillStyle = 'pink';
ctx1.fillRect(150, 100, 300, 200);


/* ctx2 */

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
ctx2.moveTo(0, 0); ctx2.lineTo(600, 400);
ctx2.strokeStyle = 'skyblue';
ctx2.stroke();

/* ctx3 */

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
ctx3.moveTo(300, 50); ctx3.lineTo(50, 350); ctx3.lineTo(550, 350); ctx3.lineTo(300, 50);
ctx3.fillStyle = 'rgba(10,0,180,0.5';
ctx3.fill();

/* ctx4 */

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');

ctx4.fillStyle = 'lightyellow'
ctx4.fillRect(150, 100, 200, 100)

ctx4.globalAlpha = .5;
ctx4.fillStyle = 'lightpink'
ctx4.fillRect(200, 150, 200, 100)

ctx4.globalAlpha = 1;
ctx4.fillStyle = 'lightblue'
ctx4.fillRect(250, 200, 200, 100)

/* ctx5 */

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
const gra1 = ctx5.createLinearGradient(0, 0, canvas5.width, canvas5.height);
gra1.addColorStop(0, 'gold');
gra1.addColorStop(0.5, 'white');
gra1.addColorStop(1, 'coral');

ctx5.fillStyle = gra1;
ctx5.fillRect(150, 100, 300, 200)

/* ctx6 */

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
const gra2 = ctx6.createLinearGradient(-80, -20, 0, canvas6.height);
gra2.addColorStop(0, '#9795f0');
gra2.addColorStop(0.5, '#e9defa');
gra2.addColorStop(1, '#F9FEA5');


ctx6.fillStyle = gra2
ctx6.fillRect(0, 0, canvas6.width, canvas6.height);
ctx6.strokeStyle = gra1;
ctx6.shadowColor = 'purple'; ctx6.shadowBlur = 0.7
ctx6.strokeRect(150, 100, 300, 200);

/* ctx7 */

const canvas7 = document.getElementById('canvas7');
const ctx7 = canvas7.getContext('2d');
const gra3 = ctx7.createRadialGradient(200, 150, 40, 300, 200, 200);
gra3.addColorStop(0, '#f9d423')
gra3.addColorStop(0.3, '#fee140')
gra3.addColorStop(0.8, '#fa709a')
gra3.addColorStop(1, '#f3e7e9')

// ctx7.globalAlpha =  .7;
ctx7.fillStyle = gra3;
ctx7.fillRect(0, 0, canvas7.width, canvas7.height)


/* ctx8 pattern1적용 */

const canvas8 = document.getElementById('canvas8');
const ctx8 = canvas8.getContext('2d');
const myImg1 = document.getElementById('pat1');
const myPat1 = ctx8.createPattern(myImg1, 'repeat')
ctx8.fillStyle = myPat1
ctx8.fillRect(150, 100, 300, 200);

/* ctx9 pattern2적용 */

const canvas9 = document.getElementById('canvas9');
const ctx9 = canvas9.getContext('2d');
const myImg2 = new Image();
myImg2.src = 'img/pattern2.png';
myImg2.onload = function () {
  const myPat2 = ctx9.createPattern(myImg2, 'repeat')
  ctx9.fillStyle = myPat2;
  ctx9.fillRect(0, 0, canvas9.width, canvas9.height);

}

/* ctx10  실습1 */

const canvas10 = document.getElementById('canvas10');
const ctx10 = canvas10.getContext('2d');
const myImg3 = new Image();
const gra4 = ctx10.createLinearGradient(-100, 400, 0, 0);

gra4.addColorStop(0, '#146152');
gra4.addColorStop(0.5, '#B4CF66');
gra4.addColorStop(0.7, '#FFEC5C');
gra4.addColorStop(1, '#FF5A33');


myImg3.src = 'img/pattern6.png';
myImg3.onload = function () {
  const myPat3 = ctx10.createPattern(myImg3, 'repeat')
  ctx10.fillStyle = myPat3;
  ctx10.fillRect(0, 0, canvas10.width, canvas10.height);

  ctx10.moveTo(300, 80); ctx10.lineTo(150, 200); ctx10.lineTo(200, 200);
  ctx10.lineTo(200, 330); ctx10.lineTo(270, 330); ctx10.lineTo(270, 240);
  ctx10.lineTo(330, 240); ctx10.lineTo(330, 330); ctx10.lineTo(400, 330);
  ctx10.lineTo(400, 200); ctx10.lineTo(450, 200);
  ctx10.fillStyle = gra4
  ctx10.fill()
}

/* ctx11 */
const canvas11 = document.getElementById('canvas11');
const ctx11 = canvas11.getContext('2d');
ctx11.lineWidth = 20; ctx11.strokeStyle = 'rgba(255,0,0,.4)'
ctx11.setLineDash([30, 50]);


/* beginPath - path를 새롭게 시작할 때 각각 독립적으로 적용가능 */
ctx11.beginPath()
ctx11.moveTo(50, 100); ctx11.lineTo(550, 100);
ctx11.lineCap = 'butt';
ctx11.stroke();

ctx11.beginPath()
ctx11.moveTo(50, 200); ctx11.lineTo(550, 200);
ctx11.lineCap = 'round'
ctx11.stroke();

ctx11.beginPath()
ctx11.moveTo(50, 300); ctx11.lineTo(550, 300);
ctx11.lineCap = 'square'
ctx11.stroke();

/* ctx12 */
const canvas12 = document.getElementById('canvas12');
const ctx12 = canvas12.getContext('2d'); ctx12.lineCap = 'round'
ctx12.lineWidth = 20; ctx12.strokeStyle = gra2;

ctx12.beginPath()
ctx12.moveTo(50, 300); ctx12.lineTo(100, 100); ctx12.lineTo(150, 300);
ctx12.lineJoin = 'miter'
ctx12.stroke()
ctx12.beginPath()

ctx12.moveTo(250, 300); ctx12.lineTo(300, 100); ctx12.lineTo(350, 300);
ctx12.lineJoin = 'round'
ctx12.stroke()
ctx12.beginPath()

ctx12.moveTo(450, 300); ctx12.lineTo(500, 100); ctx12.lineTo(550, 300);
ctx12.lineJoin = 'bevel'
ctx12.stroke()

/* ctx13 */
const canvas13 = document.getElementById('canvas13');
const ctx13 = canvas13.getContext('2d');

ctx13.fillStyle = gra3
ctx13.fillRect(150, 100, 300, 200)
ctx13.clearRect(200, 150, 50, 50)

/* ctx14 */
const canvas14 = document.getElementById('canvas14');
const ctx14 = canvas14.getContext('2d');

ctx14.beginPath();
ctx14.rect(50, 50, 300, 200)
ctx14.fillStyle = gra2;
ctx14.fill();

ctx14.beginPath();
ctx14.moveTo(250, 150); ctx14.lineTo(500, 150); ctx14.lineTo(300, 350)
ctx14.fillStyle = gra1;
ctx14.fill();

/* ctx15 */
const canvas15 = document.getElementById('canvas15');
const ctx15 = canvas15.getContext('2d');
ctx15.lineWidth = 8; ctx15.lineCap = 'round'; ctx15.lineJoin = 'round'
ctx15.strokeStyle = gra4; ctx15.setLineDash([20]);

ctx15.beginPath();
ctx15.moveTo(50, 50); ctx15.lineTo(50, 350); ctx15.lineTo(250, 350);
ctx15.stroke();

ctx15.beginPath();
ctx15.moveTo(350, 50); ctx15.lineTo(350, 350); ctx15.lineTo(550, 350);
ctx15.closePath();
ctx15.stroke();

/* ctx16 */
const canvas16 = document.getElementById('canvas16');
const ctx16 = canvas16.getContext('2d');
ctx16.moveTo(300, 50); ctx16.lineTo(50, 350); ctx16.lineTo(550, 350); ctx16.closePath();
ctx16.clip()

// ctx16.globalAlpha = .5
ctx16.fillStyle = gra1;
ctx16.fillRect(0, 0, canvas16.width, canvas16.height);

ctx16.fillStyle = myPat1;
ctx16.fillRect(0, canvas16.height / 2, canvas16.width, canvas16.height / 2);

/* ctx17 */
const canvas17 = document.getElementById('canvas17');
const ctx17 = canvas17.getContext('2d');
ctx17.beginPath();
ctx17.moveTo(50, 100); ctx17.lineTo(150, 100);
ctx17.quadraticCurveTo(300, 400, 450, 100); ctx17.lineTo(550, 100);
ctx17.lineTo(550, 350); ctx17.lineTo(50, 350);
ctx17.lineWidth = 5; ctx17.lineJoin = 'round'; ctx17.lineCap = 'round'
ctx17.setLineDash([10]);
ctx17.strokeStyle = gra4;
ctx17.closePath();
ctx17.stroke();

/* ctx18 */
const canvas18 = document.getElementById('canvas18');
const ctx18 = canvas18.getContext('2d');
ctx18.fillStyle = 'lightyellow'
ctx18.fillRect(0, 0, canvas18.width, canvas18.height);
ctx18.beginPath();
ctx18.moveTo(50, 100);
ctx18.bezierCurveTo(50, 450, 550, 450, 550, 100);
ctx18.bezierCurveTo(550, 300, 50, 300, 50, 100);
ctx18.shadowColor = '#ccc'; ctx18.shadowBlur = 10;
ctx18.fillStyle = gra2;
ctx18.fill();

/* ctx19 실습2 */
const canvas19 = document.getElementById('canvas19');
const ctx19 = canvas19.getContext('2d')
const gra5 = ctx19.createLinearGradient(0, 0, canvas19.width, canvas19.height)
gra5.addColorStop(0, '#BDE4FF');
gra5.addColorStop(.3, '#ACCAF2');
gra5.addColorStop(.5, '#D0ECF2');
gra5.addColorStop(.7, '#8698D9');
gra5.addColorStop(1, '#BDE4FF');

ctx19.fillStyle = 'mintcream'
ctx19.fillRect(0, 0, canvas19.width, canvas19.height)

const myImg4 = new Image();
myImg4.src = 'img/pattern5.png';
myImg4.onload = function () {
  const myPat4 = ctx19.createPattern(myImg4, 'repeat');
  ctx19.fillStyle = myPat4;
  ctx19.fillRect(0, 0, canvas19.width, canvas19.height)

}

ctx19.beginPath();
ctx19.moveTo(0, 100);
ctx19.bezierCurveTo(0, 50, 100, 50, 100, 100);
ctx19.bezierCurveTo(100, 150, 200, 150, 200, 100);
ctx19.bezierCurveTo(200, 50, 300, 50, 300, 100);
ctx19.bezierCurveTo(300, 150, 400, 150, 400, 100);
ctx19.bezierCurveTo(400, 50, 500, 50, 500, 100);
ctx19.bezierCurveTo(500, 150, 600, 150, 600, 100);
ctx19.lineTo(600, 300)
ctx19.bezierCurveTo(600, 250, 500, 250, 500, 300);
ctx19.bezierCurveTo(500, 350, 400, 350, 400, 300);
ctx19.bezierCurveTo(400, 250, 300, 250, 300, 300);
ctx19.bezierCurveTo(300, 350, 200, 350, 200, 300);
ctx19.bezierCurveTo(200, 250, 100, 250, 100, 300);
ctx19.bezierCurveTo(100, 350, 0, 350, 0, 300);
ctx19.clip();
ctx19.closePath();
ctx19.fillStyle = gra5;
ctx19.fill();

/* ctx20 */
const canvas20 = document.getElementById('canvas20');
const ctx20 = canvas20.getContext('2d');
ctx20.beginPath();
ctx20.arc(300, 200, 100, 0, Math.PI * 1.5,);
ctx20.stroke();



/* ctx21 실습3 */
const canvas21 = document.getElementById('canvas21');
const ctx21 = canvas21.getContext('2d');
ctx21.beginPath();
ctx21.arc(300, 200, 100, 0, Math.PI * 2,)
ctx21.moveTo(370, 200); ctx21.arc(300, 200, 70, 0, Math.PI);
ctx21.moveTo(270, 180); ctx21.arc(250, 180, 20, 0, Math.PI, true)
ctx21.moveTo(370, 180); ctx21.arc(350, 180, 20, 0, Math.PI, true)
ctx21.stroke();

/* 왼눈썹 */
ctx21.beginPath();
ctx21.moveTo(235, 165); ctx21.lineTo(230, 155);
ctx21.moveTo(250, 160); ctx21.lineTo(245, 150);
ctx21.stroke();

/* 오눈썹 */
ctx21.beginPath();
ctx21.moveTo(365, 165); ctx21.lineTo(370, 155);
ctx21.moveTo(350, 160); ctx21.lineTo(355, 150);
ctx21.stroke();

/* 머리카락1 */
ctx21.beginPath();
ctx21.lineWidth = 2.5;
ctx21.strokeStyle = 'rosybrown';

ctx21.moveTo(200, 200);
ctx21.bezierCurveTo(200, 250, 100, 250, 100, 150);

ctx21.moveTo(200, 200);
ctx21.bezierCurveTo(200, 250, 100, 250, 150, 120);

ctx21.moveTo(200, 200);
ctx21.bezierCurveTo(200, 250, 100, 250, 120, 120);

ctx21.moveTo(200, 200);
ctx21.bezierCurveTo(200, 250, 100, 250, 180, 100);

ctx21.moveTo(200, 200);
ctx21.bezierCurveTo(200, 250, 100, 250, 200, 100);
ctx21.stroke();

/* 머리카락2 */
ctx21.beginPath();
// ctx21.lineWidth = 2.5;
// ctx21.strokeStyle='rosybrown';
ctx21.moveTo(400, 200);
ctx21.bezierCurveTo(400, 250, 500, 250, 480, 120);

ctx21.moveTo(400, 200);
ctx21.bezierCurveTo(400, 250, 500, 250, 450, 100);

ctx21.moveTo(400, 200);
ctx21.bezierCurveTo(400, 250, 500, 250, 420, 120);

ctx21.moveTo(400, 200);
ctx21.bezierCurveTo(400, 250, 500, 250, 400, 120);

ctx21.moveTo(400, 200);
ctx21.bezierCurveTo(400, 250, 500, 250, 400, 150);
ctx21.stroke();


/* ctx22 */
const canvas22 = document.getElementById('canvas22');
const ctx22 = canvas22.getContext('2d');
ctx22.beginPath();
ctx22.moveTo(150, 100);
ctx22.lineTo(450, 100); ctx22.arcTo(500, 100, 500, 150, 50); ctx22.lineTo(500, 250); ctx22.arcTo(500, 300, 450, 300, 50); ctx22.lineTo(150, 300); ctx22.arcTo(100, 300, 100, 250, 50); ctx22.lineTo(100, 150); ctx22.arcTo(100, 100, 150, 100, 50);
ctx22.shadowColor = '#777'; ctx22.shadowBlur = 10
ctx22.setLineDash([40])
ctx22.lineWidth = 10; ctx22.lineCap = 'round'
ctx22.strokeStyle = gra5
ctx22.stroke();

/* ctx23 */
const canvas23 = document.getElementById('canvas23');
const ctx23 = canvas23.getContext('2d');
ctx23.rect(100, 100, 400, 200);
if (ctx23.isPointInPath(150, 150)) {
  ctx23.stroke();
}

/* ctx24 */
const canvas24 = document.getElementById('canvas24');
const ctx24 = canvas24.getContext('2d');
const w24 = canvas24.width / 2;
const h24 = canvas24.height / 2;
const r24 = 30;

ctx24.fillStyle = '#010326'; ctx24.fillRect(0, 0, w24, h24);
ctx24.fillStyle = '#f2b705'; ctx24.fillRect(w24, 0, w24, h24);
ctx24.fillStyle = '#e58900'; ctx24.fillRect(0, h24, w24, h24);
ctx24.fillStyle = '#024059'; ctx24.fillRect(w24, h24, w24, h24);

ctx24.fillStyle = "#fff"; ctx24.globalAlpha = .2;
for (let i = 1; i <= Math.floor(h24 / r24); i++) {
  ctx24.beginPath();
  ctx24.arc(w24, h24, r24 * i, 0, Math.PI * 2);
  ctx24.fill();
}

// console.log(Math.floor(h24/r24));


/* ctx25 실습 4*/
const canvas25 = document.getElementById('canvas25');
const ctx25 = canvas25.getContext('2d');
const w25 = canvas25.width / 2;
const h25 = canvas25.height / 2;

ctx25.fillStyle = '#FA869A'; ctx25.fillRect(0, 0, w25, h25);
ctx25.fillStyle = '#F9B869'; ctx25.fillRect(w25, 0, w25, h25);
ctx25.fillStyle = '#7B85D4'; ctx25.fillRect(0, h25, w25, h25);
ctx25.fillStyle = '#5A96D6'; ctx25.fillRect(w25, h25, w25, h25)

ctx25.fillStyle = "#fff"; ctx25.globalAlpha = .2;
for (let i = 1; i < 7; i++) {
  ctx25.beginPath();
  ctx25.rect(w25 - 30 * i, h25 - 30 * i, 60 * i, 60 * i)
  ctx25.fill();
}

/* ctx26 */
const canvas26 = document.getElementById('canvas26');
const ctx26 = canvas26.getContext('2d');
const gap26 = 50
ctx26.lineCap = 'round'; ctx26.strokeStyle = gra4;
for (let i = 0; i < canvas26.width / gap26 - 2; i++) {
  ctx26.setLineDash([10 * i])
  ctx26.lineWidth = 2 + i;
  ctx26.beginPath();
  ctx26.moveTo(100 + i * gap26, 50)
  ctx26.lineTo(50 + i * gap26, 350);
  ctx26.stroke();

}

/* ctx27 */
const canvas27 = document.getElementById('canvas27');
const ctx27 = canvas27.getContext('2d');

const path1 = new Path2D();
path1.rect(50, 100, 200, 200)


const path2 = new Path2D(path1);
path2.moveTo(550, 200)
path2.arc(450, 200, 100, 0, Math.PI * 2);

const path3 = new Path2D('M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z')

ctx27.fillStyle = gra5
ctx27.fill(path2)
ctx27.lineWidth = 30; ctx27.strokeStyle = 'rgba(0,0,0,.5)'
ctx27.stroke(path2)
ctx27.fillStyle = 'hotpink'
ctx27.fill(path3);

/* ctx28 scale*/
const canvas28 = document.getElementById('canvas28');
const ctx28 = canvas28.getContext('2d');
ctx28.strokeRect(50, 50, 100, 100);
ctx28.scale(2, 2);
ctx28.strokeStyle = 'red'; ctx28.strokeRect(50, 50, 100, 100);
ctx28.scale(2, 2)
ctx28.strokeStyle = 'green'; ctx28.strokeRect(50, 50, 100, 100);
ctx28.scale(0.25, 0.25)
ctx28.strokeStyle = 'blue'; ctx28.strokeRect(100, 100, 100, 100);

/* ctx29 rotate */
const canvas29 = document.getElementById('canvas29');
const ctx29 = canvas29.getContext('2d');
ctx29.rotate(45 * (Math.PI / 180));
ctx29.fillStyle = 'rgba(135,0,0,.5)';
ctx29.fillRect(250, 150, 100, 100);


/* ctx30 translate */
const canvas30 = document.getElementById('canvas30');
const ctx30 = canvas30.getContext('2d');
ctx30.globalAlpha = .5
ctx30.fillRect(0, 0, 100, 50);


ctx30.translate(100, 100)
ctx30.fillStyle = 'blue'; ctx30.fillRect(0, 0, 100, 50);

ctx30.translate(-100, -100)
ctx30.fillStyle = 'coral'; ctx30.fillRect(100, 50, 100, 50);


/* ctx31 */
const canvas31 = document.getElementById('canvas31');
const ctx31 = canvas31.getContext('2d');

ctx31.fillStyle = 'lightblue'; ctx31.fillRect(150, 50, 300, 300);
ctx31.save();

ctx31.fillStyle = 'coral'; ctx31.fillRect(200, 100, 200, 200);
ctx31.save();

ctx31.fillStyle = 'linen'; ctx31.fillRect(250, 150, 100, 100);
ctx31.restore(); ctx31.fillRect(275, 175, 50, 50);
ctx31.restore(); ctx31.fillRect(290, 190, 20, 20);

/* ctx32 */
const canvas32 = document.getElementById('canvas32');
const ctx32 = canvas32.getContext('2d');
ctx32.globalAlpha = .5;

ctx32.save();
ctx32.fillStyle = 'purple'; ctx32.fillRect(150, 150, 100, 100);
ctx32.rotate(25 * (Math.PI / 180));
ctx32.fillStyle = 'coral'; ctx32.fillRect(150, 150, 100, 100);
ctx32.restore();

ctx32.fillStyle = 'purple'; ctx32.fillRect(350, 150, 100, 100);
ctx32.translate(400, 200);
ctx32.rotate(25 * (Math.PI / 180));
ctx32.translate(-400, -200);
ctx32.fillStyle = 'coral'; ctx32.fillRect(350, 150, 100, 100);

/* ctx33 */
const canvas33 = document.getElementById('canvas33');
const ctx33 = canvas33.getContext('2d');

for (let i = 0; i < canvas33.height / 50; i++) {
  for (let j = 0; j < canvas33.width / 50; j++) {
    ctx33.save();
    ctx33.translate(50 * j, 50 * i);
    ctx33.fillStyle = `rgb(255,${i * 30},${255 - j * 30})`;
    ctx33.fillRect(10, 10, 30, 30);
    ctx33.restore();
  }

}

/* ctx34 */
const canvas34 = document.getElementById('canvas34');
const ctx34 = canvas34.getContext('2d');
for (let i = 0; i < canvas34.height / 50; i++) {
  for (let j = 0; j < canvas34.width / 50; j++) {
    ctx34.save();
    ctx34.beginPath();
    ctx34.translate(50 * j, 50 * i);
    ctx34.fillStyle = `rgb(${i * 20},${255 - j * 20},255)`;
    ctx34.arc(25, 25, 18, 0, Math.PI * 2);
    ctx34.fill();
    ctx34.restore();
  }
}

/* ctx35*/
const canvas35 = document.getElementById('canvas35');
const ctx35 = canvas35.getContext('2d');
ctx35.font = 'bold 7em Arial,sans-serif';
ctx35.fillStyle = gra3;
ctx35.fillText('Canvas', 100, 240);


/* ctx36*/
const canvas36 = document.getElementById('canvas36');
const ctx36 = canvas36.getContext('2d');
ctx36.fillStyle = gra5;
ctx36.fillRect(0, 0, canvas36.width, canvas36.height);
ctx36.font = 'bold 7em Aral,sans-serif';
ctx36.strokeStyle = gra1; ctx36.lineWidth = 2;
ctx36.setLineDash([7]); ctx36.lineCap = 'round';
ctx36.strokeText('Canvas', 100, 240);

/* ctx37*/
const canvas37 = document.getElementById('canvas37');
const ctx37 = canvas37.getContext('2d');
const x37 = canvas37.width / 2;
const y37 = canvas37.height / 5;
const alignText = ['start', 'end', 'left', 'center', 'right']


ctx37.strokeStyle = 'red';
ctx37.moveTo(x37, 0); ctx37.lineTo(x37, canvas37.height);
ctx37.stroke();


// ctx37.font = 'bold 20px Arial,sans-serif';
// ctx37.textAlign = 'start'
// ctx37.fillText('start',x37,40);
// ctx37.textAlign = 'end'
// ctx37.fillText('end',x37,120);
// ctx37.textAlign = 'left'
// ctx37.fillText('left',x37,200);
// ctx37.textAlign = 'center'
// ctx37.fillText('center',x37,280);
// ctx37.textAlign = 'right'
// ctx37.fillText('right',x37,360);

ctx37.font = 'bold 20px Arial,sans-serif';

for (let i = 0; i < alignText.length; i++) {
  ctx37.textAlign = alignText[i];
  ctx37.fillText(alignText[i], x37, y37 * (i + 1) - 30);
}

/* ctx38 for문 변경 과제 */
const canvas38 = document.getElementById('canvas38');
const ctx38 = canvas38.getContext('2d');
const x38 = canvas38.width / 5;
const y38 = canvas38.height / 2;
const Baselinetext = ['top', 'bottom', 'middle', 'alphabetic', 'hanging'];

ctx38.strokeStyle = 'red';
ctx38.moveTo(0, y38); ctx38.lineTo(canvas38.width, y38);
ctx38.stroke();
ctx38.font = 'bold 20px Arial,sans-serif';
ctx38.textAlign = 'center';

for (let i = 0; i < Baselinetext.length; i++) {
  ctx38.textBaseline = Baselinetext[i];
  ctx38.fillText(Baselinetext[i], x38 * (i + 1) - 70, y38)
};

// ctx38.textAlign = 'center';
// ctx38.textBaseline = 'top'
// ctx38.fillText('top',x38-60,y38);
// ctx38.textBaseline = 'bottom'
// ctx38.fillText('bottom',x38*2-60,y38);
// ctx38.textBaseline = 'middle'
// ctx38.fillText('middle',x38*3-60,y38);
// ctx38.textBaseline = 'alphabetic'
// ctx38.fillText('alphabetic',x38*4-60,y38);
// ctx38.textBaseline = 'hanging'
// ctx38.fillText('hanging',x38*5-60,y38);

/* ctx39 그라변경*/
const canvas39 = document.getElementById('canvas39');
const ctx39 = canvas39.getContext('2d');
const graColor = ['lightcyan', 'lightsteelblue', '#FCE8CC', '#DDFCCC', '#CCEAFC', '#FCD9FC', '#FDF4E7']
const graBg = ctx39.createLinearGradient(canvas39.width, 0, 0, canvas39.height);
graBg.addColorStop(0, graColor[0]);
graBg.addColorStop(0.3, graColor[1]);
graBg.addColorStop(0.7, graColor[1]);
graBg.addColorStop(1, graColor[0]);
const gra6 = ctx39.createLinearGradient(0, 0, canvas39.width, canvas39.height);
gra6.addColorStop(0, graColor[2]);
gra6.addColorStop(0.3, graColor[3]);
gra6.addColorStop(0.5, graColor[4]);
gra6.addColorStop(0.6, graColor[5]);
gra6.addColorStop(0.7, graColor[6]);
gra6.addColorStop(1, graColor[3]);

ctx39.fillStyle = graBg;
ctx39.fillRect(0, 0, canvas39.width, canvas39.height);


ctx39.font = 'bold 6rem Arial,sans-serif';
ctx39.textAlign = 'center'; ctx39.textBaseline = 'middle'
ctx39.strokeStyle = gra6;
ctx39.strokeText('Kim Su Jin', canvas39.width / 2, canvas39.height / 2);

/* ctx40 */
const canvas40 = document.getElementById('canvas40');
const ctx40 = canvas40.getContext('2d');
const txt = 'Canvas'
ctx40.font = '100px Arial,sans-serif';
ctx40.textAlign = 'center'
ctx40.fillText(txt, canvas40.width / 2, 150);
ctx40.font = '50px Arial,sans-serif'
ctx40.fillText(ctx40.measureText(txt).width, canvas40.width / 2, 300)

/* ctx41 */
const canvas41 = document.getElementById('canvas41');
const ctx41 = canvas41.getContext('2d');
const myImg5 = document.getElementById('smile');
ctx41.drawImage(myImg5, 50, 50);

/* ctx42 */
const canvas42 = document.getElementById('canvas42');
const ctx42 = canvas42.getContext('2d');
const myImg6 = new Image();
const myImg7 = new Image();
const myImg8 = new Image();
myImg6.src = 'img/smile1.png';
myImg7.src = 'img/smile2.png';
myImg8.src = 'img/smile3.png';

myImg8.onload = function () {
  ctx42.drawImage(myImg6, 100, 50);
  ctx42.drawImage(myImg7, 250, 150);
  ctx42.drawImage(myImg8, 400, 250);

}

/* ctx43 */
const canvas43 = document.getElementById('canvas43');
const ctx43 = canvas43.getContext('2d');
const myImg9 = new Image();
myImg9.src = 'https://ssl.pstatic.net/melona/libs/1460/1460806/8bcbaa5bc1dc1702cc95_20230821153326802.jpg';
const ratio43 = 3;
const myImg9x = myImg9.width / ratio43;
const myImg9y = myImg9.height / ratio43;

myImg9.onload = function () {
  ctx43.drawImage(myImg9, (canvas43.width - myImg9x) / 2, (canvas43.height - myImg9y) / 2, myImg9x, myImg9y);
}


/* ctx44 */
const canvas44 = document.getElementById('canvas44');
const ctx44 = canvas44.getContext('2d');
const svgSize44 = 300;
const myImg10 = new Image();
myImg10.src = 'img/favorite_black_24dp.svg';
myImg10.onload = function () {
  ctx44.drawImage(myImg10, (canvas44.width - svgSize44) / 2, (canvas44.height - svgSize44) / 2, svgSize44, svgSize44);
};

/* ctx45 */
const canvas45 = document.getElementById('canvas45');
const ctx45 = canvas45.getContext('2d');
const myImg11 = new Image();
myImg11.src = 'img/balloons-1046658_640.jpg';
ctx45.globalAlpha = .5;
myImg11.onload = function () {
  ctx45.drawImage(myImg11, 100, 100, 300, 300, 200, 100, 200, 200);
}

/* ctx46 */
const canvas46 = document.getElementById('canvas46');
const ctx46 = canvas46.getContext('2d');
const imgData1 = ctx46.createImageData(100, 100);
console.log(imgData1.data);

imgData1.data[0] = 255;
imgData1.data[1] = 0;
imgData1.data[2] = 0;
imgData1.data[3] = 255;

imgData1.data[4] = 0;
imgData1.data[5] = 255;
imgData1.data[6] = 0;
imgData1.data[7] = 255;

imgData1.data[8] = 0;
imgData1.data[9] = 0;
imgData1.data[10] = 255;
imgData1.data[11] = 255;

ctx46.putImageData(imgData1, 50, 50);

/* ctx47 */
const canvas47 = document.getElementById('canvas47');
const ctx47 = canvas47.getContext('2d');
const imgData2 = ctx47.createImageData(100, 100);

for (let i = 0; i < imgData2.data.length; i+=4) {
  imgData2.data[0+i] = 255;
  imgData2.data[1+i] = 0;
  imgData2.data[2+i] = 0;
  imgData2.data[3+i] = 100;
}
ctx47.putImageData(imgData2, 50, 50);

/* ctx48 */
const canvas48 = document.getElementById('canvas48');
const ctx48 = canvas48.getContext('2d');
const imgData3 = ctx48.createImageData(400,300);
console.log(imgData3.width);

for (let i = 0; i < imgData3.data.length; i+=4) {
  imgData3.data[0+i] = 255;
  imgData3.data[1+i] = 0;
  imgData3.data[2+i] = 0;
  imgData3.data[3+i] = 100;
}

ctx48.putImageData(imgData3,100,50);

/* ctx49 */
const canvas49 = document.getElementById('canvas49');
const ctx49 = canvas49.getContext('2d');
ctx49.fillStyle = 'cornflowerblue'
ctx49.fillRect(200,50,200,100);

const imgData4 = ctx49.getImageData(100,50,200,100);
console.log(imgData4.data);
ctx49.putImageData(imgData4,100,200);

/* ctx50 */
const canvas50 = document.getElementById('canvas50');
const ctx50 = canvas50.getContext('2d');
const myImg12 = document.getElementById('balloons');
ctx50.drawImage(myImg12, 0, 0);

const imgData5 = ctx50.getImageData(0, 0, canvas50.width, canvas50.height);
// console.log(imgData5.data);

for(let i = 0; i < imgData5.data.length; i += 4) {
  imgData5.data[0+i] = 255 - imgData5.data[0+i]; 
  imgData5.data[1+i] = 255 - imgData5.data[1+i];
  imgData5.data[2+i] = 255 - imgData5.data[2+i];
}

ctx50.putImageData(imgData5, 0, 0);


/* ctx51 */
const canvas51 = document.getElementById('canvas51');
const ctx51 = canvas51.getContext('2d')
const myImg13 = new Image();
myImg13.src = 'img/tree.jpg';
myImg13.onload = function(){
  ctx51.drawImage(myImg13, 0, 0);
  const imgData7=ctx51.getImageData(0,0,canvas51.width,canvas51.height);


for(let i=0; i<imgData7.data.length; i+=4){
  imgData7.data[0+i]=255-imgData7.data[0+i];
  imgData7.data[1+i]=255-imgData7.data[1+i];
  imgData7.data[2+i]=255-imgData7.data[2+i];
}

ctx51.putImageData(imgData7,0,0);
ctx51.font='bold 5rem Arial,sans-serif';
ctx51.textAlign='center'; ctx51.textBaseline='middle';
ctx51.fillStyle= gra6;
ctx51.fillText('Palm Trees',230,230);
}




/* ctx52 */
const canvas52 = document.getElementById('canvas52');
const ctx52 = canvas52.getContext('2d');

ctx52.fillStyle = 'coral';
ctx52.fillRect(0,0,200,200);

ctx52.fillStyle = 'lightblue';
ctx52.fillRect(20,20,160,160);

const imgData6 = ctx52.getImageData(0,0,200,200);
ctx52.putImageData(imgData6,250,150,50,50,100,100);


/* ctx53 */
const canvas53 = document.getElementById('canvas53');
const ctx53 = canvas53.getContext('2d');
let x53 =0; let y53 =0;
ctx53.fillStyle = gra6;

moveRect();
function moveRect(){
  ctx53.clearRect(0,0,canvas53.width,canvas53.height);
  ctx53.fillRect(x53,y53,50,50);
  x53+=3; y53+=3;
  if(y53 >= canvas53.height){
    x53 = 0; y53 =0;
  }
  requestAnimationFrame(moveRect);
}

/* ctx54 */
const canvas54 = document.getElementById('canvas54');
const ctx54 = canvas54.getContext('2d');
let x54 = 0 , y54 = 0;
ctx54.fillStyle = gra4;

blur();
function blur(){
  ctx54.fillStyle = 'rgba(0,0,0,.2)';
  ctx54.fillRect(0,0,canvas54.width,canvas54.height);
  ctx54.fillStyle = gra4;
  ctx54.beginPath();
  ctx54.arc(x54,y54,50,0,Math.PI*2);
  ctx54.fill();
  x54+=4; y54+=3;
  if(y54 >= canvas54.height+50){
    x54=0; y54=0;
  }
  requestAnimationFrame(blur);
}

/* ctx55 */
const canvas55 = document.getElementById('canvas55');
const ctx55 = canvas55.getContext('2d');
let num55=1;
ctx55.fillStyle =gra4;

rotateRect();
function rotateRect(){
  ctx55.save();
  ctx55.fillStyle = 'rgba(100,100,150,.1)';
  ctx55.fillRect(0,0,canvas55.width,canvas55.height);
  ctx55.fillStyle = gra4;
  ctx55.translate(canvas55.width/2,canvas55.height/2);
  ctx55.rotate(num55*(Math.PI/180));
  ctx55.translate(-canvas55.width/2,-canvas55.height/2);
  ctx55.fillRect(250,100,100,200);
  ctx55.restore();

  num55+=2;
  if(num55>=360){
    num55=1;
  }
  requestAnimationFrame(rotateRect);
}

/* ctx56 */
const canvas56 = document.getElementById('canvas56');
const ctx56 = canvas56.getContext('2d');
let num56=1;

rotateCircle();
function rotateCircle(){
  ctx56.save();
  ctx56.fillStyle='rgba(0,0,0,.1)';
  ctx56.fillRect(0,0,canvas56.width,canvas56.height);
  ctx56.fillStyle='lightblue';
  ctx56.beginPath();
  ctx56.arc(canvas56.width/2,canvas56.height/2,100,0,Math.PI*2);
  ctx56.translate(canvas56.width/2, canvas56.height/2);
  ctx56.fill();
  
  ctx56.rotate((Math.PI/180)*num56);
  ctx56.translate(-180,-150);
  ctx56.fillStyle = gra6;
  ctx56.beginPath();
  ctx56.arc(canvas56.width/2,canvas56.height/2,30,0, Math.PI * 2);
  ctx56.fill();
  ctx56.restore();
  
  num56+=2;
  if(num56>=360){
    num56= 1;
  }
  requestAnimationFrame(rotateCircle);

};


/* ctx58 */
const canvas58 = document.getElementById("canvas58");
const ctx58 = canvas58.getContext("webgl");
ctx58.clearColor(.2,0,1,.2);
ctx58.clear(ctx58.COLOR_BUFFER_BIT);


// jcanvas

$('#canvas57').drawArc({
  fillStyle: 'gold',
  x: 150, y: 150,
  radius: 100
}).drawArc({
  fillStyle: 'coral',
  x: 250, y: 250,
  radius: 150
}).drawArc({
  fillStyle: 'linen',
  x: 300, y: 100,
  radius: 80
});

$('#canvas57').drawPolygon({
  fillStyle: 'rgba(0,0,0,.8)',
  strokeStyle: '#f60',
  strokeWidth: 10,
  x: 250, y: 260,
  radius: 100,
  sides: 3,
  concavity: -0.5,
  rotate: 200
});

//Three
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 50, canvas58.width / canvas58.height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( canvas58.width, canvas58.height );
document.getElementById('three').appendChild( renderer.domElement );
document.getElementById('three').querySelector('canvas').style.display= 'inline-block';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 'coral' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera );
}

animate();

//Ripples
$('#rip').ripples({
	resolution: 512,
	dropRadius: 10,
	perturbance: 0.04,
});
