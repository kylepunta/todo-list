import { getCurrentProject } from "./state.js";
import { projects } from "./storage.js";
import displayUI from "./UI.js";

const projectsController = (function() {
    function createProject(title) {
        const project = {
            title: title,
            listItems: [],
        };
        return project;
    }
    function addProject() {
        const projectTitle = document.querySelector('.project-title').value;
        let project = createProject(projectTitle);
        projects.push(project);
        console.table(projects);
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
    };
    function deleteProject() {
        const currentProject = getCurrentProject();
        projects.splice(currentProject, 1);
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
    };
    function renameProject() {
        const currentProject = getCurrentProject();
        const newProjectTitle = document.querySelector('.rename-title').value;
        projects[currentProject].title = newProjectTitle;
        console.table(projects);
        displayUI.displayProjects();
        displayUI.displayProjectSettings();
    };
    return {createProject, addProject, deleteProject, renameProject};
})();
export {projectsController};