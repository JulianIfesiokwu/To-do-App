const themeIcon = document.querySelector('.light')
const input = document.querySelector('.input')
const tasksLeft = document.querySelector('.amount')
const tasksContainer = document.querySelector('.all-tasks')

const taskList = []
tasksLeft.textContent = 0


// Update task remaining
function updateTaskRemaining() {
    tasksLeft.textContent = taskList.length < 1 ? 0 : `${taskList.length}`;
}

//React to enter button being pressed and create task
function acceptTask(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        let taskInstruction = event.target.value
        taskInstruction.length < 1 ? alert('task cannot be empty') : createTask(taskInstruction)
        // clear the input box after enter is pressed
        event.target.value = ''
    }
}

function deleteTask(task, e) {
    let targetTask = e.target.parentElement.parentElement
    taskList.length - 1
    targetTask.remove()
    updateTaskRemaining()
}

function markTask(e) {
    console.log(e.target.checked, 'marked')
    e.target.checked === true ? false : true
}

// Make a task UI
// function taskUI(task) {
//     // create task container
//     const taskContainer = document.createElement('div')
//     taskContainer.classList.add('task-container')
//     // create check button
//     const checkButton = document.createElement('input')
//     checkButton.setAttribute('type', 'radio')
//     // create p tag for task
//     const taskContentHolder = document.createElement('p')
//     taskContentHolder.classList.add('instruction')
//     taskContentHolder.textContent = `${task.taskContent}`
//     // create delete button container
//     const deleteContainer = document.createElement('div')
//     deleteContainer.classList.add('delete-task-container')
//     // create delete button
//     const deleteButton = document.createElement('img')
//     deleteButton.setAttribute('src', './images/icon-cross.svg')
//     deleteButton.classList.add('delete-task')
//     // Append all parts of UI
//     deleteContainer.appendChild(deleteButton)

//     taskContainer.append(checkButton, taskContentHolder, deleteContainer)
//     console.log(tasksContainer)

//     return taskContainer
// }


// Create a task
function createTask(taskInstruction) {
    let task = {}
    task.taskContent = taskInstruction;
    task.complete = false

    // add UI
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')
    // create check button
    const checkButton = document.createElement('input')
    checkButton.setAttribute('type', 'radio')
    checkButton.onclick = ( (e) => markTask(e) )
    // create p tag for task
    const taskContentHolder = document.createElement('p')
    taskContentHolder.classList.add('instruction')
    taskContentHolder.textContent = `${task.taskContent}`
    // create delete button container
    const deleteContainer = document.createElement('div')
    deleteContainer.classList.add('delete-task-container')
    // create delete button
    const deleteButton = document.createElement('img')
    deleteButton.setAttribute('src', './images/icon-cross.svg')
    deleteButton.classList.add('delete-task')
    deleteButton.onclick = (e) => deleteTask(task, e)
    // Append all parts of UI
    deleteContainer.appendChild(deleteButton)

    taskContainer.append(checkButton, taskContentHolder, deleteContainer)
    // add to tasks container
    tasksContainer.appendChild(taskContainer)

    // add task to task List
    taskList.push(taskContainer)

    // Update tasks remaining
    updateTaskRemaining()
    

}


themeIcon.addEventListener('click', () => {
    const result = themeIcon.classList.toggle('light')

    if(result) {
        themeIcon.setAttribute('src', './images/icon-sun.svg')
        themeIcon.classList.replace('dark', 'light')
    } else {
        themeIcon.setAttribute('src', './images/icon-moon.svg')
        themeIcon.classList.replace('light', 'dark')
    }
})

input.addEventListener("keyup", acceptTask)