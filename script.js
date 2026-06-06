
document.querySelectorAll('.chapter-button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.chapter-card').classList.toggle('open');
  });
});
