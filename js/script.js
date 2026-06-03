console.log("Bem-vindo à Men Clean!");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Categoria acessada: " + this.textContent);
    });
});