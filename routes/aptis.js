const router_pregunta_gramatica = require("../routes/aptis/pregunta-gramatica");
const router_ejercicio_gramatica = require("../routes/aptis/ejercicio-gramatica");

function aptisApi(app) {
  app.use("/api/aptis/preguntas_gramatica", router_pregunta_gramatica);
  app.use("/api/aptis/ejercicios_gramatica", router_ejercicio_gramatica);
}

module.exports = aptisApi;
