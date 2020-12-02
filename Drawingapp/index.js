const canvas = document.getElementById('canvas')
const decrese = document.getElementById('decrese')
const increse = document.getElementById('increse')
const sizeel = document.getElementById('size')
const colorel = document.getElementById('color')

var ctx = canvas.getContext("2d");
let size = 5;
let color = 'black';
let x = undefined;
let y = undefined;
let ispressed = false;

canvas.addEventListener('mousedown',(e)=>{
    ispressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup',()=>{
    ispressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove',(e)=>{    
    if(ispressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        // drawcircle(x2,x2);
        drawline(x,y,x2,y2)
        x = x2;
        y = y2;
    }
})

function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);  
    ctx.fillStyle = color;
    ctx.fill();
}

function drawline(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);  
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

increse.addEventListener('click',()=>{
    size+=2;
    if(size > 50){
        size = 50;
    }
    sizeel.innerText = size
})

decrese.addEventListener('click',()=>{
    size-=2;
    if(size < 5){
        size = 5;
    }
    sizeel.innerText = size
})
colorel.addEventListener('change',(e)=>{
    color = e.target.value;
})