
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById ("amigo");
    let nombreAmigo = inputAmigo.value;

    //console.log (amigo);
    //! se usa para la negación otra forma es: if (nombreAmigo == false) {
    if (!nombreAmigo) {
         alert ("Tienes que ingresar un nombre");
         return; // si no hace retorno no se para la ejecución del código
   }
   
   amigo.push(nombreAmigo);
   inputAmigo.value = ""; //limpiar campo de texto
   inputAmigo.focus(); // Se queda enfocado en el campo del texto
   //console.log(amigo);
   renderizarAmigos();
}

   function renderizarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        lista.appendChild(item);

    }
   }

   function sortearAmigo(){
    if (amigo.length === 0) {
     alert("Tienes que agregar nombres de amigos");
     return;  // .js lee por líneas si ve que hay una condición no sigue leyendo
    } 
    let sorteoDeAmigo = amigo[Math.floor(Math.random() * amigo.length)]; 
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = `${sorteoDeAmigo} es el amigo sorteado`;
    
    let limpiar = document.getElementById("listaAmigos");
    limpiar.innerHTML = ""; //no agrega los nombres de la lista en la pantalla
 }
