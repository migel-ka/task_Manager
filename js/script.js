const Form = document.querySelector ('#form');

const TaskInput = document.querySelector ('#formGroupExampleInput2');

const TaskHtmlList = document.querySelector ('#taskManeger-task-info');

Form.addEventListener('submit', function (event) {
    event.preventDefault();
    const TaskIext = TaskInput.value;
    
    const TaskHTML = `<p> ${TaskIext}</p>`     ;

    TaskHtmlList.insertAdjacentHTML ('beforeend', TaskHTML)
})