// var input = document.getElementById('newTodo');
// var button = document.getElementById('add');

// var ul = document.getElementById('todoList');

// button.onclick = function(){
//     var check = document.createElement('input');
//     var li = document.createElement('li');
//     var label = document.createElement('label');
//     var delbutton = document.createElement('button');
    
//     if(input.value != ''){
//         ul.appendChild(li);
//         li.appendChild(check);
//         check.setAttribute('type', 'checkbox');
//         label.innerHTML = input.value;
//         li.appendChild(label);
//         delbutton.innerHTML = 'Delete';
//         li.appendChild(delbutton);
//     }

//     check.onchange = function(){
//        label.innerHTML.setAttribute('class', 'checked')
//     }

//     delbutton.onclick = function(){
//         ul.remove(parentElement('li'))
//     }

//     }






    // Correct Code 
var toggleCheck = function () {
    let parent = this.parentNode;
    parent.classList.toggle('checked');
};

var deleteTodo = function () {
    let todoLi = this.parentNode;
    todoLi.remove();
};

var addTodo = function (todo) {
    let li = document.createElement('li');

    let label = document.createElement('label');
    label.innerHTML = todo;

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = toggleCheck;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTodo;

    // Nest todo elements in list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    let todolist = document.querySelector('#todoList');
    // Append todo to todolist
    todolist.appendChild(li);
};

document.getElementById('add').onclick = function () {
    // Store the button's parent element (.addTodo <div>) in a variable
    var parent = this.parentNode;
    // Store the input, which is the *first* child element of the .addTodo <div>
    var addTextInput = parent.children[0];
    if (addTextInput.value === "") {
        return;
    } else {
        // Add todo
        addTodo(addTextInput.value);
        // Reset input 
        addTextInput.value = "";
    }
};