const Form = document.querySelector ('#form');

const TaskInput = document.querySelector ('#formGroupExampleInput2');

const TaskIextInfo = document.querySelector ('#formGroupExampleInput2-info');

const TaskHtmlList = document.querySelector ('#taskManeger-task-info');

Form.addEventListener('submit', function (event) {
    event.preventDefault();
    const TaskIext = TaskInput.value;
    const TaskIextInfoHtml = TaskIextInfo.value;
    
    const TaskHTML = `
                    
                        <li class="list-group-item">
                             <b> ${TaskIext}</b>
                            <p> ${TaskIextInfoHtml} </p>
                        </li>
                    `;

    TaskHtmlList.insertAdjacentHTML ('beforeend', TaskHTML);

    TaskInput.value = "";
    TaskIextInfoHtml = TaskIextInfo.value = "";
    TaskInput.focus();
})