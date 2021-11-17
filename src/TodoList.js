import React from "react"
import TodoItem from "./TodoItem.js"

function TodoList(props) {
    const items = props.items;
    const handleDelete = props.handleDelete;
    const handleEdit = props.handleEdit;
    const completeItem = props.completeItem;
    return(
   
        <div className="items">
        {
            items.map(i =>  
                <TodoItem 
                    key={i.id}
                    text={i.text} 
                    handleDelete={()=> handleDelete(i.id)}
                    handleEdit={() => handleEdit(i.id)}
                    completeItem={() => completeItem(i.id)}
                    completed={i.completed}
                />
           )}
        </div>
    )

}
export default TodoList