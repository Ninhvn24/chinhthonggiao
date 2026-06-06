const chapterBlocks = document.querySelectorAll(".chapter-block");

chapterBlocks.forEach((block) => {
  const button = block.querySelector(".chapter-toggle");

  if (!button) return;

  button.addEventListener("click", () => {
    block.classList.toggle("open");
  });
});