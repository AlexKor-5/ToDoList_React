import React from "react";
import ReactDOM from "react-dom";
import {ToDoList} from "./ToDoList/ToDoList";


const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);