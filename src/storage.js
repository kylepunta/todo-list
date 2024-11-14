import { createNewListItem } from "./toDoItems.js";

let projects = [8];
projects[0] = "Monday";
projects[1] = "Tuesday";
projects[2] = "Wednesday";
projects[3] = "Thursday";
projects[4] = "Friday";
projects[5] = "Saturday";
projects[6] = "Sunday";

let listItems = [10];
for (let i = 0; i < 10; i++){
    listItems[i] = createNewListItem("Book appointment", "Hair appointment", "14/11/2024", "High");
};

export { projects, listItems };