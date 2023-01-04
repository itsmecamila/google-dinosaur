const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
context.globalCompositeOperation = 'destination-over';

//---------------------------DINO---------------------------

const dinoImg =  new Image();
dinoImg.src = "images/dino/dino(1).PNG";
setInterval(() => {
    dinoImg.src = "imagens/dino/dino(1).PNG";
},100)

setInterval(()=> {
    dinoImg.src = "images/dino/dino(2).PNG";
},200)

let dino = {
    x: 30,
    y: 165,
    w: 50,
    h: 55,
}

function game(){
    update()
    render()
    requestAnimationFrame(game)
}

requestAnimationFrame(game)

function update(){

}

//--------------------CACTUSES-----------

const cactus1Img = new Image();
cactus1Img.src = "images/cactus/cactus1.PNG";

let cactus1 = {
    x: getRandomInt(400,500),
    y: 167,
    w: 30,
    h: 55,
}

const cactus2Img = new Image();
cactus2Img.src = "images/cactus/cactus2.PNG";

let cactus2 = {
    x: getRandomInt(900,1100),
    y: 167,
    w: 50,
    h: 55,
}

const cactus3Img = new Image();
cactus3Img.src = "images/cactus/cactus3.PNG";

let cactus3 = {
    x:
    y:
    w:
    h:
}



//--------------------GET RANDOM NUMBER-----------
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)+ min);
}

function game(){
    update()
    render()
    requestAnimationFrame(game)
}
requestAnimationFrame(game)


let randomCactus1Spawn = 0;
let randomCactus2Spawn = 0;

function moveCactuses(){
    cactus1.x -= cactusSpeed;
    cactus2.x -= cactusSpeed;

    if(cactus1.x <= -20){
        cactus1.x = getRandomInt(600,1000)
    } else if(cactus2.x <= -20){
        cactus2.x = getRandomInt(600,1400)
    
    }
    checkCactusDistance();
}

function checkCactusDistance(){
if( cactus2.x - cactus1.x <= 200 && cactus2.x > cactus1.x){
    cactus2.x += 200;
} else if(cactus1.x - cactus2.x <= cactus1.x > cactus2.x){
    cactus1.x == 200;
}
}

function update(){
    moveCactuses();

}



//--------------------RENDER ALL-----------



function renderCactus(){
    context.drawImage(cactus1Img, cactus1.x, cactus1.y, cactus1.w, cactus1.h)
    context.drawImage(cactus2Img, cactus2.x, cactus2.y, cactus2.w, cactus2.h)
}


function renderDino(){
    context.drawImage(dinoImg, dino.x, dino.y, dino.w, dino.h)
}

function render(){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.beginPath();
    renderDino();
    renderCactus();
    context.closePath();
}
