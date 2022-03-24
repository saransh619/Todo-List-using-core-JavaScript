const eachItem = document.querySelector('.eachItem');
const addBtn = document.querySelector('.addBtn');
const text = document.querySelector('.text');
const removeBtn = document.querySelector('.removeBtn');
const showItems = document.querySelector('.showItems');
const addItems = document.querySelector('.addItems');
var todos = [];

//Create
addBtn.addEventListener('click', function () {
    if (text.value === '') {
        alert("Please fill up data before adding to the list 😃");
    }
    else {
        const list = document.createElement('div')
        list.className = "eachItem"
        const h3 = document.createElement('h3')
        h3.className = "heading"
        h3.innerHTML = text.value
        text.value = '';
        const btnOperation = document.createElement('div')
        btnOperation.className = 'todo-btn'
        const editBtn = document.createElement('button')
        editBtn.className = "editBtn"
        editBtn.innerText = "EDIT"
        const deleteBtn = document.createElement('button')
        deleteBtn.className = "deleteBtn"
        deleteBtn.innerText = "DELETE"

        //localStorage
        // console.log(h3);
        // console.log(h3.innerText);
        todos.push(h3.innerText);
        localStorage.setItem("myList", JSON.stringify(todos));
        
        //append
        showItems.appendChild(list)
        list.appendChild(h3)
        list.appendChild(btnOperation)
        btnOperation.appendChild(editBtn)
        btnOperation.appendChild(deleteBtn)

        // delete 
        deleteBtn.addEventListener('click', function () {
            list.remove()
            //remove selected item from localStorage
            todos.splice(todos.indexOf(h3.innerText), 1);
            localStorage.setItem("myList", JSON.stringify(todos));
        })

        // Edit/Update
        editBtn.addEventListener('click', function (e) {
            e.preventDefault();
            text.value = h3.innerText
            list.remove()
            // console.log(h3)
            //update selected item from localStorage
            todos.splice(todos.indexOf(h3.innerText), 1);
            localStorage.setItem("myList", JSON.stringify(todos));    
        }) 
    }
});

//Remove All
removeBtn.addEventListener('click', function () {
    showItems.remove()
    localStorage.clear();
})


