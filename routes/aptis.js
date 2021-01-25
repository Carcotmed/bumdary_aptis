const router_pregunta_choices = require("../routes/aptis/pregunta-choices");
const router_ejercicio_choices = require("../routes/aptis/ejercicio-choices");
const router_ejercicio_cohesion = require("../routes/aptis/ejercicio-cohesion")
const router_ejercicio_comprension_c = require("../routes/aptis/ejercicio-comprension-c")
const router_ejercicio_comprension_l = require("../routes/aptis/ejercicio-comprension-l")
const router_ejercicio_listening = require("../routes/aptis/ejercicio-listening");
const router_ejercicio_writing_word = require("../routes/aptis/ejercicio-writing-word");
const router_ejercicio_writing_text = require("../routes/aptis/ejercicio-writing-text");
const router_ejercicio_speaking = require("../routes/aptis/ejercicio-speaking");



function aptisApi(app) {
    app.use("/api/aptis/preguntas_choices", router_pregunta_choices);
    app.use("/api/aptis/ejercicios_choices", router_ejercicio_choices);
    app.use("/api/aptis/ejercicios_cohesion", router_ejercicio_cohesion);
    app.use("/api/aptis/ejercicios_comprension_c", router_ejercicio_comprension_c);
    app.use("/api/aptis/ejercicios_comprension_l", router_ejercicio_comprension_l);
    app.use("/api/aptis/ejercicios_listening", router_ejercicio_listening);
    app.use("/api/aptis/ejercicios_writing_word", router_ejercicio_writing_word);
    app.use("/api/aptis/ejercicios_writing_text", router_ejercicio_writing_text);
    app.use("/api/aptis/ejercicios_speaking", router_ejercicio_speaking);

}

module.exports = aptisApi;
