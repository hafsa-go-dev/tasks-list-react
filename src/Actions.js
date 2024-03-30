export default function Actions({setTasksList}) {
    function clearList() {
        const confirmDelete = window.confirm('Are you sure you want to delete all tasks?');
        if (confirmDelete) {
            setTasksList([]);
        }
    }

    return <div className="actions">
        <button onClick={() => clearList()}>Clear list</button>
    </div>
}