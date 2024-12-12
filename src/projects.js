import { getCurrentProject } from "./state.js";
import displayUI from "./UI.js";
import { incrementProjectCounter } from "./state.js";

const projectsController = (function() {
    function createProject(title) {
        const project = {
            title: title,
            listItems: [],
        };
        return project;
    }
    function addProject() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const projectTitle = document.querySelector('.project-title').value;
        let project = createProject(projectTitle);
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
        console.table(localStorage);
        incrementProjectCounter();
        console.table(projects);
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
    };
    function deleteProject() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const addNewListItemContainer = document.querySelector('.add-new-list-item-container');
        const projectHeading = document.querySelector('.project-name-heading-container');
        const currentProject = getCurrentProject();
        projects.splice(currentProject, 1);
        console.table(projects.length);
        if(addNewListItemContainer != null) {
            addNewListItemContainer.remove();
        };
        localStorage.setItem('projects', JSON.stringify(projects));
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
        projectHeading.innerHTML = "";
    };
    function renameProject() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const currentProject = getCurrentProject();
        const newProjectTitle = document.querySelector('.rename-title').value;
        projects[currentProject].title = newProjectTitle;
        localStorage.setItem('projects', JSON.stringify(projects));
        console.table(projects);
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
    };
    return {createProject, addProject, deleteProject, renameProject};
})();
export {projectsController};