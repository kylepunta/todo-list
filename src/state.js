let currentProject = null;

function setCurrentProject(project) {
    currentProject = project;
};
function getCurrentProject() {
    return currentProject;
};

export {setCurrentProject, getCurrentProject};