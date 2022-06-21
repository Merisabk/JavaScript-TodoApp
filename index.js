const json_data = [
  
];

let myList = document.getElementById("todo-list");

json_data.forEach(element => {
    newTodo(element.title);
        });
        registerEventListeners();
        function registerEventListeners() {
        let closeButtons = document.getElementsByClassName("delete");
        for(let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', deleteTodo, false);
        }
    }

        function deleteTodo() {
            let li = this.parentElement;
            myList.removeChild(li);
        }

        function newTodo(todoTitle) {
           if (!todoTitle) {
            todoTitle = document.getElementById("todoTitle").value;
           }
           let listItem = document.createElement("li");
           listItem.appendChild(
            document.createTextNode(todoTitle) 
           );
            
           let deleteLink = document.createElement("a");
           deleteLink.href="#";
           deleteLink.className = "btn btn-sm btn-danger m-1 delete";
           deleteLink.appendChild(
            document.createTextNode("Delete")
           );
           listItem.appendChild(deleteLink);
           myList.appendChild(listItem);
           registerEventListeners(); 

        }