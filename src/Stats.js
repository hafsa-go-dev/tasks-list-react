export default function Stats({tasksList}) {
    if(!tasksList.length) return <footer className="stats">
        <em>
            Start adding some tasks to the tasks list to get started!
        </em>
    </footer>

    const numTasks = tasksList.length;
    const tasksCompleted = tasksList.filter((task) => task.completed).length;

    return <footer className="stats">
        <em>
            { numTasks === tasksCompleted
                ? "You've completed all tasks! great job!"
                : `You have completed ${tasksCompleted} out of ${numTasks} tasks!`}
        </em>
    </footer>
}