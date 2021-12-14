"use strict";
onload = () => {
    // Pegando os elementos a serem alterados:
    const body = document.body;
    const readmePerfil = document.querySelector(".markdown-body.entry-content.container-lg.f5");
    const readmeProjetos = document.querySelector(".Box-body.px-5.pb-5");
    body.style.fontFamily = "JetBrains Mono";
    readmePerfil.style.fontFamily = "JetBrains Mono";
    readmeProjetos.setAttribute("style", "font-family: JetBrains Mono");
};
