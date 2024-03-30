import {useState} from "react";

export default function Form({handleAddTask}) {
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newTask = { description, completed: false, id: Date.now()};

        handleAddTask(newTask);

        setDescription("");
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h2>Task:</h2>
        <input type="text" placeholder="description..." value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button>Add</button>
    </form>
}