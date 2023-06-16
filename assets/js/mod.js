// Récupérer toutes les images modales
let modalImages = document.getElementsByClassName("modal-image");

// Ajouter un gestionnaire d'événement pour chaque image modale
for (let i = 0; i < modalImages.length; i++) {
  modalImages[i].addEventListener("click", function() {
    let modalId = this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
}

// Fermer la fenêtre modale lorsqu'on clique sur le bouton de fermeture ou en dehors de la fenêtre modale
document.addEventListener("click", function(event) {
  if (event.target.classList.contains("close")) {
    let modalId = event.target.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
});

