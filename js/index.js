let count=0

function getHacer(){
    let example2Left = document.getElementById('hacer');
    let example2Right = document.getElementById('enProgreso');
    let example2RCnter = document.getElementById('realizada');
  

    new Sortable(example2Left, {
        group: 'shared', // set both lists to same group
        animation: 150
    });

    new Sortable(example2Right, {
        group: 'shared',
        animation: 150
    });
    new Sortable(example2RCnter, {
        group: 'shared',
        animation: 150
    });
 
    eliminarTarea(example2Left)
    eliminarTarea(example2Right)
    eliminarTarea(example2RCnter)

    
}

// Evento para eliminar Tarea
function eliminarTarea(contenedor){
    contenedor.addEventListener('click',(e)=>{
        const fatherNode = e.target.parentNode;
        const grandParentNode= e.target.parentNode.parentNode;
        // si el ID es igual a delete borramos la tarea
        if(e.path[0].id=='delete'){
            if(grandParentNode)
            {

                grandParentNode.removeChild(fatherNode);
            }
        }
    })
}
let deleteTask= document.querySelector('#delete');


let addTask= document.getElementById('btnAgregar');

addTask.addEventListener('click',(e)=>{
    let task= document.createElement('div')
    task.classList.add(`task`)
    task.id=`${count}`;
    task.innerHTML= `
    <div > <input maxlength="28"></input></div>
    <img src="/media/delete.png" id="delete" alt="delete">
    `;
    let contenedor= document.getElementById("hacer")
    contenedor.appendChild(task)
    getHacer()
    $(`#${count}`).change((e)=>{
 
        console.log(e.target.value)
        
        localStorage.setItem(`${task.id}Hacer`,e.target.value)
    })
        count++;
        console.log(count)
});





