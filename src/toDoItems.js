function createNewListItem(title, description, dueDate, priority) {
    return {title, description, dueDate, priority};
};

function addListItem() {
    const content = document.querySelector('.content');
    
    const listItemContainer = document.createElement('div');
    listItemContainer.classList.add('list-item-container');
    const checklistMarkerContainer = document.createElement('div');
    checklistMarkerContainer.classList.add('checklist-marker-container');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('due-date-container');
    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    const checklistMarker = document.createElement('div');
    checklistMarker.classList.add('checklist-marker');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('h4');
    priority.textContent = "Priority";
    const lowPriority = document.createElement('div');
    const medPriority = document.createElement('div');
    const highPriority = document.createElement('div');
    lowPriority.classList.add('low-priority');
    medPriority.classList.add('med-priority');
    highPriority.classList.add('high-priority');
    const priorityBoxes = document.createElement('div');
    priorityBoxes.classList.add('priority-boxes');

    const svgStringOne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
    const svgDocOne = parser.parseFromString(svgStringOne, "image/svg+xml").documentElement;
    const expand = document.createElement('div');
    expand.classList.add('expand');
    expand.appendChild(svgDocOne);

    const svgStringTwo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" /></svg>`;
    const settings = document.createElement('div');
    settings.classList.add('settings');
    const svgDocTwo = parser.parseFromString(svgStringTwo, "image/svg+xml").documentElement;
    settings.appendChild(svgDocTwo);

    checklistMarkerContainer.appendChild(checklistMarker);
    titleContainer.appendChild(title);
    descriptionContainer.appendChild(description);
    dueDateContainer.appendChild(dueDate);
    priorityContainer.appendChild(priority);
    priorityBoxes.appendChild(lowPriority);
    priorityBoxes.appendChild(medPriority);
    priorityBoxes.appendChild(highPriority);
    priorityContainer.appendChild(priorityBoxes);

    listItemContainer.appendChild(checklistMarkerContainer);
    listItemContainer.appendChild(titleContainer);
    listItemContainer.appendChild(descriptionContainer);
    listItemContainer.appendChild(dueDateContainer);
    listItemContainer.appendChild(priorityContainer);
    listItemContainer.appendChild(expand);
    listItemContainer.appendChild(settings);
    content.appendChild(listItemContainer);

};


export { createNewListItem, addListItem };