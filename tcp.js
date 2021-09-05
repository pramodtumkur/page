var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let drawLine = (startx, starty, endx,endy) =>{

    ctx.beginPath();
    ctx.moveTo(startx, starty);
    ctx.lineTo(endx, endy);
    ctx.stroke();

};


let drawCircle = (centerx, centey, radius, startingangle, endingangle,color) => {
    ctx.beginPath();
    ctx.arc(centerx, centey, radius, startingangle, endingangle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
};


drawCircle(250,250,150,0,2*Math.PI, "transparent");


let eyes = (radius, color) =>{

    drawCircle(300,200,radius, 0, 2*Math.PI, color);

    drawCircle(200,200,radius, 0, 2*Math.PI, color);
};


eyes(15, "brown");


let drawRandomFace =() =>{};


/*
drawLine(250, 150,250,350);
drawLine(250, 200,150,150);
drawLine(250, 200,350,150);
drawLine(250, 350,225,450);
drawLine(250, 350,275,450);
*/


