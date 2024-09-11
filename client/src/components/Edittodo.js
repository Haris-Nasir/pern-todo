import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Edittodo = ({ todo }) => {
    const [description, setdescription] = useState(todo.description)
    const navigate=useNavigate();

const updatedescription=async(e)=>{
e.preventDefault();
try {
    const body={description}
    const response=await fetch(`http://localhost:8000/todos/${todo.todo_id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
    if(response.ok){
    navigate("/");
    }
    else{
        console.log("Failed to update todo");
    }
} catch (error) {
    console.log(error)
}
}


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal fade" id={`id${todo.todo_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={()=>setdescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setdescription(todo.description)}></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={(e) => setdescription(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setdescription(todo.description)}>Close</button>
                            <button type="button" className="btn btn-primary"onClick={(e)=>updatedescription(e)}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Edittodo;