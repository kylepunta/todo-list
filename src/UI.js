import { eventHandler } from "./eventHandler.js";
import { projects } from "./storage.js";
import { getCurrentProject, setCurrentProject } from "./state.js";

const displayUI = (function() {
    const body = document.querySelector('body');
    const parser = new DOMParser();
    function displayHeader() {
        const header = document.createElement('div');
        header.classList.add('header');
        body.appendChild(header);    
    };
    function displaySidebar() {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        body.appendChild(sidebar);    
    };
    function displayContent() {
        const content = document.createElement('div');
        content.classList.add('content');
        const projectNameHeadingContainer = document.createElement('div');
        projectNameHeadingContainer.classList.add('project-name-heading-container');
        const listItemsContainer = document.createElement('div');
        listItemsContainer.classList.add('list-items-container');
        content.appendChild(projectNameHeadingContainer);
        content.appendChild(listItemsContainer);
        body.appendChild(content);    
    };
    function displayMainHeading() {
        const header = document.querySelector('.header');
        const projectHeading = document.createElement('h1');
        projectHeading.classList.add('project-heading');
        projectHeading.textContent = "To-Do List";
        header.appendChild(projectHeading);    
    };
    function displaySidebarHeading() {
        const sidebar = document.querySelector('.sidebar');
        const sidebarHeading = document.createElement('h2');
        sidebarHeading.classList.add('sidebar-heading');
        sidebarHeading.textContent = "My Projects";
        sidebar.appendChild(sidebarHeading);
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('projects-container');
        sidebar.appendChild(projectsContainer);
    };
    function displayAddNewProject() {
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-plus</title><path d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /></svg>`;
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml").documentElement;
        svgDoc.classList.add('add-new-project-button');
        const sidebar = document.querySelector('.sidebar');
        const addNewProjectHeading = document.createElement('h3');
        addNewProjectHeading.textContent = "Add New Project";
        const addNewProjectContainer = document.createElement('div');
        addNewProjectContainer.classList.add('add-new-project-container');
        addNewProjectContainer.appendChild(addNewProjectHeading);
        addNewProjectContainer.appendChild(svgDoc);
        sidebar.appendChild(addNewProjectContainer);
    };
    function displayProjects() {
        const svgStringOne = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"></path> <path fill="#000000" d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"></path> <path fill="#000000" d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"></path> </g></svg>`;
        const svgStringTwo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`;
        const projectsContainer = document.querySelector('.projects-container');
        projectsContainer.innerHTML = "";
        projects.forEach((project, index) => {
            const projectNameContainer = document.createElement('div');
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectNameContainer.classList.add('project-name-container');
            const projectName = document.createElement('h3');
            projectName.classList.add('project-name');
            projectName.textContent = project.title;
            const svgDocOne = parser.parseFromString(svgStringOne, "image/svg+xml").documentElement;
            svgDocOne.classList.add('project-button');
            const svgDocTwo = parser.parseFromString(svgStringTwo, "image/svg+xml").documentElement;
            svgDocTwo.classList.add('project-settings');
            projectItem.appendChild(svgDocOne);
            projectItem.appendChild(projectName);
            projectNameContainer.appendChild(projectItem);
            projectNameContainer.appendChild(svgDocTwo);
            projectsContainer.appendChild(projectNameContainer);
        });
        eventHandler.loadProjectListeners();
    };
    function displayProject() {
        const content = document.querySelector('.content');
        const listItemsContainer = document.querySelector('.list-items-container');
        listItemsContainer.innerHTML = "";
        const currentProject = getCurrentProject();
        const listItems = projects[currentProject].listItems;
        listItems.forEach((listItem) => {
            const listItemContainer = document.createElement('div');
            listItemContainer.classList.add('list-item-container');
            const checklistMarkerContainer = document.createElement('div');
            checklistMarkerContainer.classList.add('checklist-marker-container');
            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title-container');
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('description-container');
            const dueDateContainer = document.createElement('div');
            dueDateContainer.classList.add('due-date-container');
            const priorityContainer = document.createElement('div');
            priorityContainer.classList.add('priority-container');

            const checklistMarker = document.createElement('div');
            checklistMarker.classList.add('checklist-marker');
            const title = document.createElement('h3');
            const description = document.createElement('p');
            const dueDate = document.createElement('p');
            const priority = document.createElement('h4');
            title.textContent = listItem.title;
            description.textContent= listItem.description;
            dueDate.textContent = listItem.dueDate;
            priority.textContent = "Priority";

            const lowPriority = document.createElement('div');
            const medPriority = document.createElement('div');
            const highPriority = document.createElement('div');
            lowPriority.classList.add('low-priority');
            medPriority.classList.add('med-priority');
            highPriority.classList.add('high-priority');
            const priorityBoxes = document.createElement('div');
            priorityBoxes.classList.add('priority-boxes');

            const svgStringOne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
            const svgDocOne = parser.parseFromString(svgStringOne, "image/svg+xml").documentElement;
            const expand = document.createElement('div');
            expand.classList.add('expand');
            expand.appendChild(svgDocOne);

            const svgStringTwo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`;
            const settings = document.createElement('div');
            settings.classList.add('item-settings');
            const svgDocTwo = parser.parseFromString(svgStringTwo, "image/svg+xml").documentElement;
            settings.appendChild(svgDocTwo);

            checklistMarkerContainer.appendChild(checklistMarker);
            titleContainer.appendChild(title);
            descriptionContainer.appendChild(description);
            dueDateContainer.appendChild(dueDate);
            priorityContainer.appendChild(priority);
            priorityBoxes.appendChild(lowPriority);
            priorityBoxes.appendChild(medPriority);
            priorityBoxes.appendChild(highPriority);
            priorityContainer.appendChild(priorityBoxes);

            listItemContainer.appendChild(checklistMarkerContainer);
            listItemContainer.appendChild(titleContainer);
            listItemContainer.appendChild(descriptionContainer);
            listItemContainer.appendChild(dueDateContainer);
            listItemContainer.appendChild(priorityContainer);
            listItemContainer.appendChild(expand);
            listItemContainer.appendChild(settings);
            listItemsContainer.appendChild(listItemContainer);
        });
        eventHandler.addExpandListItemsListeners();
    };
    function displayProjectNameHeading() {
        const currentProject = getCurrentProject();
        const projectNameHeadingContainer = document.querySelector('.project-name-heading-container');
        projectNameHeadingContainer.innerHTML = "";
        const projectNameHeading = document.createElement('h2');
        projectNameHeading.classList.add('project-name-heading');
        projectNameHeading.textContent = projects[currentProject].title;
        projectNameHeadingContainer.appendChild(projectNameHeading);
    };
    function displayAddNewListItem() {
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml").documentElement;
        svgDoc.classList.add('add-new-list-item');
        const content = document.querySelector('.content');
        const addNewListItemContainer = document.createElement('div');
        addNewListItemContainer.classList.add('add-new-list-item-container');
        const addNewListItemHeading = document.createElement('h4');
        addNewListItemHeading.classList.add('add-new-list-item-heading');
        addNewListItemHeading.textContent = "Add new list item";
        addNewListItemContainer.appendChild(svgDoc);
        addNewListItemContainer.appendChild(addNewListItemHeading);
        content.appendChild(addNewListItemContainer);
    };
    function displayAddListItemDialog() {
        const content = document.querySelector('.content');
        const dialog = document.createElement('dialog');
        dialog.classList.add('add-list-item-dialog');
        content.appendChild(dialog);

        const form = document.createElement('form');
        form.classList.add('add-list-item-form');
    
        const mainHeading = document.createElement('h3');
        mainHeading.textContent = "Add New List Item";
      
        const titleSection = document.createElement('div');
        const descriptionSection = document.createElement('div');
        const dateSection = document.createElement('div');
        titleSection.classList.add('title-section');
        descriptionSection.classList.add('description-section');
        dateSection.classList.add('date-section');
    
        const titleLabel = document.createElement('label');
        const descriptionLabel = document.createElement('label');
        const dateLabel = document.createElement('label');
        titleLabel.textContent = "Title:";
        descriptionLabel.textContent = "Description:";
        dateLabel.textContent = "Date:";
    
        const title = document.createElement('input');
        title.classList.add('title');
        const description = document.createElement('input');
        description.classList.add('description');
        const date = document.createElement('input');
        date.classList.add('date');
    
        const btnSection = document.createElement('div');
        btnSection.classList.add('button-section');
        const addBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        addBtn.classList.add('add-list-item-button');
        cancelBtn.classList.add('cancel-list-item-button');
        addBtn.textContent = "Add";
        cancelBtn.textContent = "Cancel";
        btnSection.appendChild(addBtn);
        btnSection.appendChild(cancelBtn);
    
        titleSection.appendChild(titleLabel);
        titleSection.appendChild(title);
        descriptionSection.appendChild(descriptionLabel);
        descriptionSection.appendChild(description);
        dateSection.appendChild(dateLabel);
        dateSection.appendChild(date);
    
        form.appendChild(mainHeading);
        form.appendChild(titleSection);
        form.appendChild(descriptionSection);
        form.appendChild(dateSection);
        form.appendChild(btnSection);
        dialog.appendChild(form);
        content.appendChild(dialog);
    };
    function displayAddProjectDialog() {
        const content = document.querySelector('.content');
        const dialog = document.createElement('dialog');
        dialog.classList.add('add-project-dialog');

        const form = document.createElement('form');
        form.classList.add('add-project-form');

        const addProjectHeading = document.createElement('h3');
        addProjectHeading.textContent = "Add New Project";

        const projectTitleSection = document.createElement('div');
        projectTitleSection.classList.add('project-title-section');

        const projectTitleLabel = document.createElement('label');
        projectTitleLabel.textContent = "Project Name:";
        projectTitleLabel.classList.add('project-title-label');
        const projectTitle = document.createElement('input');
        projectTitle.classList.add('project-title');

        const btnSection = document.createElement('div');
        btnSection.classList.add('project-button-section');
        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-button');
        addProjectBtn.textContent = "Add";
        const cancelProjectBtn = document.createElement('button');
        cancelProjectBtn.classList.add('cancel-project-button');
        cancelProjectBtn.textContent = "Cancel";

        projectTitleSection.appendChild(projectTitleLabel);
        projectTitleSection.appendChild(projectTitle);
        btnSection.appendChild(addProjectBtn);
        btnSection.appendChild(cancelProjectBtn);
        form.appendChild(addProjectHeading);
        form.appendChild(projectTitleSection);
        form.appendChild(btnSection);
        dialog.appendChild(form);
        content.appendChild(dialog);
    };
    function displayProjectSettings() {
        const projectNameContainers = document.querySelectorAll('.project-name-container');
        projectNameContainers.forEach((project) => {
            const popUp = document.createElement('div');
            popUp.classList.add('project-pop-up');
            popUp.classList.add('hidden');
            const renameProject = document.createElement('p');
            renameProject.textContent = "Rename Project";
            const deleteProject = document.createElement('p');
            deleteProject.textContent = "Delete Project";
            const renameContainer = document.createElement('div');
            const deleteContainer = document.createElement('div');
            renameContainer.classList.add('rename-container');
            deleteContainer.classList.add('delete-container');
            renameContainer.appendChild(renameProject);
            deleteContainer.appendChild(deleteProject);
            popUp.appendChild(renameContainer);
            popUp.appendChild(deleteContainer);
            project.appendChild(popUp);        
        });
        eventHandler.addProjectSettingsListeners();
    };
    function displayItemSettings() {
        const listItemContainers = document.querySelectorAll('.list-item-container');
        listItemContainers.forEach((item) => {
            const popUp = document.createElement('div');
            popUp.classList.add('item-pop-up');
            popUp.classList.add('hidden');
            popUp.setAttribute('id', 'item-pop-up');
            const editItem = document.createElement('p');
            editItem.setAttribute('id', 'edit-item');
            editItem.textContent = "Edit";
            const deleteItem = document.createElement('p');
            deleteItem.setAttribute('id', 'delete-item');
            deleteItem.textContent = "Delete";
            const editContainer = document.createElement('div');
            const deleteContainer = document.createElement('div');
            editContainer.classList.add('edit-container');
            editContainer.setAttribute('id', 'edit-container');
            deleteContainer.classList.add('delete-container');
            deleteContainer.setAttribute('id', 'delete-container');
            editContainer.appendChild(editItem);
            deleteContainer.appendChild(deleteItem);
            popUp.appendChild(editContainer);
            popUp.appendChild(deleteContainer);
            item.appendChild(popUp);
        });
        eventHandler.addItemSettingsListeners();
    };

    return {displayHeader, displaySidebar, displayContent, displayMainHeading, displaySidebarHeading, displayProjects, displayAddNewProject, displayProject, displayProjectNameHeading, displayAddNewListItem, displayAddListItemDialog, displayAddProjectDialog, displayProjectSettings, displayItemSettings};
})();

export default displayUI;