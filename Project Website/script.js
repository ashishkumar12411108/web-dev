const createBtn = document.getElementById('createMomentBtn');
const book = document.querySelector('.book');
const textarea = document.querySelector('textarea');

// Button click par page flip
createBtn.addEventListener('click', () => {
  book.classList.add('flipped');
});

// Text save karna
window.addEventListener('DOMContentLoaded', () => {
  const savedText = localStorage.getItem('diaryEntry');
  if (savedText) {
    textarea.value = savedText;
  }
});

// Auto save jab likho
textarea.addEventListener('input', () => {
  localStorage.setItem('diaryEntry', textarea.value);
});
