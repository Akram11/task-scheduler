import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    task={task}
                />
            ))}
        </div>
    );
};

export default Tasks;
