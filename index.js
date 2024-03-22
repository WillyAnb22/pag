const baseDeDatos = [
    {
        id: 1,
        name: "Lantana Blanca",
        precio: 20000,
        img: "./img/1.png"
    },
    {
        id: 2,
        name: "Girasol",
        precio: 15000,
        img: "./img/2.png"
    },
    {
        id: 3,
        name: "Orquidea",
        precio: 18000,
        img: "./img/3.png",
    },
    {
        id: 4,
        name: "PALMERA",
        precio: 30000,
        img: "./img/4.png",
    },
    {
        id: 5,
        name: "CACTUS",
        precio: 12000,
        img: "./img/5.png"
    },
    {
        id: 6,
        name: "Anturio Rojo",
        precio: 15000,
        img: "./img/6.png",
    },
    {
        id: 7,
        name: "Suculenta",
        precio: 10000,
        img: "./img/7.png",
    },
    {
        id: 8,
        name: "Margarita",
        precio: 15000,
        img: "./img/8.png",
    },
    {
        id: 9,
        name: "Jazmin",
        precio: 18000,
        img: "./img/9.png",
    },
];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-s');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.name;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.img);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.innerHTML = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.find((itemBaseDatos) => itemBaseDatos.id === parseInt(item));
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.filter((itemId) => itemId === item).length;
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const cantidad = document.createElement('span');
        cantidad.textContent = `${numeroUnidadesItem} x`;

        const nombre = document.createElement('span');
        nombre.textContent = miItem.name;

        const imagen = document.createElement('img');
        imagen.src = miItem.img;
        imagen.classList.add('carrito-imagen');

        const precio = document.createElement('span');
        precio.textContent = `${miItem.precio}${divisa}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn', 'btn-danger', 'mx-2');
        botonEliminar.textContent = 'X';
        botonEliminar.dataset.item = item;
        botonEliminar.addEventListener('click', borrarItemCarrito);

        miNodo.appendChild(cantidad);
        miNodo.appendChild(nombre);
        miNodo.appendChild(imagen);
        miNodo.appendChild(precio);
        miNodo.appendChild(botonEliminar);

        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

// function renderizarCarrito() {
//     // Vaciamos todo el html
//     DOMcarrito.textContent = '';
//     // Quitamos los duplicados
//     const carritoSinDuplicados = [...new Set(carrito)];
//     // Generamos los Nodos a partir de carrito
//     carritoSinDuplicados.forEach((item) => {
//         // Obtenemos el item que necesitamos de la variable base de datos
//         const miItem = baseDeDatos.filter((itemBaseDatos) => {
//             // ¿Coincide las id? Solo puede existir un caso
//             return itemBaseDatos.id === parseInt(item);
//         });
//         // Cuenta el número de veces que se repite el producto
//         const numeroUnidadesItem = carrito.reduce((total, itemId) => {
//             // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
//             return itemId === item ? total += 1 : total;
//         }, 0);
//         const miImg = baseDeDatos.filter((itemBaseDatos) => {
//             // ¿Coincide las id? Solo puede existir un caso
//             return itemBaseDatos.id === parseInt(item);
//         });
//         // Creamos el nodo del item del carrito
//         const miNodo = document.createElement('li');
//         miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
//         miNodo.textContent = `$${numeroUnidadesItem} x ${miItem[0].name} ${miImg[0].img} = ${miItem[0].precio}${divisa}`;
//         // Boton de borrar
//         const miBoton = document.createElement('button');
//         miBoton.classList.add('btn', 'btn-danger', 'mx-5');
//         miBoton.textContent = 'X';
//         miBoton.style.marginLeft = '1rem';
//         miBoton.dataset.item = item;
//         miBoton.addEventListener('click', borrarItemCarrito);
//         // Mezclamos nodos
//         miNodo.appendChild(miBoton);
//         DOMcarrito.appendChild(miNodo);
//     });
//     // Renderizamos el precio total en el HTML
//     DOMtotal.textContent = calcularTotal();
// }

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Buscamos la primera coincidencia del producto en el carrito y lo eliminamos
    const index = carrito.findIndex((item) => item === id);
    if (index !== -1) {
        carrito.splice(index, 1);
    }
    // volvemos a renderizar
    renderizarCarrito();
}
/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito
    const total = carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.find((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem.precio;
    }, 0)
    // Agregamos el símbolo de la moneda al inicio del total y lo devolvemos
    return divisa + total;
}


/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
// const cuentaCarritoElement = document.getElementById("cuenta-carrito");
// function actualizarNumeroCarrito() {
//     const memoria =
// }


