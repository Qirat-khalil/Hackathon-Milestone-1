const buttonHtml = document.getElementById("toggle-button") as HTMLButtonElement;  // 'buttons' ko 'button' kar diya
const skillHtml = document.getElementById("skills") as HTMLElement;

buttonHtml.addEventListener("click", () => {
    if (skillHtml.style.display === "none") {
        skillHtml.style.display = "block";
    } else {
        skillHtml.style.display = "none";
    }
});
