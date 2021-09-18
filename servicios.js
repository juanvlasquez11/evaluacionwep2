let uri = "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"
let token = " Bearer BQDRynTyw4s9moCnlbKXgwR0LlRBZyXQVnDEuqNED-nWCYaJFzqCNH7TJZdzs2grAU8pDpiqbegt3p5xlj85eR8h6oFHLKFm9hIO6r_bLqitsjQKHkCRsGo-lRcbATH4-o5PYt-73RBLaYVYfYdAPw1phNE2H3E"
let parametrosPeticion = {
    method: "GET",
    headers: {
        Authorization: token
    }
}

fetch(uri, parametrosPeticion)
    .then(function(respuesta) {
        return (respuesta.json());
    })

.then(function(respuesta) {
    console.log(respuesta);
    pintarDatos(respuesta.tracks);
}).catch(function(error) {
    console.log(error);
})

function pintarDatos(datos) {
    let fila = document.getElementById("fila");
    datos.forEach(function(cancion) {

        let columna = document.createElement("div");
        columna.classList.add("col")


        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")


        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = cancion.album.images[0].url;


        let titulo = document.createElement("h1");
        titulo.textContent = cancion.name


        let audio = document.createElement("audio")
        audio.classList.add("w-100");
        audio.setAttribute("controls", "controls")
        audio.src = cancion.preview_url;



        tarjeta.appendChild(imagen)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(audio)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}