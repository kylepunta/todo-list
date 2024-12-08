import { listItemsController } from "./toDoItems";
import { projectsController } from "./projects";
import displayUI from "./UI";
import { getCurrentProject, setCurrentProject } from "./state";

const eventHandler = (function() {
    const parser = new DOMParser();

    function addExpandListItemsListeners() {
        const expandBtns = document.querySelectorAll('.expand');
        const descriptionContainers = document.querySelectorAll('.description-container');
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
            listItemsController.addListItem();
            addListItemDialog.close();
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
            projectsController.addProject();
            addProjectDialog.close();
        });
        cancelProjectBtn.addEventListener('click', (event) => {
            event.preventDefault();
            addProjectDialog.close();
        });
    };
    function loadProjectListeners() {
        const projectBtns = document.querySelectorAll('.project-button');
        projectBtns.forEach((button, index) => {
            button.addEventListener('click', () => {
                setCurrentProject(index);
                displayUI.displayProjectNameHeading();
                displayUI.displayProject();
            });
        });
    };
    function addSettingsListeners() {
        const settings = document.querySelectorAll('.settings');
        const popUps = document.querySelectorAll('.pop-up');
        for (let i = 0; i < settings.length; i++) {
            settings[i].addEventListener('click', () => {
                if (popUps[i].classList.contains('active')) {
                    popUps[i].classList.remove('active');
                    // popUps[i].classList.add('inactive');
                }
                else {
                    for (let j = 0; j < popUps.length; j++) {
                        if(popUps[j].classList.contains('active')) {
                            popUps[j].classList.remove('active');
                            // popUps[j].classList.add('inactive');
                        };
                    };
                    // popUps[i].classList.remove('inactive');
                    popUps[i].classList.add('active');
                };
            });
        };
        document.addEventListener('click', (event) => {
            for (let i = 0; i < popUps.length; i++) {
                if(!popUps[i].contains(event.target) && !settings[i].contains(event.target)) {
                    if(popUps[i].classList.contains('active')) {
                        popUps[i].classList.remove('active');
                        // popUps[i].classList.add('inactive');
                    };
                };
            };
        });
    };

    return {addExpandListItemsListeners, addListItemDialogListeners, addNewListItemBtnListener, addProjectBtnListener, addProjectDialogListeners, loadProjectListeners, addSettingsListeners};
})();

export { eventHandler };