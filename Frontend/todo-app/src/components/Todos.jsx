
export function Todos(todos){
    console.log(todos)
    return <div>
        {todos.todos.map((todo)=>{
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
            </div>
        })}
    </div>
}   