import React from "react";

import {Task} from "./Task";
import {useTasks} from "./TasksProvider";
import PropTypes from "prop-types";

export const DisplayPanel = () => {
    const {tasks} = useTasks([]);

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

ListOfTasks.propTypes = {
    data: PropTypes.array,
    emptyRender: PropTypes.element
}
