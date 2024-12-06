import { getCurrentProject, setCurrentProject } from "./state";
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
    };
    return { createListItem, addListItem };    
})();


export { listItemsController };