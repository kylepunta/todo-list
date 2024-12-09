import { listItemsController } from "./toDoItems";
import { projectsController } from "./projects";
import displayUI from "./UI";
import { getCurrentProject, setCurrentProject, getCurrentItem, setCurrentItem ,getElementToDelete, setElementToDelete } from "./state";
import { projects } from "./storage";

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
                displayUI.displayItemSettings();
            });
        });
    };
    function addProjectSettingsListeners() {
        const projectSettings = document.querySelectorAll('.project-settings');
        const projectPopUps = document.querySelectorAll('.project-pop-up');
        for (let i = 0; i < projectSettings.length; i++) {
            projectSettings[i].addEventListener('click', () => {
                setCurrentProject(i);
                if (projectPopUps[i].classList.contains('active')) {
                    projectPopUps[i].classList.remove('active');
                    projectPopUps[i].classList.add('hidden');
                }
                else {
                    for (let j = 0; j < projectPopUps.length; j++) {
                        if(projectPopUps[j].classList.contains('active')) {
                            projectPopUps[j].classList.remove('active');
                            projectPopUps[j].classList.add('hidden');
                        };
                    };
                    projectPopUps[i].classList.remove('hidden');
                    projectPopUps[i].classList.add('active');
                };
            });
        };
        document.addEventListener('click', (event) => {
            for (let i = 0; i < projectPopUps.length; i++) {
                if(!projectPopUps[i].contains(event.target) && !projectSettings[i].contains(event.target)) {
                    if(projectPopUps[i].classList.contains('active')) {
                        projectPopUps[i].classList.remove('active');
                        projectPopUps[i].classList.add('hidden');
                    };
                };
            };
        });
    };
    function addItemSettingsListeners() {
        const itemSettings = document.querySelectorAll('.item-settings');
        const itemPopUps = document.querySelectorAll('.item-pop-up');
        for (let i = 0; i < itemSettings.length; i++) {
            itemSettings[i].addEventListener('click', () => {
                setCurrentItem(i);
                if(itemPopUps[i].classList.contains('active')) {
                    itemPopUps[i].classList.remove('active');
                    itemPopUps[i].classList.add('hidden');
                }
                else {
                    for (let j = 0; j < itemPopUps.length; j++) {
                        if(itemPopUps[j].classList.contains('active')) {
                            itemPopUps[j].classList.remove('active');
                            itemPopUps[j].classList.add('hidden');
                        };
                    };
                    itemPopUps[i].classList.remove('hidden');
                    itemPopUps[i].classList.add('active');
                }
            });
        };
        document.addEventListener('click', (event) => {
            for (let i = 0; i < itemPopUps.length; i++) {
                if(!itemPopUps[i].contains(event.target) && !itemSettings[i].contains(event.target)) {
                    if(itemPopUps[i].classList.contains('active')) {
                        itemPopUps[i].classList.remove('active');
                        itemPopUps[i].classList.add('hidden');
                    };
                };
            };
        });
    };
    function addDeleteListeners() {
        const deleteProjectBtns = document.querySelectorAll('.delete-project');
        const deleteItemBtns = document.querySelectorAll('#delete-item');
        const deleteDialog = document.querySelector('.delete-dialog');
        const deleteHeading = document.querySelector('.delete-heading');

        deleteProjectBtns.forEach((deleteProjectBtn) => {
            deleteProjectBtn.addEventListener('click', () => {
                deleteHeading.textContent = "Delete Project";
                deleteDialog.showModal();
                setElementToDelete("Project");
            });
        });
        deleteItemBtns.forEach((deleteItemBtn) => {
            deleteItemBtn.addEventListener('click', () => {
                deleteHeading.textContent = "Delete Item";
                deleteDialog.showModal();
                setElementToDelete("Item");
            });
        });
    };
    function addDeleteDialogBtnListeners() {
        const confirmBtn = document.querySelector('.confirm-button');
        const cancelBtn = document.querySelector('.cancel-button');
        const deleteDialog = document.querySelector('.delete-dialog');
        const listItemsContainer = document.querySelector('.list-items-container');

        confirmBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const elementToDelete = getElementToDelete();
            switch(elementToDelete) {
                case "Project":
                                projectsController.deleteProject();
                                listItemsContainer.innerHTML = "";
                                deleteDialog.close();
                                break;
                case "Item":
                                listItemsController.deleteListItem();
                                deleteDialog.close();
                                break;
            };
        });
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            deleteDialog.close();
        });
    };
    function addRenameProjectListeners() {
        const renameBtns = document.querySelectorAll('.rename-project');
        const renameDialog = document.querySelector('.rename-dialog');
        renameBtns.forEach((renameBtn) => {
            renameBtn.addEventListener('click', () => {
                renameDialog.showModal();
            });
        });
    };
    function addRenameDialogListeners() {
        const renameBtn = document.querySelector('.rename-project-button');
        const cancelBtn = document.querySelector('.cancel-rename-button');
        const renameDialog = document.querySelector('.rename-dialog');

        renameBtn.addEventListener('click', (event) => {
            event.preventDefault();
            projectsController.renameProject();
            renameDialog.close();
        });
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            renameDialog.close();
        });
    };
    function addEditListeners() {
        const editBtns = document.querySelectorAll('#edit-item');
        const editDialog = document.querySelector('.edit-dialog');
        editBtns.forEach((editBtn) => {
            editBtn.addEventListener('click', () => {
                editDialog.showModal();
            });
        });
    };
    function addEditDialogListeners() {
        const updateBtn = document.querySelector('.update-list-item-button');
        const cancelBtn = document.querySelector('.cancel-update-item-button');
        const editDialog = document.querySelector('.edit-dialog');

        updateBtn.addEventListener('click', (event) => {
            event.preventDefault();
            listItemsController.updateListItem();
            editDialog.close();
        });
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            editDialog.close();
        });
    };

    return {addExpandListItemsListeners, addListItemDialogListeners, addNewListItemBtnListener, addProjectBtnListener, addProjectDialogListeners, loadProjectListeners, addProjectSettingsListeners, addItemSettingsListeners, addDeleteListeners, addDeleteDialogBtnListeners, addRenameProjectListeners, addRenameDialogListeners, addEditListeners, addEditDialogListeners};
})();

export { eventHandler };