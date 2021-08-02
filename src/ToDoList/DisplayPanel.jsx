import React from "react";

import {Task} from "./Task";
import {useTasks} from "./TasksProvider";

export const DisplayPanel = () => {
    const {tasks} = useTasks([]);
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

const ListOfTasks = ({data = [], emptyRender = <p>Nothing</p>}) => {
    return !data.length ? (emptyRender) : (
        <>
            {data.map((task, i) => (
                <Task  {...task} key={i} orderNumber={i + 1}/>
            ))}
        </>
    )
}
