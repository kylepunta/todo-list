import "./styles.css";
import displayUI from "./UI.js";
import { eventHandler } from "./eventHandler.js";
import { projectsController } from "./projects.js";
import { projects } from "./storage.js";
import { setCurrentProject } from "./state.js";

let defaultProject = projectsController.createProject("Untitled");
projects.push(defaultProject);
setCurrentProject(0);
console.table(projects);

displayUI.displayHeader();
displayUI.displaySidebar();
displayUI.displayContent();
displayUI.displayMainHeading();
displayUI.displaySidebarHeading();
displayUI.displayProjects();
displayUI.displayAddNewProject();
displayUI.displayAddListItemDialog();
displayUI.displayProjectNameHeading();
displayUI.displayAddNewListItem();
displayUI.displayAddProjectDialog();
displayUI.displayDeleteDialog();
displayUI.displayProjectSettings();

const expandBtns = document.querySelectorAll('.expand');
const descriptionContainers = document.querySelectorAll('.description-container');

eventHandler.addNewListItemBtnListener();
eventHandler.addListItemDialogListeners();
eventHandler.addProjectBtnListener();
eventHandler.addProjectDialogListeners();