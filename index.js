function calcularPrecio(precioBase, descuento) {
  if (precioBase <= 0 || descuento < 0 || descuento > 100) {
    return "Los valores ingresados son inválidos";
  } else if (descuento === 0) {
    return precioBase;
  } else {
    const precioFinal = precioBase * (1 - descuento / 100);
    return "El precio final con descuento es: " + precioFinal;
  }
}

