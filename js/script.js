//Переменные

const Form = document.querySelector ('#form'); //нахожу форму ввода

const TaskInput = document.querySelector ('#formGroupExampleInput2'); // нахожу полле ввода задачи

const TaskIextInfo = document.querySelector ('#formGroupExampleInput2-info'); // нахожу полле ввода описания задачи

const TaskHtmlList = document.querySelector ('#taskManeger-task-info'); // нахожу список

const TaskStart = document.querySelector ('#task-start'); //элемент начала

let taskMenedgerLS =[]; //создаю хранилище для задач

Form.addEventListener('submit', addTask); //addTask

TaskHtmlList.addEventListener('click', deleteTask); //deleteTask

TaskHtmlList.addEventListener('click', doneTask); //doneTask

// Функция добавления задачи
function addTask (event) {
    event.preventDefault(); // запрещаю перезагрузку станицы
    const TaskIext = TaskInput.value; // вытаскиваю значение задачи
    const TaskIextInfoHtml = TaskIextInfo.value; // вытаскиваю значение описания задачи
    
    const taskObjekt = {
        id: Date.now(),
        text: TaskIext,
        textInfo: TaskIextInfoHtml,
        done: false
    }
    taskMenedgerLS.push(taskObjekt);

    const cssClassDone = taskMenedgerLS.done ? 'list-group-item-span doneNote-span' : 'list-group-item-span';

    // добавляю код переменной
    const TaskHTML = `  <li id="${taskObjekt.id}" class="list-group-item"> 
                            <div class="${cssClassDone}">
                               <b> ${taskObjekt.text}</b>
                               <p> ${taskObjekt.textInfo} </p>
                            </div>
                            <div class="task-item__buttons">
                                <button type="button" class="btn btn-outline-success" data-action="done">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                </button>
                                <button type="button" class="btn btn-outline-danger" data-action="delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                    </svg>
                                </button>
                            </div>
                        </li>`;

    TaskHtmlList.insertAdjacentHTML ('beforeend', TaskHTML);     // добавляю код в страницу HTML в конец

    TaskInput.value = ""; // очищаю пооле ввода 1
    TaskIextInfo.value = ""; // очищаю пооле ввода 2
    TaskInput.focus(); //фокус на поле 1

    if (TaskStart.children.length > 1) {
        TaskStart.classList.add ('none')
    }
}

// Функция удаления задачи
function deleteTask (event) {
    if (event.target.dataset.action === 'delete') {
        const perentNote = event.target.closest ('.list-group-item');
        const noteId = Number(perentNote.id);
        const indexDelite = taskMenedgerLS.findIndex(function (taskMenedgerLS) {
            return taskMenedgerLS.id === noteId;
        });
        taskMenedgerLS.splice(indexDelite, 1);
        perentNote.remove();
    }
}

// Функция выполнения задачи
function doneTask (event) {
    if (event.target.dataset.action === 'done') {
        const doneNote = event.target.closest ('.list-group-item');
        
        const noteId = Number(doneNote.id);
       const indexDone = taskMenedgerLS.find (function (doneNodeIndex) {
        if (doneNodeIndex.noteId === noteId) {
            return true
        }
       })
      //doneNote.done = !doneNote.done;
       console.log(taskMenedgerLS);
        const spanNote = doneNote.querySelector ('.list-group-item-span');
        spanNote.classList.toggle('doneNote-span');
    }
}