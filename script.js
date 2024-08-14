document.addEventListener('DOMContentLoaded', () => {
    var modal = document.getElementById("photo-modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    // récupère tous les éléments <a> qui ouvrent le modal
    var links = document.querySelectorAll('.lien-conteneur-photo');
    
    links.forEach(link => {
        link.onclick = function(event) {
            event.preventDefault(); // empêche le comportement par défaut du lien
            var imgSrc = this.getElementsByTagName('img')[0].src;
            modal.style.display = "flex";
            modalImg.src = imgSrc;
            captionText.innerHTML = this.getElementsByTagName('img')[0].alt;
        }
    });

    // quand l'utilisateur clique sur (x), ferme le modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // quand l'utilisateur clique en dehors du modal, ferme le modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
