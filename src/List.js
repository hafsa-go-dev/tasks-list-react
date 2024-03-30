export default function List({tasksList,handleDeleteTask,handleToggleTask}) {
    return <div className="list">
        <ul>
            {
                tasksList.map(task =>
                    (<Task task={task}
                           handleDeleteTask={handleDeleteTask}
                           handleToggleTask={handleToggleTask}
                           key={task.id}/>))
            }
        </ul>
    </div>
}

function Task({task,handleDeleteTask, handleToggleTask}) {
    return <li>
        <input type="checkbox" value={task.completed} onChange={ () => handleToggleTask(task.id)}/>
        <span style={task.completed ? {textDecoration: "line-through"} : {}}>
            {task.description}
        </span>
        <button onClick={() => handleDeleteTask(task.id)}>❌</button>
    </li>
}