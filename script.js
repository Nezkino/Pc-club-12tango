function toggleBlock(id) {
    const blocks = document.querySelectorAll(".accordion");

    blocks.forEach(block => {
        if (block.id !== id) {
            block.classList.add("hidden");
        }
    });

    const target = document.getElementById(id);
    if (!target) return;

    target.classList.toggle("hidden");
}

function bookPlace() {
    alert("Заявка на бронирование отправлена!");
}