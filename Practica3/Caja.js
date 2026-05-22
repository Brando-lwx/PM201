let pedidoActual = [];
const IVA = 0.16;


export function agregarPedido(pedido) {

    pedidoActual.push(pedido);

    console.log(
        `Pedido recibido: ${pedido.nombre} (x${pedido.cantidad || 1}) - $${pedido.precio}`
    );
}


export function mostrarPedidos() {

    console.log("\n=--Pedidos---");

    if (pedidoActual.length === 0) {

        console.log("No hay pedidos registrados.");

    } else {

        console.table(pedidoActual);

    }
}


function calcularTotales() {

    const subtotal = pedidoActual.reduce((acumulador, pedido) => {

        return acumulador + pedido.precio;

    }, 0);

    const ivaCalculado = subtotal * IVA;

    const totalAcumulado = subtotal + ivaCalculado;

    return {
        subtotal,
        ivaCalculado,
        totalAcumulado
    };
}


export function mostrarTotal() {

    
    const {
        subtotal,
        ivaCalculado,
        totalAcumulado
    } = calcularTotales();

    console.log("\n=------Ticket--------");

    console.log(`Subtotal: $${subtotal}`);
    console.log(`IVA (16%): $${ivaCalculado}`);
    console.log(`Total acumulado: $${totalAcumulado}`);
}


export function finalizarCompra() {

    mostrarTotal();

    console.log("\n✅ Compra finalizada.");

    
    pedidoActual = [];
}


function mostrarMenuCaja() {

    console.log(`----Caja----
  1. Ver todos los pedidos
  2. Ver total acumulado
  3. Finalizar compra
  4. Volver al menú principal`);
}


function pregunta(rl, texto) {

    return new Promise((resolve) => rl.question(texto, resolve));

}


export async function menuCaja(rl) {

    let enMenu = true;

    while (enMenu) {

        mostrarMenuCaja();

        const opcion = await pregunta(rl, "Elige una opción: ");

        switch (opcion) {

            case '1':

                mostrarPedidos();
                break;

            case '2':

                mostrarTotal();
                break;

            case '3':

                finalizarCompra();
                break;

            case '4':

                enMenu = false;
                break;

            default:

                console.log("Opción no válida.");
        }
    }
}