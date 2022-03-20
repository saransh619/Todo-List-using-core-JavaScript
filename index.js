const eachItem = document.querySelector('.eachItem');
const addBtn = document.querySelector('.addBtn');
const text = document.querySelector('.text');
const removeBtn = document.querySelector('.removeBtn');
const showItems = document.querySelector('.showItems');
const h3 = document.querySelector('h3');
const addItems = document.querySelector('.addItems')

//Create
addBtn.addEventListener('click', function () {
    const list = document.createElement('div')
    list.className = "eachItem"
    const h3 = document.createElement('h3')
    h3.className = "h3"
    h3.innerHTML = text.value
    const div = document.createElement('div')
    div.className = 'todo-btn'
    const editBtn = document.createElement('button')
    editBtn.className = "editBtn"
    editBtn.innerText = "EDIT"
    const deleteBtn = document.createElement('button')
    deleteBtn.className = "deleteBtn"
    deleteBtn.innerText = "DELETE"
    text.value = '';

    //append
    showItems.appendChild(list)
    list.appendChild(h3)
    list.appendChild(div)
    div.appendChild(editBtn)
    div.appendChild(deleteBtn)

    // delete 
    deleteBtn.addEventListener('click', function () {
        list.remove()
    })

    // Edit/Update
    editBtn.addEventListener('click', function (e) {
        text.value = h3.innerText
        list.remove()
        // console.log(h3)
        e.preventDefault();
    })


});

//Remove All
removeBtn.addEventListener('click', function () {
    showItems.remove()
})

