function saveInputToLocalStorage(inputElement) {
    const key = `notepad-${inputElement.id}`;
    localStorage.setItem(key, inputElement.value);
}

function loadSavedNotepads() {
    const container = document.getElementById("container");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("notepad-")) {
            const value = localStorage.getItem(key);
            const createNotepad = document.createElement("div");
            createNotepad.classList.add("notePad");

            const createInputWrapper = document.createElement("div");
            createInputWrapper.classList.add("inputWrapper");

            const createInput = document.createElement("input");
            createInput.classList.add("input");
            createInput.value = value;

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<button id="btn"><i class="fa fa-trash-o"></i></button>`;
            deleteButton.classList.add("deleteButton");
            deleteButton.addEventListener("click", function () {
                deleteNotepad(createInput, key, createNotepad);
            });

            createInput.addEventListener("input", function () {
                saveInputToLocalStorage(createInput);
            });

            createInputWrapper.appendChild(createInput);
            createInputWrapper.appendChild(deleteButton);
            createNotepad.appendChild(createInputWrapper);
            container.appendChild(createNotepad);
        }
    }
}

function deleteNotepad(inputElement, key, notepadElement) {
    localStorage.removeItem(key);
    notepadElement.remove();
}

document.getElementById("addNotepad").addEventListener("click", function () {
    const createNotepad = document.createElement("div");
    createNotepad.classList.add("notePad");

    const createInputWrapper = document.createElement("div");
    createInputWrapper.classList.add("inputWrapper");

    const createInput = document.createElement("input");
    createInput.classList.add("input");

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<button id="btn"><i class="fa fa-trash-o"></i></button>`;
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function () {
        deleteNotepad(createInput, `notepad-${Date.now()}`, createNotepad);
    });
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function () {
        deleteNotepad(createInput, `notepad-${Date.now()}`, createNotepad);
    });

    createInput.addEventListener("input", function () {
        saveInputToLocalStorage(createInput);
    });

    createInputWrapper.appendChild(createInput);
    createInputWrapper.appendChild(deleteButton);
    createNotepad.appendChild(createInputWrapper);
    document.getElementById("container").appendChild(createNotepad);
});

window.addEventListener("load", loadSavedNotepads);