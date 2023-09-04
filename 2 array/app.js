const input = document.querySelector('#title');
const createBtn = document.querySelector('#create');
const listEl = document.querySelector('#list');

createBtn.onclick = function(){
    if(input.value.length === 0){
        return;
    }
    const newNote = {
        title:input.value,
        complited:false,
    }
    notes.push(newNote);
    render();
    // listEl.insertAdjacentHTML('beforeend', getNotes(newNote))
    input.value='';
}

function getNotes(notes, index){
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${notes.complited ? 'text-decoration-line-through' : ''}">${notes.title}</span>

    <span>
      <span class="btn btn-small btn-${notes.complited ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-index= "${index}" data-type="remove" >&times;</span>
    </span>
    </li>`
}

const notes = [
    {
    title: 'first',
    complited: false,
    },
    {
    title: 'second',
    complited: true,
    }
];

function render(){
    listEl.innerHTML='';
    if (notes.length === 0){
        listEl.innerHTML ='empty'
    }
    for(let index=0;index<notes.length;index++){
        listEl.insertAdjacentHTML('beforeend', getNotes(notes[index],index));
    }  
}

render();

listEl.onclick = function(e){
    if (e.target.dataset.index){
        const index = Number(e.target.dataset.index);
        const type = e.target.dataset.type;

        if(type === 'toggle'){
            notes[index].complited=!notes[index].complited;
        }
        if(type === 'remove'){
            notes.splice(index,1);
        }
    }
    render();
    
}