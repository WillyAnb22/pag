const articulo = [
    {
        name: "Planta",
        precio: 1200,
        img: "./img/pla1.png",
    },
    {
        name: "Girasol",
        precio: 1200,
        img: "./img/pla2.png",
    },
    {
        name: "PLANTA",
        precio: 1200,
        img: "./img/pla3.png",
    },
    {
        name: "PALMERA",
        precio: 1200,
        img: "./img/pla4.png",
    },
    {
        name: "CACTUS",
        precio: 1200,
        img: "./img/pla5.png",
    },
    {
        name: "PLANTA",
        precio: 1200,
        img: "./img/pla6.png",
    },
    {
        name: "PLANTA",
        precio: 1200,
        img: "./img/pla7.png",
    },
    {
        name: "PLANTA",
        precio: 1200,
        img: "./img/pla8.png",
    },
    {
        name: "PLANTA",
        precio: 1200,
        img: "./img/pla9.png",
    },
];

let data = [];

function enviar(nombre, precio, img) {
    let datos = {
        nombre: nombre,
        precio: precio,
        img: img
    };
    data.push(datos);
    pintar();
}
function pintar() {
    let tableBody = document.getElementById("listadatos");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    data.forEach((item, i) => {
        let fila = document.createElement("tr");

        let titulo = document.createElement("td");
        titulo.textContent = item.nombre;
        fila.appendChild(titulo);

        let precio = document.createElement("td");
        precio.textContent = item.precio * item.cantidad;
        fila.appendChild(precio);

        let imagen = document.createElement("td");
        let img = document.createElement("img");
        img.src = item.img;
        imagen.appendChild(img);
        fila.appendChild(imagen);


        let cantidad = document.createElement("td");
        cantidad.textContent =item.cantidad
        fila.appendChild(cantidad);

        let boton = document.createElement("button")
        boton.textContent = "x"
        fila.appendChild(boton)
        document.getElementById("listadatos").appendChild(fila);
    });
}

let card = document.getElementById("card-template");
articulo.forEach((x, index) => {
    card.innerHTML += ` 
            <div class="col">
              <div card="cardto">
                <img src="${x.img}" class="cardfoto" alt="${x.name}">
                <div class="card-body">
                  <h5 class="card-title text-center">${x.name}</h5>
                  <p class="card-text text-center">${x.precio}</p>
                </div>
                <div class="enviar">
                  <button onclick="enviar('${x.name}', ${x.precio}, '${x.img}');" class="btn-buy">COMPRAR</button>
                </div> 
              </div>
            </div>
            `;
});

let carrito = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
