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
displayUI.displayAddProjectDialog();
displayUI.displayDeleteDialog();
displayUI.displayRenameDialog();
displayUI.displayEditDialog();
displayUI.displayProjectSettings();

eventHandler.addListItemDialogListeners();
eventHandler.addProjectBtnListener();
eventHandler.addProjectDialogListeners();