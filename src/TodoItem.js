import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from "@material-ui/icons/CheckCircle"
import Edit from "@material-ui/icons/Edit"

function TodoItem(props){
const handleDelete = props.handleDelete;
const handleEdit = props.handleEdit;
const completeItem = props.completeItem;
    return (
        
        <div className="text-icon-container">
             
                <span className={props.completed ? "checkedIcon" : "checkIcon"}>
                    <CheckIcon onClick={() => completeItem()}></CheckIcon>
    </span>
                
                <span className= {props.completed ? "textDone" : "text" }>
                    {props.text}
                </span>
                <span className="icons">
                    <Edit className="editIcon" onClick={() => handleEdit()}></Edit>
                    <DeleteIcon onClick={() => handleDelete()} className = "deleteIcon"></DeleteIcon>
                </span>
        </div>
        
    )
}
export default TodoItem