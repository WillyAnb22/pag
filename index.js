const articulo = [
    {
        name: "Planta",
        precio: $17.000,
        img: "./img/pla1.png",
    },
    {
        name: "Girasol",
        precio: $30.000,
        img: "./img/pla2.png",
    },
    {
        name: "PLANTA",
        precio: $20.000,
        img: "./img/pla3.png",
    },
    {
        name: "PALMERA",
        precio: $100.000,
        img: "./img/pla4.png",
    },
    {
        name: "CACTUS",
        precio: $15.000,
        img: "./img/pla5.png",
    },
    {
        name: "PLANTA",
        precio: $12.000,
        img: "./img/pla6.png",
    },
];

let card = document.getElementById("card-template");
articulo.map((x) => {
    card.innerHTML += ` 
    <div class="col">
    <div class="card h-100">
      <img src="${x.img}" class="card-img-top" alt="${x.name}">
      <div class="card-body">
        <h5 class="card-title text-center text-primary">${x.name}</h5>
        <p class="card-text">${x.precio}</p>
      </div>
      <div class="card-footer">
        <button href="${x.btn}"class="text-body-secondary">COMPRAR</button>
      </div>
    </div>
  </div>  
`
})
