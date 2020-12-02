const formel = document.getElementById('form')
const input = document.getElementById('input')
const todoel = document.getElementById('todos')

const gettodos = JSON.parse(localStorage.getItem('notes'));

if(gettodos){
    gettodos.forEach(todo => {
        addtodo(todo)
    })
}

formel.addEventListener('submit',(e)=>{
    e.preventDefault();
    addtodo();
})

function addtodo(todoget){
        let todotext = input.value;
        if(todoget){
            todotext = todoget.text;
        }
        if(todotext){
            const todo = document.createElement('li');
            if(todoget && todoget.completed){
                todo.classList.add("completed")
            }
            todo.innerHTML = todotext;

            todo.addEventListener('click',()=>{
                todo.classList.toggle('completed');
                updatels();
            })

            todo.addEventListener('contextmenu',(e)=>{
                e.preventDefault();
                todo.remove();
                updatels();
            })
    
            todoel.appendChild(todo)
            input.value = ""
            updatels();
        }else{
            alert("Please enter the todo")
        }
}

function updatels(){
    const todoels = document.querySelectorAll('li');  
    const notes = [];
    todoels.forEach((todo)=>{
        notes.push({
            text:todo.innerText,
            completed:todo.classList.contains("completed")
        });
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}

