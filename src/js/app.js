import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
 let allClasses = document.querySelectorAll('.price')

for (let price of allClasses) {
    if (price.classList.contains('hot')) {
        price.innerHTML += "🔥"
    };
}
});
