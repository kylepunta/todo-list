import "./styles.css";
import { createProjectHeading } from "./project";

let projectName = "To-Do List";

const displayProjects = (function() {
    const svgString = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M8 6H5c-.553 0-1-.448-1-1s.447-1 1-1h3c.553 0 1 .448 1 1s-.447 1-1 1zM13 10H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1zM13 14H5c-.553 0-1-.448-1-1s.447-1 1-1h8c.553 0 1 .448 1 1s-.447 1-1 1z"></path> <path fill="#000000" d="M18 2v8c0 .55-.45 1-1 1s-1-.45-1-1V2.5c0-.28-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5v19c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V21c0-.55.45-1 1-1s1 .45 1 1v1c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h14c1.1 0 2 .9 2 2z"></path> <path fill="#000000" d="M23.87 11.882c.31.54.045 1.273-.595 1.643l-9.65 5.57c-.084.05-.176.086-.265.11l-2.656.66c-.37.092-.72-.035-.88-.314-.162-.278-.09-.65.17-.913l1.907-1.958c.063-.072.137-.123.214-.167.004-.01.012-.015.012-.015l9.65-5.57c.64-.37 1.408-.234 1.72.305l.374.65z"></path> </g></svg>`;
    const parser = new DOMParser();
    const sidebar = document.querySelector('.sidebar');
    let projects = [10];
    projects[0] = "Monday";
    projects[1] = "Tuesday";
    projects[2] = "Wednesday";
    projects[3] = "Thursday";
    projects[4] = "Friday";
    projects[5] = "Saturday";
    projects[6] = "Sunday";

    projects.forEach((project) => {
        const projectNameContainer = document.createElement('div');
        projectNameContainer.classList.add('project-name-container');
        const projectName = document.createElement('h3');
        projectName.classList.add('project-name');
        projectName.textContent = project;
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml").documentElement;
        projectNameContainer.appendChild(svgDoc);
        projectNameContainer.appendChild(projectName);
        sidebar.appendChild(projectNameContainer);
    });
})();

createProjectHeading(projectName);