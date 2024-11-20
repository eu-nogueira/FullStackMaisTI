let cont = document.querySelector('#conteudo');
let button = document.querySelector('#register');
let lista = document.querySelector('.lista');

class Tarefa {
    constructor(description, id) {
        this.Description = description;
        this.id = id || Itens.getNextId();
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
        if (id === null) {
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
        let id = tarefa.id;
        localStorage.setItem(id, JSON.stringify(tarefa));
        localStorage.setItem('id', id.toString());
    }

    removerTarefa(id) {
        localStorage.removeItem(id);
    }

    updateTarefa(id, newDescription) {
        let task = JSON.parse(localStorage.getItem(id));
        task.Description = newDescription;
        localStorage.setItem(id, JSON.stringify(task));
    }

    static getNextId() {
        let idAtual = localStorage.getItem('id');
        return parseInt(idAtual) + 1;
    }
}

const itens = new Itens();

button.addEventListener('click', function () {
    let task = new Tarefa(cont.value);

    if (task.validaTarefa()) {
        itens.criaTarefa(task);
        cont.value = '';
        loadTasks();
    }
});

function loadTasks(tasks = itens.carregarTarefa()) {
    lista.innerHTML = '';

    tasks.forEach((task) => {
        let linha = document.createElement('li');
        linha.style.display = 'flex';
        linha.style.justifyContent = 'space-between';
        linha.style.alignItems = 'center';

        let descricao = document.createElement('span');
        descricao.innerHTML = `${task.Description}`;

        let btn = document.createElement('button');
        btn.textContent = 'Excluir';
        btn.style.marginLeft = '10px';

        let btnUpdate = document.createElement('button');
        btnUpdate.textContent = 'Editar';
        btnUpdate.style.backgroundColor = 'rgb(184, 255, 184)';
        btnUpdate.style.marginLeft = '10px';

        btn.onclick = () => {
            if (confirm('Tem certeza que deseja excluir este item?')) {
                itens.removerTarefa(task.id);
                loadTasks();
            }
        };

        btnUpdate.onclick = () => {
            let newText = prompt('Digite a nova descrição', task.Description);
            if (newText !== null) {
                itens.updateTarefa(task.id, newText);
                loadTasks();
            }
        };

        linha.appendChild(descricao);
        linha.appendChild(btn);
        linha.appendChild(btnUpdate);
        lista.appendChild(linha);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});
