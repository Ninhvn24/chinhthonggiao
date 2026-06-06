const accordions = document.querySelectorAll(".chapter-toggle");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;

    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
});