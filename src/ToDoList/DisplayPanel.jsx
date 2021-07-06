import React from "react";
import {Task} from "./Task";
import {useTasks} from "./TasksProvider";

export const DisplayPanel = () => {
    const {tasks, setTasks} = useTasks([]);
    console.log(tasks);
    return (
        <div className="display-panel">
            <ListOfTasks
                data={tasks}
                emptyRender={<p>Nothing to do...</p>}
            />
        </div>
    );
}

const ListOfTasks = ({data = [], emptyRender}) => {
    return (
        <h1>{data.map((task, i) => (
            <h1>w</h1>
        ))}</h1>
    )
}

// !data.length ? (emptyRender) : (
//     {
//         data.map((task, i) => (
//             // <Task  {...task} key={i}/>
//             console.log(data[i])
//         ));
//     }
// );