
const addel = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))
if(notes){
    notes.forEach(note =>{        
        addnewnotes(note)
    })
}

function addnewnotes(text = ''){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
                <textarea ${text ? "hidden" : ""}></textarea>
            </div>`;

            const editbtnel = note.querySelector('.edit');
            const deletebtnel = note.querySelector('.delete');            
            const mainel = note.querySelector('.main');
            const textareael = note.querySelector('textarea');
           
            textareael.value = text;
            mainel.innerHTML = marked(text)

            editbtnel.addEventListener('click',()=>{
                mainel.classList.toggle("hidden")
                textareael.classList.toggle("hidden")
            })

            deletebtnel.addEventListener('click',()=>{
                note.remove();
            })
         
            textareael.addEventListener('input',(e)=>{
                const {value} = e.target;                
                mainel.innerHTML = marked(value);
                updatels();
            })
            document.body.appendChild(note)
}


addel.addEventListener('click',()=>{
    addnewnotes();
})

function updatels(){
    const noetstext = document.querySelectorAll('textarea');
    const notes = [];
    noetstext.forEach(note => {        
        notes.push(note.value);
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}

