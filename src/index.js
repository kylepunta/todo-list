import "./styles.css";
import displayUI from "./UI.js";
import { expandListItems } from "./eventHandler.js";

displayUI.displayHeader();
displayUI.displaySidebar();
displayUI.displayContent();
displayUI.displayMainHeading();
displayUI.displaySidebarHeading();
displayUI.displayProjects();
displayUI.displayAddNewProject();


displayUI.displayProjectNameHeading("Monday");
displayUI.displayListItems();
displayUI.displayAddNewListItem();

const expandBtns = document.querySelectorAll('.expand');
const descriptionContainers = document.querySelectorAll('.description-container');


expandListItems(expandBtns, descriptionContainers);