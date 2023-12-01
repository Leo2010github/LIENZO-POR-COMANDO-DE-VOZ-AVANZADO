var figurasX = 0;
var figurasY = 0;
var figurasX1 = 0;
var figurasY1 = 0;
var figurasX2 = 0;
var figurasY2 = 0;
var figurasX3 = 0;
var figurasY3 = 0;
var doble = 0;
var circulo = "";
var cuadrado = "";
var ReconocerVoz = window.webkitSpeechRecognition;
var Mivoz = new ReconocerVoz();
function preload(){

}
function setup(){
    canvas = createCanvas(500, 350);
    canvas.center();
}
function draw(){
    if (circulo == "true1") {
        fill("blue");
        stroke("black");
        circle(figurasX, figurasY, 10);
        document.getElementById("Voz").innerHTML = "Circulo Dibujado";
        circulo = "";
    }
    if (circulo == "true2") {
        fill("blue");
        stroke("black");
        circle(figurasX, figurasY, 10);
        fill("red");
        stroke("black");
        circle(figurasX1, figurasY1, 10);
        document.getElementById("Voz").innerHTML = "Circulo Dibujado";
        circulo = "";
    }
    if (circulo == "true3") {
        fill("blue");
        stroke("black");
        circle(figurasX, figurasY, 10);
        fill("red");
        stroke("black");
        circle(figurasX1, figurasY1, 10);
        fill("green");
        stroke("black");
        circle(figurasX2, figurasY2, 10);
        document.getElementById("Voz").innerHTML = "Circulo Dibujado";
        circulo = "";
    }
    if (circulo == "true4") {
        fill("blue");
        stroke("black");
        circle(figurasX, figurasY, 10);
        fill("red");
        stroke("black");
        circle(figurasX1, figurasY1, 10);
        fill("green");
        stroke("black");
        circle(figurasX2, figurasY2, 10);
        fill("yellow");
        stroke("black");
        circle(figurasX3, figurasY3, 10);
        document.getElementById("Voz").innerHTML = "Circulo Dibujado";
        circulo = "";
    }
}
function Microfono(){
    document.getElementById("Voz").innerHTML = "Hable";
    Mivoz.start();
}
Mivoz.onresult = function(event){
console.log(event);
Rvoz = event.results[0][0].transcript;
document.getElementById("Voz").innerHTML = Rvoz;
if (Rvoz == "Pizza" || Rvoz == "Pizza." || Rvoz == "pizza") {
    figurasX = Math.floor(Math.random() * 450);
    figurasY = Math.floor(Math.random() * 300);
    document.getElementById("Voz").innerHTML = "Dibujando Circulo...";
    circulo = "true1";
}
if (Rvoz == "Chocolate" || Rvoz == "Chocolate." || Rvoz == "chocolate") {
    figurasX = Math.floor(Math.random() * 450);
    figurasY = Math.floor(Math.random() * 300);
    figurasX1 = Math.floor(Math.random() * 450);
    figurasY1 = Math.floor(Math.random() * 300);
    document.getElementById("Voz").innerHTML = "Dibujando Circulo...";
    circulo = "true2";
}
if (Rvoz == "Sprite" || Rvoz == "Sprite." || Rvoz == "sprite") {
    figurasX = Math.floor(Math.random() * 450);
    figurasY = Math.floor(Math.random() * 300);
    figurasX1 = Math.floor(Math.random() * 450);
    figurasY1 = Math.floor(Math.random() * 300);
    figurasX2 = Math.floor(Math.random() * 450);
    figurasY2 = Math.floor(Math.random() * 300);
    document.getElementById("Voz").innerHTML = "Dibujando Circulo...";
    circulo = "true3";
}
if (Rvoz == "Banana" || Rvoz == "Banana." || Rvoz == "banana") {
    figurasX = Math.floor(Math.random() * 450);
    figurasY = Math.floor(Math.random() * 300);
    figurasX1 = Math.floor(Math.random() * 450);
    figurasY1 = Math.floor(Math.random() * 300);
    figurasX2 = Math.floor(Math.random() * 450);
    figurasY2 = Math.floor(Math.random() * 300);
    figurasX3 = Math.floor(Math.random() * 450);
    figurasY3 = Math.floor(Math.random() * 300);
    document.getElementById("Voz").innerHTML = "Dibujando Circulo...";
    circulo = "true4";
}
}