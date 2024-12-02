const eventHandler = (function() {
    const parser = new DOMParser();

    function expandListItems(expandBtns, descriptionContainers) {
        for (let i = 0; i < expandBtns.length; i++){
            expandBtns[i].addEventListener('click', () => {
                descriptionContainers[i].classList.toggle('expand-list-item');
                const svgStringOne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>`;
                const svgDocOne = parser.parseFromString(svgStringOne, "image/svg+xml").documentElement;
                const svgStringTwo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>`;
                const svgDocTwo = parser.parseFromString(svgStringTwo, "image/svg+xml").documentElement;

                if (descriptionContainers[i].classList.contains("expand-list-item")){
                    console.log(`${i}`);
                    expandBtns[i].textContent = "";
                    expandBtns[i].appendChild(svgDocTwo);
                }
                else {
                    console.log(`${i}`);
                    expandBtns[i].textContent = "";
                    expandBtns[i].appendChild(svgDocOne);    
                }
            });
        };
    };
    
    function createNewListItem() {
        const content = document.querySelector('.content');
        const dialog = document.querySelector('dialog');
        dialog.classList.add('new-item-dialog');
        const form = document.createElement('form');
        form.classList.add('new-item-form');

        const mainHeading = document.createElement('h3');
        mainHeading.textContent = "Add New List Item";
      
        const titleSection = document.createElement('div');
        const descriptionSection = document.createElement('div');
        const dateSection = document.createElement('div');
        titleSection.classList.add('title-section');
        descriptionSection.classList.add('description-section');
        dateSection.classList.add('date-section');

        const titleLabel = document.createElement('label');
        const descriptionLabel = document.createElement('label');
        const dateLabel = document.createElement('label');
        titleLabel.textContent = "Title:";
        descriptionLabel.textContent = "Description:";
        dateLabel.textContent = "Date:";

        const title = document.createElement('input');
        const description = document.createElement('input');
        const date = document.createElement('input');

        const btnSection = document.createElement('div');
        btnSection.classList.add('button-section');
        const addBtn = document.createElement('button');
        addBtn.addEventListener('click', (event) => {
            event.preventDefault();
        });
        const cancelBtn = document.createElement('button');
        cancelBtn.addEventListener('click', (event) => {
            event.preventDefault();
            dialog.close();
        });
        addBtn.classList.add('add-button');
        cancelBtn.classList.add('cancel-button');
        addBtn.textContent = "Add";
        cancelBtn.textContent = "Cancel";
        btnSection.appendChild(addBtn);
        btnSection.appendChild(cancelBtn);

        titleSection.appendChild(titleLabel);
        titleSection.appendChild(title);
        descriptionSection.appendChild(descriptionLabel);
        descriptionSection.appendChild(description);
        dateSection.appendChild(dateLabel);
        dateSection.appendChild(date);

        form.appendChild(mainHeading);
        form.appendChild(titleSection);
        form.appendChild(descriptionSection);
        form.appendChild(dateSection);
        form.appendChild(btnSection);
        dialog.appendChild(form);
        content.appendChild(dialog);
        dialog.showModal();
    };

    return {expandListItems, createNewListItem};
})();

export { eventHandler };