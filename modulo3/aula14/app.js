class Task {
    constructor(year, month, day, type, description){
        this.year        = year
        this.month       = month
        this.day         = day
        this.type        = type
        this.description = description
    }

    validateData() {
        for (let key in this){ // percorrer um objeto
            if(this[key] === undefined || this[key] === ""){ 
                console.error(`O campo ${key} é obrigatório.`)

                return false // se não valido retorna false
            }
        }
        return true // se valido retorna true
    }
}

class Database {

    constructor(){
        this.initDatabase()
    }

    initDatabase() {
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', '0')
        }
    }

    loadTasks() {
        let tasks = []
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            try {
                let task = JSON.parse(localStorage.getItem(i))
                tasks.push(task)
            } catch (error){
                console.error(`Erro ao carregar a tarefa com id ${id}`)
            }
        }
        return tasks
    }

    createTask(task) {
        let id = this.getNextId() // Sempre que salvar task pega o próximo ID(começar do 1)
        // local storage = API
        localStorage.setItem(id, JSON.stringify(task)) // setItem para salvar no local storage.
        localStorage.setItem('id', id.toString()) // salvar "apenas" string no local storage e salvar id como task.
    }
    
    removeTask(id){
        localStorage.removeItem(id)
    }

    searchTasks(searchTask){}

    getNextId(){
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }
}

const database = new Database()

function registerTask(){
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description) // passa para o constructor

    if(task.validateData()){ // se dados estiverem validos
        database.createTask(task) // passando task por parametro para "classe"
        alert('Tarefa criada com sucesso!')
    } else {
        alert('Preencha todos os campos.')
    }
}

function loadTasks(tasks = database.loadTasks()){
    let listTask = document.getElementById('listTasks')
    listTask.innerHTML = ''

    tasks.forEach((task) => {
        let row = listTask.insertRow()

        row.insertCell(0).innerHTML = `${task.day}/${task.month}/${task.year}`

        row.insertCell(1).innerHTML = getTaskTypeName(task.type)
        row.insertCell(2).innerHTML = task.description

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.id = task.id
        btn.innerHTML = 'Deletar'
        btn.onClick = () => {
            if(confirm('Você tem certeza que quer excluir está tarefa?')){
                database.removeTask(task.id)
                loadTasks()
            }
        }

        row.insertCell(3).append(btn)
    })
}

function getTaskTypeName(type){
    switch(type) {
        case '1':
            return 'Studies'
            break
        case '2':
            return 'Work'
            break
        case '3':
            return 'Home'
            break
        case '4': 
            return 'health'
        case '5':
            return 'Family'
            break
        default: 
            return 'Desconhecido'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
})