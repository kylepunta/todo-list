import "./styles.css";
import displayUI from "./UI.js";
import { createNewListItem } from "./toDoItems.js";
import { listItems } from "./storage.js";

displayUI.displayHeader();
displayUI.displaySidebar();
displayUI.displayContent();
displayUI.displayMainHeading();
displayUI.displaySidebarHeading();
displayUI.displayProjects();
displayUI.displayAddNewProject();

for (let i = 0; i < 10; i++){
    listItems[i] = createNewListItem("Book appointment", "Hair appointment", "14/11/2024", "High");
};
displayUI.displayProjectNameHeading("Monday");
displayUI.displayListItems();