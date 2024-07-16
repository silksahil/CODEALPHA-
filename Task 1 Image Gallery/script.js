document.addEventListener("DOMContentLoaded", function(){

    const galleryImages = document.querySelectorAll(".galleryImg");
    const imgContainer = document.getElementById("largeBox");
    const largeImage = document.getElementById("mainPic")
    const closeBtn = document.querySelector(".close");

    
     galleryImages.forEach(image => {
        image.addEventListener("click", function() {
            imgContainer.style.display = "block";
            largeImage.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        imgContainer.style.display = "none";
    });

    imgContainer.addEventListener("click", function(e) {
        if (e.target === imgContainer) {
            imgContainer.style.display = "none";
        }
    });
});