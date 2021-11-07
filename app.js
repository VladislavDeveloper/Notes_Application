const deleteBtnImg = 'data:image/png;base64,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'

//Создадим основные константы

const noteTitle = document.getElementById('title');
const noteText = document.getElementById('note');
const createBtn = document.getElementById('create-btn');
const notesBox = document.querySelector('.notes-wrapper')

//Массив
let notes;
!localStorage.notes ? notes = [] : notes = JSON.parse(localStorage.getItem('notes'))

// Слздадим функцию-конструктор формирования заметки

function Note(title, text, date){
    this.title = title;
    this.text = text;
    this.date = new Date()
}

//Фнкция записи данных массива в localStorage

function updateStorage(){
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Функция рендера разметки
const createTemplate = (note, index) => {
    return `
        <div class="user-notes-box">
            <div class="left-side">
                <div class="mui--text-headline">${note.title}</div>
                <div class="mui--text-black-54">${note.date}</div>
                <div class="mui--text-headline">${note.text}</div>
            </div>
            <button onclick="removeNote(${index})" class="delete-btn"><img src="${deleteBtnImg}" width="25px"></button>
        </div>
    `
}

//Функция генерации html разметки
function createHtml(){
    notesBox.innerHTML = "";
    if(notes.length > 0){
        notes.forEach((item, index) => {
            notesBox.innerHTML += createTemplate(item, index)
        })
    }
}

//Вызываем основную функцию создания разметки
createHtml();

//Обработаем событие клика на кнопку create
createBtn.addEventListener('click', () => {
    notes.push(new Note(noteTitle.value, noteText.value));
    updateStorage();
    createHtml();
    noteTitle.value = "";
    noteText.value = "";
});


//Функция удаления заметки по индексу
const removeNote = index => {
    notes.splice(index, 1);
    updateStorage();
    createHtml();
}