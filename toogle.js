const main = document.getElementById("main")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    if (main.classList.contains("dark")) {
        main.classList.remove("dark")
        btn.innerHTML = `Dark <i class="bi bi-moon-fill"></i>`
    } else {
        main.classList.add("dark")
        btn.innerHTML = `Light <i class="bi bi-sun-fill"></i>`
    }
})