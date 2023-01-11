const carrito = [];

const contenedorProductos = document.querySelector(".contenedorProductos");

let botonAgregar = document.getElementsByTagName("button");

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

botonAgregar.addEventListener("click", function () {
  // este consolelog es de prueba👇 pero no se porque no me anda el onclick en esos botones, ya probe getElementById, classname, queryselector pero nose que onda...
  console.log("hola");
  carrito.push(productos.id);
  // ya aca arriba estaba pensando en hacer un push al array carrito usando el boton de agregar
});
