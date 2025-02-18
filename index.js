// Importaciones de funciones
const { addTask, listTasks, removeTask, updateTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");

// Listar tareas
listTasks();

// Actualizar una tarea
console.log("Actualizando la segunda tarea...");
updateTask(1, "Practicar algoritmos");

// Listar nuevamente para verificar
listTasks();

// Eliminar una tarea
removeTask(2);

// Listar nuevamente para verificar
listTasks();
