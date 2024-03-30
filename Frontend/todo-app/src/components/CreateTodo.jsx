export function CreateTodo(){
    return <div>
        <input style={{
            padding:'12px' ,margine:'12px'
        }} type="text" placeholder="Titile"></input>
        <input style={{
            padding:'12px' ,margine:'12px'
        }}  type="text" placeholder="Description"></input>

    <button style={{
            padding:'12px' ,margine:'12px'
        }} >Add</button>
    </div>
}