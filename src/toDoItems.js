const listItemsController = (function() {
    function addListItem() {
        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const date = document.querySelector('.date').value;
    };
    
    function createNewListItem() {
        const addListItemdialog = document.querySelector('.add-list-item-dialog');
        addListItemdialog.showModal();
    };
    return {addListItem, createNewListItem};    
})();


export { listItemsController };