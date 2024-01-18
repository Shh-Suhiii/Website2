document.addEventListener("DOMContentLoaded", function() {
    // Creating stars dynamically
    var starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");

    for (var i = 0; i < 200; i++) {
        var star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
});
