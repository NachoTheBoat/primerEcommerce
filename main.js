const carrito = [];
let producto = "";
let precio = 0;
let cantidad = 0;
let cantidadTotal = 0; // Mostrar despues
let seguirComprando = false;
let precioTotal = 0;

const contenedorProductos = document.querySelector(".contenedorProductos");

function cargarProductos() {
  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src="${producto.imagen}" class="productoImagen" alt="" />
        <div>
          <h3 class="productoTitulo">${producto.nombre}</h3>
          <p class="prdoductoPrecio">$${producto.precio}</p>
          <button  class="productoAgregar" id="${producto.id}" )>agregar</button>
        </div>
      </div>
    `;
    contenedorProductos.append(div);
  });
}

cargarProductos();

let edad = prompt(
  "bienvenido al ecommerce de bebidas the boat, ingrese su edad"
);
if (edad < 18) {
  alert("No tenes edad suficiente para comprar en bebidas the boat");
} else {
  alert("bienvenidx");
}

let edadUsuario = edad;

if (edadUsuario >= 18) {
  const mostrarListaOrdenada = () => {
    const listaDeProductos = productos.map((producto) => {
      return "🍸 " + producto.nombre + " $" + producto.precio;
    });
    alert("Lista de precios:" + "\n\n" + listaDeProductos.join("\n"));
    // let elegirPoducto = prompt("Que producto desea comprar?");

    comprarProductos();
  };

  mostrarListaOrdenada();
} else {
  alert("vuelva pronto");
}
function comprarProductos() {
  do {
    producto = prompt("¿Que desas comprar?", "Ej: 6pack brahma");
    cantidad = parseInt(prompt("¿Cuántos querés comprar?"));

    while (Number.isNaN(cantidad) || cantidad === 0) {
      if (cantidad !== 0) {
        alert("Deber agregar un número.");
      } else {
        alert("Debe agregar un número distinto de cero.");
      }
      cantidad = parseInt(prompt("¿Cuántos querés comprar?"));
    }

    switch (producto) {
      case "agua":
        precio = 1200;
        break;
      case "6pack brahma":
        precio = 1728;
        break;
      case "6pack corona":
        precio = 2100;
        break;
      case "beefeeater 1lts":
        precio = 4515;
        break;
      case "Fernet":
        precio = 3000;
        break;
      case "Coca cola":
        precio = 400;
        break;
      default:
        alert("Alguno de los datos ingresados no es correcto");
        precio = 0;
        cantidad = 0;
    }
    precioTotal += precio * cantidad;
    cantidadTotal += cantidad;

    seguirComprando = confirm("¿Querés agregar otro producto?");
  } while (seguirComprando);

  alert(`A comprado ${cantidadTotal} productos y el total es $${precioTotal}`);

  let finalizarCompra = confirm("¿Desea finalizar la compra?");

  if (finalizarCompra) alert("Su compra se ha realizado con éxito!");
  if (!finalizarCompra) alert("Esperamos volver a verlo pronto!");
}
