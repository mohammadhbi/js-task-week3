let draggedItem = null;

// Function to load the saved positions from localStorage
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

// Setting up drag events for draggable items
const draggableEl = document.querySelectorAll(".draggable");
draggableEl.forEach(element => {
    element.draggable = true;
    element.addEventListener('dragstart', (event) => {
        draggedItem = event.target;
    });
});

// Setting up dragover event to allow dropping in drop area
const dropAreaEl = document.querySelector(".drop-area");
dropAreaEl.addEventListener('dragover', (event) => {
    event.preventDefault();
});

// Setting up drop event to move item into drop area and save position
dropAreaEl.addEventListener('drop', (event) => {
    event.preventDefault();
    if (draggedItem) {
        dropAreaEl.appendChild(draggedItem);
        savePosition(draggedItem.id);
    }
});

// Load saved positions when page is loaded
window.onload = loadPositions;


