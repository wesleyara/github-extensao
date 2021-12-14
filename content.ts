onload = () => {
  // Pegando os elementos a serem alterados:
  const body = document.body;
  const readmePerfil = document.querySelector(
    ".markdown-body.entry-content.container-lg.f5",
  ) as HTMLDivElement;

  body.style.fontFamily = "JetBrains Mono";
  readmePerfil.style.fontFamily = "JetBrains Mono";
};
