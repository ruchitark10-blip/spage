const btn = document.getElementById('showNoteBtn');
const note = document.getElementById('note');

btn.addEventListener('click', () => {
    note.classList.toggle('hidden');
    btn.textContent = note.classList.contains('hidden') ? 'Click to See My Note' : 'Hide My Note';
});
