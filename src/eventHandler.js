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
    

    return {expandListItems};
})();


export { eventHandler };