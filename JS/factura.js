function aplicarDescuento(categoria, precio = 0, cantidad) {
    const descuentoPorCategoria = {
        estudiantes: 0.2,
        trainee: 0.5,
        junior: 0.85,
    };

    return precio * Number(cantidad) * descuentoPorCategoria[categoria];
}

document.getElementById("resumen").addEventListener("click", function (event) {
    event.preventDefault();
    const { cantidad, categorias } = document.forms.cotizacion;

    document.getElementById(
        "total"
    ).innerText = `Total a pagar: $${aplicarDescuento(
        categorias.value,
        200,
        cantidad.value
    )}`;
});
