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
        console.log(id);
    };
    return (
        <div className="App">
            <Header />
            <Tasks onDelete={deleteTask} tasks={tasks} />
        </div>
    );
}

export default App;
