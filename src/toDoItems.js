import { getCurrentItem, getCurrentProject, setCurrentProject } from "./state";
import { projects } from "./storage";
import displayUI from "./UI";

const listItemsController = (function() {
    function createListItem(title, description, date) {
        const listItem = {
            title: title,
            description: description,
            date: date,
        };
        return listItem;
    };
    function addListItem() {
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const date = document.querySelector('.date').value;

        let listItem = createListItem(title, description, date);
        let currentProject = getCurrentProject();
        projects[currentProject].listItems.push(listItem);
        displayUI.displayProject();
        displayUI.displayItemSettings();
        console.table(projects);
    };
    function deleteListItem() {
        const currentItem = getCurrentItem();
        const currentProject = getCurrentProject();
        projects[currentProject].listItems.splice(currentItem, 1);
        displayUI.displayProject();
        displayUI.displayItemSettings();
        console.table(projects);
    };
    return { createListItem, addListItem, deleteListItem };    
})();


export { listItemsController };