import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
    const state = [
        {
            id: 1,
            text: "this is task",
            date: "feb 3th at 2300",
            reminder: true,
        },
    ];
    const [tasks, setTasks] = useState(state);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
        console.log(tasks[0].reminder);
    };
    return (
        <div className="App">
            <Header />
            {tasks.length > 0 ? (
                <Tasks
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    tasks={tasks}
                />
            ) : (
                "No Tasks "
            )}
        </div>
    );
}

export default App;
