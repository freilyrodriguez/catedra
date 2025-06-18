document.addEventListener("DOMContentLoaded", function () {
  // --- INTERACTIVIDAD DE LA LÍNEA DE TIEMPO ---
  const timelineItems = document.querySelectorAll(".timeline-item");
  const infoBox = document.getElementById("info-box");

  timelineItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Actualiza la caja de información
      infoBox.innerHTML = `<p>${this.dataset.info}</p>`;

      // Resalta el punto activo
      timelineItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // --- GESTIÓN DE MODALES DE TEXTO (PROCLAMA Y TESTAMENTO) ---
  const modal = document.getElementById("modal-general");
  const modalBody = document.getElementById("modal-body");
  const btnProclama = document.getElementById("btn-proclama");
  const btnTestamento = document.getElementById("btn-testamento");
  const closeButton = modal.querySelector(".close-button");

  const contenidoProclama = `
        <h2>Última Proclama (10 de diciembre de 1830)</h2>
        <p>"¡Colombianos! Habéis presenciado mis esfuerzos para plantear la libertad donde reinaba antes la tiranía. He trabajado con desinterés, abandonando mi fortuna y aun mi tranquilidad. Me separé del mando cuando me persuadí que desconfiabais de mi desprendimiento..."</p>
        <p>"...Mis enemigos abusaron de vuestra credulidad y hollaron lo que me es más sagrado: mi reputación y mi amor a la libertad. He sido víctima de mis perseguidores, que me han conducido a las puertas del sepulcro. Yo los perdono."</p>
        <p>"Al desaparecer de en medio de vosotros, mi cariño me dice que debo hacer la manifestación de mis últimos deseos. No aspiro a otra gloria que a la consolidación de Colombia. Todos debéis trabajar por el bien inestimable de la Unión..."</p>
        <p>"¡Colombianos! Mis últimos votos son por la felicidad de la patria. <strong>Si mi muerte contribuye para que cesen los partidos y se consolide la Unión, yo bajaré tranquilo al sepulcro.</strong>"</p>
    `;

  const contenidoTestamento = `
        <h2>Testamento (Fragmentos)</h2>
        <p><strong>1ra.</strong> "Primeramente declaro: que mi última voluntad es que mi cadáver sea sepultado en la forma que disponga el albacea..."</p>
        <p><strong>10ma.</strong> "Es mi voluntad que después de mi fallecimiento, mis restos sean depositados en la ciudad de Caracas, mi país natal..."</p>
        <p><strong>11va.</strong> "Lego a la Universidad de Caracas dos obras de mi biblioteca: 'El Contrato Social' de Rousseau y 'El Arte de la Guerra' de Montecuculi."</p>
        <p><strong>12va.</strong> "Es mi voluntad que la medalla que me presentó el Congreso de Bolivia a nombre de aquel pueblo, se le devuelva como una prueba del verdadero afecto que aun en mis últimos momentos conservo a aquella República."</p>
    `;

  btnProclama.onclick = function () {
    modalBody.innerHTML = contenidoProclama;
    modal.style.display = "block";
  };

  btnTestamento.onclick = function () {
    modalBody.innerHTML = contenidoTestamento;
    modal.style.display = "block";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // --- GESTIÓN DE MODAL DE IMÁGENES ---
  const imgModal = document.getElementById("modal-imagen");
  const modalImg = document.getElementById("img-modal");
  const captionText = document.getElementById("caption");
  const galleryImages = document.querySelectorAll(".galeria-img");
  const closeImgButton = document.querySelector(".close-button-img");

  galleryImages.forEach((img) => {
    img.onclick = function () {
      imgModal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
  });

  closeImgButton.onclick = function () {
    imgModal.style.display = "none";
  };

  // Cierra modales al hacer clic fuera del contenido
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == imgModal) {
      imgModal.style.display = "none";
    }
  };
});
