fetch("modals.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("modal-container").innerHTML = html;
        initModalSystem(); 
    });

function initModalSystem() {

    document.querySelectorAll("[data-open]").forEach(el => {
        el.addEventListener("click", () => {
            const modal = document.getElementById(el.dataset.open);
            if (modal) modal.style.display = "block";
        });
    });

    document.querySelectorAll("[data-close]").forEach(el => {
        el.addEventListener("click", () => {
            const modal = document.getElementById(el.dataset.close);
            if (modal) modal.style.display = "none";
        });
    });

    window.addEventListener("click", e => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
}
