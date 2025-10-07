import express from "express";

const app = express();
app.use(express.json());

// Data
let todos = [
    { id: 1, title: "Belajar Node.js", done: false },
    { id: 2, title: "Belajar Express.js", done: true }
]

// GET
app.get ("/todos", (req, res) => {
    res.json(todos)
});

// POST

app.post ("/todos", (req, res) => {
    const { title } = req.body;
    const { done } = req.body;

    const newTodo = {
        id: todos.length + 1,
        title: title,
        done: done
    };
    todos.push (newTodo);
    res.status(201).json(newTodo)
})

// PUT gabisa
app.put ("/todos:id", (req, res) => {
    const {title} = req.params;
    title.put (newTitle)
})


app.get("/", (req, res)=> {
    res.send("API berjalan normal");
    res.status(200);
});

app.listen(5001, () => console.log("Server running on http://localhost:5001"));