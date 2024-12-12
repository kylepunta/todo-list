let currentProject = null;
let currentItem = null;
let elementToDelete = null;
let projectCounter = 0;

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
function incrementProjectCounter() {
    projectCounter++;
};
function getProjectCounter() {
    return projectCounter;
};

export {setCurrentProject, getCurrentProject, getCurrentItem, setCurrentItem ,setElementToDelete, getElementToDelete, getProjectCounter, incrementProjectCounter};