import { getCurrentItem, getCurrentProject, setCurrentProject } from "./state";
import displayUI from "./UI";

const listItemsController = (function() {
    function createListItem(title, description, date, priority) {
        const listItem = {
            title: title,
            description: description,
            date: date,
            priority: priority,
            finished: false,
        };
        return listItem;
    };
    function addListItem() {
        const projects = JSON.parse(localStorage.getItem('projects'));
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const date = document.querySelector('.date').value;
        const priority = document.querySelector('.priority-select').value;

        let listItem = createListItem(title, description, date, priority);
        let currentProject = getCurrentProject();
        projects[currentProject].listItems.push(listItem);
        localStorage.setItem('projects', JSON.stringify(projects));
        displayUI.displayListItems();
        displayUI.displayItemSettings();
        console.table(localStorage);
    };
    function deleteListItem() {
        const projects = JSON.parse(localStorage.getItem('projects'));
        const currentItem = getCurrentItem();
        const currentProject = getCurrentProject();
        projects[currentProject].listItems.splice(currentItem, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
        displayUI.displayListItems();
        displayUI.displayItemSettings();
        console.table(localStorage);
    };
    function updateListItem() {
        const projects = JSON.parse(localStorage.getItem('projects'));
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
        localStorage.setItem('projects', JSON.stringify(projects));
        displayUI.displayListItems();
        displayUI.displayItemSettings();
        console.table(projects);
    };
    function checkListItem(marker) {
        const projects = JSON.parse(localStorage.getItem('projects'));
        const currentItem = getCurrentItem();
        const currentProject = getCurrentProject();
        projects[currentProject].listItems[currentItem].finished = !projects[currentProject].listItems[currentItem].finished;
        if(projects[currentProject].listItems[currentItem].finished == true) {
            marker.classList.add('checked');
        }
        else {
            marker.classList.remove('checked');
        }
        localStorage.setItem('projects', JSON.stringify(projects));
    };
    return { createListItem, addListItem, deleteListItem, updateListItem, checkListItem };    
})();


export { listItemsController };