function agregarTarea(){
    const tareas = document.querySelector('.seccion-tareas')

    tareas.innerHTML +=  <div class="seccion-tareas_tarea">
    <input class="seccion-tareas_tarea--checkbox" type="checkbox" name="">
    <p class="seccion-tareas_tarea--p" contenteditable="true">Texto</p>
</div>;
}

agregarTarea();

function eliminarTarea(event){
    const
}