import React, { useEffect, useState } from 'react';
import Edittodo from './Edittodo';
const Listtodo = () => {
    const [todos, settodos] = useState([]);


    const deletetodo = async (id) => {
        try {
            const deletetodo = await fetch(`http://localhost:8000/${id}`, {
                method: "Delete"
            })
            settodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.log(error.message)
        }

    }

    const gettodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos")
            const jsondata = await response.json();
            console.group(jsondata);
            settodos(jsondata);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        gettodos();
    }, [])






    return (
        <div>
            <div class="container">
                {/* <h2>Basic Table</h2> */}
                <table class="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length > 0 && todos.map((todo, index) => (
                                <tr key={index}>
                                    <td>{todo.description}</td>
                                    <td><Edittodo todo={todo}/></td>
                                    <td><button className='btn btn-danger' onClick={() => deletetodo(todo.todo_id)}>Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Listtodo;