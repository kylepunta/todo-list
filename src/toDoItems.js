import { getCurrentItem, getCurrentProject, setCurrentProject } from "./state";
import { projects } from "./storage";
import displayUI from "./UI";

const listItemsController = (function() {
    function createListItem(title, description, date, priority) {
        const listItem = {
            title: title,
            description: description,
            date: date,
            priority: priority,
        };
        return listItem;
    };
    function addListItem() {
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const date = document.querySelector('.date').value;
        const priority = document.querySelector('.priority-select').value;

        let listItem = createListItem(title, description, date, priority);
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
    function updateListItem() {
        const currentItem = getCurrentItem();
        const currentProject = getCurrentProject();
        const newTitle = document.querySelector('.new-title').value;
        const newDescription = document.querySelector('.new-description').value;
        const newDate = document.querySelector('.new-date').value;
        const newPriority = document.querySelector('.new-priority-select').value;
        projects[currentProject].listItems[currentItem].title = newTitle;
        projects[currentProject].listItems[currentItem].description = newDescription;
        projects[currentProject].listItems[currentItem].date = newDate;
        projects[currentProject].listItems[currentItem].priority = newPriority;
        displayUI.displayProject();
        displayUI.displayItemSettings();
        console.table(projects);
    };
    function checkListItem(marker) {
        marker.classList.toggle('checked');
    };
    return { createListItem, addListItem, deleteListItem, updateListItem, checkListItem };    
})();


export { listItemsController };