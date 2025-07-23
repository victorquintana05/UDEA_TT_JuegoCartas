let repartio = false;
let cartas = [];
function repartir() {
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    const TOTAL_CARTAS = 10;
    cartas = []
    for (let i = 0; i < TOTAL_CARTAS; i++) {
        let carta = document.createElement("img");
        let indice = Math.floor(Math.random() * 52) + 1;
        cartas.push(indice);
        carta.src = "imagenes/cartas/Carta" + indice + ".jpg";
        tablero.appendChild(carta);

    }
    const audio = new Audio("sonidos/repartir.mp3");
    audio.play().then(() => {
        window.alert("Se han repartido 10 cartas")

    })
    repartio = true;
}
function verificar() {
    if (!repartio) {
        window.alert("no se han repartido")
    }
    else {
        //iniciar los contadores en 0
        contadores = new Array(13).fill(0);
        //recorrer la lista de las cartas
        for (let i = 0; i < cartas.length; i++) {
            let posicion = cartas[i] % 13;
            if (posicion == 0) {
                posicion = 12;
            }
            else {
                posicion--;
            }
            contadores[posicion]++;
        }
        nombreCartas = ["As", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Jack", "Queen", "King"]
        //recorrer los contadores
        let mensaje = "Se encontraron los siguientes grupos:\n";
        grupos=["Vacio", "Non", "Par", "Terna"," Cuarta", "Quinta", "Sexta", "Séptima", "Octava", "Novena", "Decima"]
        for (let i = 0; i < contadores.length; i++) {
            if(contadores[i] >= 2){
                mensaje += grupos[ contadores[i]] + " de " + nombreCartas[i]+"\n";
            }
        }
        window.alert(mensaje);
    }
}