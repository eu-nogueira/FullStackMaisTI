let cont = document.querySelector('#conteudo');
let button = document.querySelector('#register');
let lista = document.querySelector('.lista');

class Tarefa {
    constructor(description, id) {
        this.Description = description;
        this.id = id || Itens.getNextId(); // Atribuir um ID único à tarefa
    }

    validaTarefa() {
        if (this.Description == "" || this.Description == undefined) {
            console.error(`Preencher ${this.Description}`);
            return false;
        } else {
            return true;
        }
    }
}

class Itens {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        const id = localStorage.getItem('id');
        if (id === null || id) {
            localStorage.setItem('id', '0');
        }
    }

    carregarTarefa() {
        let tasks = [];
        let id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            try {
                let task = JSON.parse(localStorage.getItem(i));
                if (task !== null) {
                    tasks.push(task);
                }
            } catch {
                console.error(`Erro ao carregar a tarefa com o id ${i}`);
            }
        }
        return tasks;
    }

    criaTarefa(tarefa) {
        let id = tarefa.id; // Utilizar o ID atribuído na criação da tarefa
        localStorage.setItem(id, JSON.stringify(tarefa)); // Salvar a tarefa com o ID
        localStorage.setItem('id', id.toString()); // Atualizar o ID no localStorage
    }

    removerTarefa(id) {
        localStorage.removeItem(id);
    }

    static getNextId() {
        let idAtual = localStorage.getItem('id');
        return parseInt(idAtual) + 1;
    }
}

const itens = new Itens();

button.addEventListener('click', function () {
    let task = new Tarefa(cont.value); // Criar uma nova instância de Tarefa

    if (task.validaTarefa()) {
        itens.criaTarefa(task);
        alert(`Tudo certo`);
    }
    loadTasks(); // Carregar a lista de tarefas após criar uma nova
});

function loadTasks(tasks = itens.carregarTarefa()) {
    lista.innerHTML = '';

    tasks.forEach((task) => {
        let linha = document.createElement('li');
        let btn = document.createElement('button');
        btn.textContent = 'Excluir';
        linha.style.listStyle = 'none';
        linha.innerHTML = `${task.Description}`;
        btn.onclick = () => {
            if (confirm('Tem certeza que deseja excluir este item?')) {
                itens.removerTarefa(task.id);
                loadTasks(); // Carregar a lista de tarefas após remover uma
            }
        };
        lista.appendChild(linha);
        linha.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.querySelector('.lista'))) {
        loadTasks();
    }
});