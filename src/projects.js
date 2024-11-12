function createProjectHeading(projectName) {
    const header = document.querySelector('.header');
    const projectHeading = document.createElement('h1');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = projectName;
    const projectHeadingContainer = document.createElement('div');
    projectHeadingContainer.classList.add('project-heading-container');
    projectHeadingContainer.appendChild(projectHeading);
    header.appendChild(projectHeadingContainer);
};

export { createProjectHeading };