import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Actions from "./Actions";
import Stats from "./Stats";
import {useState} from "react";

export default function App() {

    const [tasksList, setTasksList] = useState([]);

    function handleAddTask(task) {
        setTasksList((tasksList) => [...tasksList, task]);
    }

    function handleDeleteTask(id) {
        setTasksList((tasksList) =>
            tasksList.filter((task) => task.id !== id));
    }

    function handleToggleTask(id) {
        setTasksList((tasksList) => tasksList.map((task) =>
            task.id === id
                ? {...task, completed: !task.completed}
                : task));
    }

    return <div className="app">
        <Header/>
        <Form handleAddTask={handleAddTask} />
        <List tasksList={tasksList}
              handleToggleTask={handleToggleTask}
              handleDeleteTask={handleDeleteTask} />
        <Actions tasksList={tasksList}
                 setTasksList={setTasksList} />
        <Stats tasksList={tasksList} />
    </div>
}