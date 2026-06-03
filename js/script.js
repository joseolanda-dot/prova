# js/script.js

```javascript
console.log("Catálogo Men Clean carregado!");

const menu = document.querySelectorAll("nav a");

menu.forEach(item => {
    item.addEventListener("click", () => {
        console.log(`Você acessou a categoria: ${item.textContent}`);
    });
});
```
