var buttonHtml = document.getElementById("toggle-button"); // 'buttons' ko 'button' kar diya
var skillHtml = document.getElementById("skills");
buttonHtml.addEventListener("click", function () {
    if (skillHtml.style.display === "none") {
        skillHtml.style.display = "block";
    }
    else {
        skillHtml.style.display = "none";
    }
});
