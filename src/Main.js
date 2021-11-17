import React from "react"
import TodoList from "./TodoList.js"

function Main(props){
       const item = props.item;
       const items = props.items;
       const handleChange = props.handleChange;
       const handleDelete = props.handleDelete;
       const handleEdit = props.handleEdit;
       const editItem = props.editItem;
       const handleSubmit = props.handleSubmit;
       const completeItem = props.completeItem;
       const completed = props.completed;
       const handleEditSubmit = props.handleEditSubmit
      
       return(
            
                <div id="form-container">
                    <form id = "todo-list" onSubmit={handleSubmit}>
                        <header id="formHead">
                            
                            <input 
                                className="new-item-input" 
                                type="text" 
                                value={item}
                                onChange={handleChange}
                                placeholder="Enter new todo list item" 
                            />
                            <button 
                                className= "submit"
                                onClick ={handleSubmit}
                                style = { editItem ? {display:"none"} :{display:"block"}}
                                type="submit">
                                Add new Item
                            </button>
                            <button 
                                className="editButton" 
                                type="button"
                                style = { editItem ? {display:"block"} :{display:"none"}}
                                onClick = {handleEditSubmit}>
                            Edit Item
                            </button>
                        </header>
                        <TodoList 
                            items = {items}
                            handleDelete = {handleDelete}
                            handleEdit = {handleEdit}
                            completeItem = {completeItem}
                            completed = {completed}
                        />
                    </form>
                </div>
            
        )
    }


    

export default Main