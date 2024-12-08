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
    return {createProject, addProject};
})();
export {projectsController};