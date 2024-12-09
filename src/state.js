let currentProject = null;
let currentItem = null;
let elementToDelete = null;

function setCurrentProject(project) {
    currentProject = project;
};
function getCurrentProject() {
    return currentProject;
};
function setCurrentItem(item) {
    currentItem = item;
};
function getCurrentItem() {
    return currentItem;
};

function setElementToDelete(element) {
    elementToDelete = element;
};
function getElementToDelete() {
    return elementToDelete;
};

export {setCurrentProject, getCurrentProject, getCurrentItem, setCurrentItem ,setElementToDelete, getElementToDelete};