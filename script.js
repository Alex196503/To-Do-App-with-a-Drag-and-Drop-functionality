import addTask, { deleteTask, clearCompleted, markCompletion, renderTasks} from "./utils/crudTasks.js";
import changeTheme from "./utils/darkTheme.js";
document.addEventListener('DOMContentLoaded', ()=>{
    let icon = document.querySelector('.toggle-icon');
    let body = document.querySelector('body');
    let form = document.querySelector('form');
    let input = document.querySelector('.form-control');
    let container = document.querySelector('.sections-added');
    let clearCompletedBtn = document.querySelector('.footer a.heading');
    let filterParagraphs = document.querySelectorAll('.list .heading');
    filterParagraphs.forEach((paragraph)=>{
        paragraph.addEventListener('click', ()=>{
            let dataFilter = paragraph.dataset.filter;
            filterParagraphs.forEach((p)=>p.classList.remove('active'));
            paragraph.classList.add('active');
            renderTasks(dataFilter);
        })
    })
    renderTasks();
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        addTask(input);
    })
    container.addEventListener('click', (e)=>{
        deleteTask(e.target);
    })
    container.addEventListener('click', (e)=>{
        markCompletion(e.target);
    })
    icon.addEventListener('click', ()=>{
    changeTheme(body, icon);
    })
    clearCompletedBtn.addEventListener('click', ()=>{
        clearCompleted();    
    })
})