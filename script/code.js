let list = []
let btn = document.querySelector('#btnAdd')
let btnDel = document.querySelector('#btnDel')
let listBox = document.querySelector('ul')

function task(id, name, completed,date){
    return{
        id, name, completed, date
    }

}
function displayTasks(){
    listBox.innerHTML = ""
    let tasks = JSON.parse( localStorage.getItem('taskItem'))
    tasks.forEach(tsk =>{
        listBox.innerHTML += `
        <li> <input type="checkbox"> ${tsk.name} <button>Delete</button></li>
        `
    })

}
let index= list.length + 1
function addTask (){
    let item = document.querySelector('[data-input]').value 
    if (item != ''){
        list.push(task(index,item,false,Date.now()))
        localStorage.setItem('taskItem', JSON.stringify(list))
        displayTasks()

    }else {
        alert('Please enter a task')
    }
   
    // let taskkk = JSON.parse(localStorage.getItem('taskItem'))
    // listBox.innerHTML = `
    // <li>${taskk.name}</li>
    
    // `

}
displayTasks()
btn.addEventListener('click', addTask)

function deleteItem(){
    list.splice(index,1)
    displayTasks()
}
btnDel.addEventListener('click', deleteItem)