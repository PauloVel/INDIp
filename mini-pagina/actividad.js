document.addEventListener("DOMContentLoaded", function () {
  const botonMensaje = document.getElementById("btnMensaje");
  const botonEstado = document.getElementById("btnEstado");
  const mensajePrincipal = document.getElementById("mensajePrincipal");
  const estadoActividad = document.getElementById("estadoActividad");

  const mensajes = [
    "El café está listo para recibir a tu gato favorito.",
    "Las patitas están suaves, el ambiente está tranquilo y el ronroneo continúa.",
    "Un Cat Café es el lugar ideal para leer, descansar y sonreír.",
    "Cada visita suma una dosis de calma felina al día."
  ];

  const estados = [
    "Estado del café: una taza caliente y gatos curiosos te esperan.",
    "Estado del café: todo tranquilo, perfecto para una pausa relajante.",
    "Estado del café: ambiente activo, ronroneos en circulación.",
    "Estado del café: momento ideal para otro paseo entre michis."
  ];

  let indiceMensaje = 0;
  let indiceEstado = 0;

  function cambiarTexto() {
    mensajePrincipal.textContent = mensajes[indiceMensaje];
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
  }

  function revisarEstado() {
    estadoActividad.textContent = estados[indiceEstado];
    indiceEstado = (indiceEstado + 1) % estados.length;
  }

  botonMensaje.addEventListener("click", cambiarTexto);
  botonEstado.addEventListener("click", revisarEstado);
});
