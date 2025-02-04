let draggedItem = null;
function loadPositions() {
    const savedPosition = localStorage.getItem('draggedItemPosition');
    if (savedPosition) {
        const dropArea = document.querySelector(".drop-area");
        const draggedElement = document.getElementById(savedPosition);
        if (draggedElement) {
            dropArea.appendChild(draggedElement);
        }
    }
}

// Function to save the position of the dragged item
function savePosition(itemId) {
    localStorage.setItem('draggedItemPosition', itemId);
}

const draggableEl = document.querySelectorAll(".draggable");
draggableEl.forEach(element =>{
    element.draggable = true;
    element.addEventListener('dragstart',(event)=>{
        draggedItem= event.target;
    });
});
const dragAreaEl= document.querySelector(".drag-area");
const dropAreaEl= document.querySelector(".drop-area");
[dragAreaEl,dropAreaEl].forEach(area => {
    area.addEventListener('dragover',(event)=>{
        event.preventDefault();
    });
});
dropAreaEl.addEventListener('drop', (event)=>{
    event.preventDefault(); //add if befor append child
   if(draggedItem){
    dropAreaEl.appendChild(draggedItem);
   }
});
dragAreaEl.addEventListener('drop',(event)=>{
    event.preventDefault();
    if(draggedItem){
        dragAreaEl
        .appendChild(draggedItem);
        savePosition(draggedItem.id);
    }
});
