/*Tarea 1
Ejercicio 1:
Escribir una función a la que se pasa como parámetro un número entero 
y devuelve como resultado un texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función*/

function parImpar(valor)
{
	if (valor %2 ==0)
	{
		return console.log("El numero " + valor + " es Par");
	}
	else
	{
		return console.log("El numero " + valor + " es impar");
	}
}


/*
Ejercicio 2:
Según este string "abcdefghijklmnñopqrstuvwxyz", hacer una función que recibe un parámetro 
(un caracter o una letra), y la función me debe devolver en qué posición 
en la cadena del string se encuentra el caracter entregado como argumento. 
Para realizar esto deben buscar en el prototipo String
 */

function posicionEnString(caracter)
{
	
	var base = "abcdefghijklmnñopqrstuvwxyz";

	return base.indexOf(caracter, 0)


}

/*
Ejercicio 3:
Hacer una función que reciba un precio, y este me devuelva el precio con impuesto de 0.19%. 
Si yo ingreso 1000 a la función, me debería retornar con el formato 
"El precio con impuesto es de $1190"
 */

function precioImpuesto(precio)
{
	var iva = 0.19;
	var conImpuesto = precio + (precio * iva);

	return console.log("El precio (" + precio + ") con impuesto es de: " + conImpuesto);
}
/*
Ejercicio 4:
Hacer un closure con contexto de "una persona tira un dado". Es decir, yo le entrego un nombre, 
por ejemplo:
var dadoJulio = nuevoDado('julio')
Y que la respuesta de dadoJulio() sea:
dadoJulio() -> "Julio tiró un dado y salió 6" dadoJulio() -> "Julio tiró un dado y salió 3" dadoJulio() -> "Julio tiró un dado y salió 5"
Por lo tanto, la respuesta del closure debe ser aleatoria y el dado debe ser de 6 caras (osea del 1 al 6).
*/
function nuevoDado(nombre)
{
	
	var aleatorio = Math.floor(Math.random()* 7 );

	while (aleatorio <1 || aleatorio > 6)
	{
		aleatorio = Math.floor(Math.random()* 7 );
	}
	
	function metodoAleatorio(){
		aleatorio =  Math.round(aleatorio);
		return console.log(nombre + " Tiró un dado y le salió: " + aleatorio);
	}

	return metodoAleatorio;
	
}

/*
Ejercicio 5:
Generar un prototipo llamado Persona que va a recibir 2 argumentos (nombre completo y edad). 
El prototipo debe tener un método que sea guardarEnLocalStorage y guardarEnSessionStorage, 
estos métodos deben guardar nombre completo y edad en el local storage y session storage. 
Al guardar estos elementos, deben visualizarse a través del debugger de chrome 
o de algún otro browser.
 */

function Persona(nombre_completo, edad)
{
	this.nombre_completo = nombre_completo;
	this.edad = edad;

	guardarEnSessionStorage(nombre_completo, edad);
	guardarEnLocalStorage(nombre_completo,edad);
}

function guardarEnLocalStorage(nombre_completo, edad)
{
	localStorage.setItem('nombre_completo', nombre_completo);
	localStorage.setItem('edad', edad);
	
}

function guardarEnSessionStorage(nombre_completo, edad)
{
	sessionStorage.setItem('nombre_completo', nombre_completo);
	sessionStorage.setItem('edad', edad);

}
