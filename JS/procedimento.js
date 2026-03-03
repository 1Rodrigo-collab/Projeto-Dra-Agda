document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const procedimentos = {
    botox: {
      titulo: "Botox Facial",
      descricao: "Procedimento para suavizar rugas e linhas de expressão.",
      imagens: [
        "/img/SaveClip.App_640796672_18256262485288989_5250051399332813917_n.jpg",
        "/img/SaveClip.App_629550180_18255337108288989_8967771735813880251_n.jpg"
      ]
    },
    limpeza: {
      titulo: "Limpeza de Pele",
      descricao: "Remove impurezas e células mortas da pele.",
      imagens: [
        "/img/"
      ]
    },
    "preenchimento-labial": {
      titulo: "Preenchimento Labial",
      descricao: "Procedimento para dar volume e contorno aos lábios.",
      imagens: [
        "img/SaveClip.App_528042966_18232469713288989_2123724534457329806_n.jpg"
      ]
    },
    skinbooster: {
      titulo: "Skinbooster",
      descricao: "Hidratação profunda para rejuvenescimento da pele.",
      imagens: [
        "/img/retrato-de-mulher-madura-antes-e-depois-retocado.jpg"
      ]
    }
  };

  const procedimento = procedimentos[id];

  if (!procedimento) {
    document.body.innerHTML = `
      <div style="text-align:center; padding:50px;">
        <h2>Procedimento não encontrado</h2>
        <a href="index.html">Voltar para página inicial</a>
      </div>
    `;
    return;
  }

  document.getElementById("titulo").textContent = procedimento.titulo;
  document.getElementById("descricao").textContent = procedimento.descricao;

  const galeria = document.getElementById("galeria");

  procedimento.imagens.forEach(src => {
    const imagem = document.createElement("img");
    imagem.src = src;
    imagem.alt = procedimento.titulo;
    galeria.appendChild(imagem);
  });

});