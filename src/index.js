import "./styles.css";
import displayUI from "./UI.js";
import { eventHandler } from "./eventHandler.js";

displayUI.displayHeader();
displayUI.displaySidebar();
displayUI.displayContent();
displayUI.displayMainHeading();
displayUI.displaySidebarHeading();
displayUI.displayProjects();
displayUI.displayAddNewProject();
displayUI.displayAddListItemDialog();
displayUI.displayProjectNameHeading("Monday");
displayUI.displayAddNewListItem();
displayUI.displayAddProjectDialog();

const expandBtns = document.querySelectorAll('.expand');
const descriptionContainers = document.querySelectorAll('.description-container');

eventHandler.addNewListItemBtnListener();
eventHandler.addListItemDialogListeners();
eventHandler.addProjectBtnListener();
eventHandler.addProjectDialogListeners();