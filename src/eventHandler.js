import { listItemsController } from "./toDoItems";

const eventHandler = (function() {
    const parser = new DOMParser();

    function addExpandListItemsListeners(expandBtns, descriptionContainers) {
        for (let i = 0; i < expandBtns.length; i++){
            expandBtns[i].addEventListener('click', () => {
                descriptionContainers[i].classList.toggle('expand-list-item');
                const svgStringOne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
                const svgDocOne = parser.parseFromString(svgStringOne, "image/svg+xml").documentElement;
                const svgStringTwo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>`;
                const svgDocTwo = parser.parseFromString(svgStringTwo, "image/svg+xml").documentElement;

                if (descriptionContainers[i].classList.contains("expand-list-item")){
                    console.log(`${i}`);
                    expandBtns[i].textContent = "";
                    expandBtns[i].appendChild(svgDocTwo);
                }
                else {
                    console.log(`${i}`);
                    expandBtns[i].textContent = "";
                    expandBtns[i].appendChild(svgDocOne);    
                }
            });
        };
    };
    function addNewListItemBtnListener() {
        const addNewListItem = document.querySelector('.add-new-list-item');
        const addListItemDialog = document.querySelector('.add-list-item-dialog');
        addNewListItem.addEventListener('click', () => {
            addListItemDialog.showModal();
        });
    };

    function addListItemDialogListeners() {
        const addListItemBtn = document.querySelector('.add-list-item-button');
        const cancelListItemBtn = document.querySelector('.cancel-list-item-button');
        const addListItemDialog = document.querySelector('.add-list-item-dialog');

        addListItemBtn.addEventListener('click', (event) => {
            event.preventDefault();
        });
        cancelListItemBtn.addEventListener('click', (event) => {
            event.preventDefault();
            addListItemDialog.close();
        });
    };
    function addProjectBtnListener() {
        const addNewProjectBtn = document.querySelector('.add-new-project-button');
        const addProjectDialog = document.querySelector('.add-project-dialog');
        addNewProjectBtn.addEventListener('click', () => {
            addProjectDialog.showModal();
        });
    };

    function addProjectDialogListeners() {
        const addProjectBtn = document.querySelector('.add-project-button');
        const cancelProjectBtn = document.querySelector('.cancel-project-button');
        const addProjectDialog = document.querySelector('.add-project-dialog');

        addProjectBtn.addEventListener('click', (event) => {
            event.preventDefault();
        });
        cancelProjectBtn.addEventListener('click', (event) => {
            event.preventDefault();
            addProjectDialog.close();
        });
    };

    return {addExpandListItemsListeners, addListItemDialogListeners, addNewListItemBtnListener, addProjectBtnListener, addProjectDialogListeners};
})();

export { eventHandler };