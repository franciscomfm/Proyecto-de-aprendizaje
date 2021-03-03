
/* 
Operadores: 
+= Incremento
-= Decremento
*=Multiplica
/=Divide
++Icremento en 1
--Decremento en 1





alert ("Hola alumnos");
document.write("hola alumnos");




var nombre="Francisco";
var puntuacion=0;
var record;
record=5000;
alert(nombre);



//Calculadora javascript

alert(5+6*3);
alert((5+6)*3);


//Variables

var precioUnidad, cantidad, total;
precioUnidad=5;
cantidad=100;
total=precioUnidad*cantidad;

alert("El importe total de la compra es: " + total + "$");




var camisetas, pantalones, totalArticulos;

camisetas="5"

Pantalones=5

totalArticulos= Number (camisetas) + pantalones;

alert(totalArticulos);


//Variables

var nombre="Francisco";

var apellido="Fernández";

document.write("<p>");

document.write(nombre +  " " + apellido);

document.write("</p>");


//Introduce por teclado





var nombre=prompt("Introduce tu nombre por favor");

var apellido=prompt("Introduce tu apellido por favor");

document.write("<p>");

document.write(nombre +  " " + apellido);

document.write("</p>");






var nombre=prompt("Introduce tu nombre por favor");

var apellido=prompt("Introduce tu apellido por favor");

document.write("<p>");

document.write("bienvenido: " + nombre +  " " + apellido);

document.write("</p>");


//Aprendiendo javascript


var nombre=prompt("Introduce tu nombre por favor");

var apellido=prompt("Introduce tu apellido por favor");

var edad=prompt("Introuce tu edad");

var restando=prompt("¿Cuantos años deseas quitarte?");

edad-=restando;

document.write("<p>");

document.write("bienvenido: " + nombre +  " " + apellido + "<br/>" + "te gustaria tener" + edad + "años");

document.write("</p>");
 







//Propiedades length, metodo push, metodo unshift, metodo pop, metodo shift



var articulos=["zapatillas", "camiseta", "pantalon", "calcetines"];

var articulos=new Array("zapatillas", "camiseta", "pantalon", "calcetines");

var articulos=[];



document.write("<p> El primer artículo es <strong>");

document.write(articulos[0] + "</strong></p>");

alert(articulos.length);




var articulos=["zapatillas", "camiseta", "pantalon", "calcetines"];

var articulos=new Array("zapatillas", "camiseta", "pantalon", "calcetines");

var articulos=[];

document.write("<p> El primer artículo es <strong>");

document.write(articulos[0] + "</strong></p>");

document.write("<p> El último elemento es <strong>");
    
document.write(articulos[articulos.length-1] + "</strong></p>");

articulos.unshift("balón");

document.write("<p> Casi nos olvidamos!!! Agregamos este elemento: <strong>");

document.write(articulos[0] + "</strong></p>");

document.write("<p> Agreguemos un elemento más al final: <strong>");

articulos.push("raqueta");

document.write(articulos[articulos.length-1] + "</strong></p>");









//Jugando con las arrays


var articulos=["zapatillas", "camiseta", "pantalon", "calcetines"];

var articulos=new Array("zapatillas", "camiseta", "pantalon", "calcetines");

var articulos=[];

 document.write("<p> El primer artículo es <strong>");

document.write(articulos[0] + "</strong></p>");

document.write("<p> El último elemento es <strong>");

document.write(articulos[articulos.length-1] + "</strong></p>");

articulos.unshift("balón");

document.write("<p> Casi nos olvidamos!!! Agregamos este elemento: <strong>");

document.write(articulos[0] + "</strong></p>");

document.write("<p> Agreguemos un elemento más al final: <strong>");

articulos.push(prompt("Introduce el articulo"));

document.write(articulos[articulos.length-1] + "</strong></p>");

document.write("<p>" +  articulos[0] + "<br/>");

document.write(articulos[1] + "<br/>");

document.write(articulos[2] + "<br/>");

document.write(articulos[3] + "<br/>");

document.write(articulos[4] + "<br/>");

document.write(articulos[5] + "<br/></p>");

alert("Borraremos el primer elemento");

articulos.shift();

document.write("<p>" +  articulos[0] + "<br/>");

document.write(articulos[1] + "<br/>");

document.write(articulos[2] + "<br/>");

document.write(articulos[3] + "<br/>");

document.write(articulos[4] + "<br/></p>");

alert("Ahora borraremos el último");

articulos.pop();

document.write("<p>" +  articulos[0] + "<br/>");

document.write(articulos[1] + "<br/>");

document.write(articulos[2] + "<br/>");

document.write(articulos[3] + "<br/></p>");



//POO

<input type="button" id="boton1">

var miboton=document.getElementById("boton1");

miboton.style.width="300px";



<input type="button" id="boton1">

<input type="button" id="boton2">

<input type="text" id="micuadro">



var miboton=document.getElementById("boton1");

 var miboton2=document.getElementById("boton2");
 var cuadroTexto=document.getElementById("micuadro");

 //Propiedades orientados a objetos

  miboton.style.width="300px";

  miboton.style.height="300px";

 miboton2.style.width="300px";

 miboton2.style.height="300px";



cuadroTexto.style.background="red";

 cuadroTexto.value="Escriba aquí....";

 cuadroTexto.style.height="200px";   

//miboton.style.backgroundColor="blue";

//Metodos orientados a objetos

miboton2.focus();


//Condicionales y bucles
















*/