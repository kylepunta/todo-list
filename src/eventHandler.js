function expandListItems(expandBtns, descriptionContainers) {
    for (let i = 0; i < expandBtns.length; i++){
        expandBtns[i].addEventListener('click', () => {
            descriptionContainers[i].classList.toggle('expand');
        });
    };
};

export { expandListItems };