function Multiplicar (){
var num1 = 1;
var num2 = Number(document.getElementById(`num2`).value);
var num3 = 2;
var num4 = Number(document.getElementById(`num4`).value);
var num5 = 5;
var num6 = Number(document.getElementById(`num6`).value);
var num7 = 10;
var num8 = Number(document.getElementById(`num8`).value);
var num9 = 20;
var num10 = Number(document.getElementById(`num10`).value);
var num11 = 50;
var num12 = Number(document.getElementById(`num12`).value);
var num13 = 100;
var num14 = Number(document.getElementById(`num14`).value);
var num15 = 200;
var num16 = Number(document.getElementById(`num16`).value);
var num17 = 500;
var num18 = Number(document.getElementById(`num18`).value);
var num19 = 1000;
var num20 = Number(document.getElementById(`num20`).value);
var num21 = 0.50;
var num22 = Number(document.getElementById(`num22`).value);
var resultado = (num1 * num2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado2 = (num3 * num4).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado3 = (num5 * num6).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado4 = (num7 * num8).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado5 = (num9 * num10).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado6 = (num11 * num12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado7 = (num13 * num14).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado8 = (num15 * num16).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado9 = (num17 * num18).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado10 = (num19 * num20).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado12 = (num21 * num22).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');
var resultado11 = ((num1 * num2) + (num3 * num4) + (num5 * num6) + (num7 * num8) + (num9 * num10) + (num11 * num12) +
                    (num13 * num14) + (num15 * num16) + (num17 * num18) + (num19 * num20) + (num21 * num22)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,',');

document.getElementById(`resultado`).value = resultado
document.getElementById(`resultado2`).value = resultado2
document.getElementById(`resultado3`).value = resultado3
document.getElementById(`resultado4`).value = resultado4
document.getElementById(`resultado5`).value = resultado5
document.getElementById(`resultado6`).value = resultado6
document.getElementById(`resultado7`).value = resultado7
document.getElementById(`resultado8`).value = resultado8
document.getElementById(`resultado9`).value = resultado9
document.getElementById(`resultado10`).value = resultado10
document.getElementById(`resultado11`).value = resultado11
document.getElementById(`resultado12`).value = resultado12

function agregarSperadorMiles(numero){

}






localStorage.setItem('Numero',num1);
localStorage.getItem(`Numero`,num1);

}
 








