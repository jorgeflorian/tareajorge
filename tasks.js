// Variables y constantes
const tasks = [];
const MAX_TASKS = 5; // Constante

// Función para agregar una tarea
function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        console.log("No puedes agregar más tareas. Límite alcanzado.");
        return;
    }
    tasks.push(task);
    console.log(`Tarea "${task}" agregada.`);
}

// Función para listar todas las tareas
function listTasks() {
    console.log("Lista de tareas:");
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Función para eliminar una tarea por su índice
function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Índice inválido.");
        return;
    }
    const removed = tasks.splice(index, 1);
    console.log(`Tarea "${removed}" eliminada.`);
}

// Función para actualizar una tarea por su índice
function updateTask(index, newTask) {
    if (index < 0 || index >= tasks.length) {
        console.log("Índice inválido. No se puede actualizar la tarea.");
        return;
    }
    const oldTask = tasks[index];
    tasks[index] = newTask;
    console.log(`Tarea actualizada: "${oldTask}" → "${newTask}"`);
}

// Exportaciones de funciones
module.exports = { addTask, listTasks, removeTask, updateTask };
