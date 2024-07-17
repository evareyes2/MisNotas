// Selección de elementos del DOM
const newNoteForm = document.querySelector('.nota-nueva form');
const notesList = document.querySelector('.lista-notas ul');
const notes = [];

// Función para agregar una nueva nota
function addNote(event) {
  event.preventDefault();
  const textArea = document.querySelector('.nota-nueva textarea');
  const noteText = textArea.value.trim();
  if (noteText) {
    const newNote = {
      id: Date.now(),
      text: noteText,
    };
    notes.push(newNote);
    textArea.value = '';
    renderNotes();
  }
}

// Función para renderizar la lista de notas
function renderNotes() {
  notesList.innerHTML = '';
  notes.forEach((note) => {
    const noteHTML = `
      <li>
        <p>${note.text}</p>
        <button class="delete-btn" data-id="${note.id}">Eliminar</button>
      </li>
    `;
    notesList.insertAdjacentHTML('beforeend', noteHTML);
  });
}

// Función para eliminar una nota
function deleteNote(event) {
  if (event.target.classList.contains('delete-btn')) {
    const noteId = event.target.dataset.id;
    const index = notes.findIndex((note) => note.id === parseInt(noteId));
    if (index!== -1) {
      notes.splice(index, 1);
      renderNotes();
    }
  }
}

// Event listeners
newNoteForm.addEventListener('submit', addNote);
notesList.addEventListener('click', deleteNote);

// Renderizar la lista de notas por primera vez
renderNotes();