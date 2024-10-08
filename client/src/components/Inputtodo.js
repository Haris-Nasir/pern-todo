import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
const Inputtodo = () => {
    const [description, setdescription] = useState('');
    const navigate=useNavigate();
    const onsubmitform = async (e) => {
        e.preventDefault();
        if (description == ['']) {
            alert('Please fill out description');
            return;
        }
        try {
            const body = { description }
            const response = await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            if (response.ok) {
                navigate("/");
            }
            else { console.log("Failed to add todos") }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1 className="text-center mt-5 ">Pernstack Todo List</h1>
            <form className="d-flex mt-5 " onSubmit={onsubmitform}>
                <input type="text" className="form-control" value={description} onChange={e => setdescription(e.target.value)} />
                <button className="btn btn-success m-2 ">Add</button>
            </form>
        </div>
    )
}
export default Inputtodo;