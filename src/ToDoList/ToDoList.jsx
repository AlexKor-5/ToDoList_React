import React from "react";

import "./css/reset.css";
import "./css/style.css";

import {ControlPanel} from "./ControlPanel";
import {DisplayPanel} from "./DisplayPanel";
import {TasksProvider} from "./TasksProvider";

export const ToDoList = () => {
    return (
        <>
            <TasksProvider>
                <div className="container">
                    <ControlPanel/>
                    <DisplayPanel/>
                </div>
            </TasksProvider>
        </>
    );
}