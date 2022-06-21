const json_data = [
    {
        'userId': 1, 
        'id': 1,
         'title': 'walk the dog',
         'completed': false
    },
    {
        'userId': 1, 
        'id': 2,
         'title': 'wash the dishes',
         'completed': false
    },
    {
        'userId': 1, 
        'id': 3,
         'title': 'book tickets to paris',
         'completed': false
    },
    {
        'userId': 1, 
        'id': 4,
         'title': 'clean the car',
         'completed': false
    },
    {
        'userId': 1, 
        'id': 5,
         'title': 'cook pasta',
         'completed': false
    }
];

let myList = document.getElementById("todo-list");

json_data.forEach(element => {
    let listItem = document.createElement("li");
    listItem.appendChild(
        document.createTextNode(element.title)
      );
      const deleteLink = document.createElement("a");

        deleteLink.href="#";
        deleteLink.className = "btn btn-sm btn-danger m-1 delete";
        deleteLink.appendChild(
            document.createTextNode("Delete")
        );
        listItem.appendChild(deleteLink);
        myList.appendChild(listItem);
        });

        let closeButtons = document.getElementsByClassName("delete");
        for(let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', deleteTodo, false);
        }

        function deleteTodo() {
            let li = this.parentElement;
            myList.removeChild(li);
        }
