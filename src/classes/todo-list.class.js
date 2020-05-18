export class TodoList{
    constructor()
    {
        //this.todos = [];
        this. cargarLocalStorage();

    }

    

    nuevoTodo (todo){
        this.todos.push(todo);
        this.guararLocalStorage();
    }

    eliminarTodo(id){
      this.todos =   this.todos.filter(todo =>todo.id != id);
     this. guararLocalStorage();


    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if (todo.id==id){
                todo.completado = !todo.completado;
                this.guararLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos =   this.todos.filter(todo =>!todo.completado);
       this. guararLocalStorage();

    }

    guararLocalStorage(){
        localStorage.setItem('todo', JSON.stringify (this.todos));
    

    }
    cargarLocalStorage(){
       

        this.todos = (localStorage.getItem('todo'))
                    ? this.todos=JSON.parse(localStorage.getItem('todo') )
                    : [];



    }
}
