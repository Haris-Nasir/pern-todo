const express=require("express");
const app=express();
const pool=require("./db");
const cors=require("cors");
app.use(express.json()); //Jb postman sy apis test krny toh koi error na ay
app.use(cors());
//Post data in database
app.post("/todos",async(req,res)=>{
    try {
        const {description} =req.body;
        const newtodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description]);
        res.json(newtodo.rows[0]);
    } catch (error) {
        console.log(error);
    }
})

//Get all Todo
app.get("/todos",async(req,res)=>{
    try {
        const alltodos=await pool.query("SELECT * FROM todo");
        res.json(alltodos.rows);
    } catch (error) {
console.log(error)        
    }
})


//Get single todo
app.get("/todos/:id",async(req,res)=>{
    try {
        const{id}=req.params;
        const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(todo.rows[0]);

    } catch (error) {
        console.log(error)
    }
})
 //Update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const{description}=req.body;
        const updatetodo=await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",[description,id]);
        res.json(updatetodo.rows[0]);
    } catch (error) {
        console.log(error);
    }
})
//Delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try {
        const{id}=req.params;
        const deletetodo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
        res.json(deletetodo)
    } catch (error) {
    console.log(error);
        
    }
})



app.listen(8000,()=>{     // server ko run krny k liy
    console.log("server is listening on port 8000")
})