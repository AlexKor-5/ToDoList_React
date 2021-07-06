import React from "react";

import "./css/reset.css";
import "./css/style.css";
import {ControlPanel} from "./ControlPanel";
import {DisplayPanel} from "./DisplayPanel";

export const ToDoList = () => {
    return (
        <>
            <div className="container">
                <ControlPanel/>
                <DisplayPanel/>
            </div>
        </>
    );
}