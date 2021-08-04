import React, {createContext, useState, useContext, useEffect} from "react";
// import tasksData from "./tasks-data.json";
import {v4 as uuidv4} from 'uuid';
import PropTypes from "prop-types";

const TaskContext = createContext([]);
export const useTasks = () => useContext(TaskContext);

const key = "TODOLIST";
const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

const loadJSON = key =>
    key && JSON.parse(localStorage.getItem(key));

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(loadJSON(key) || []);

    useEffect(() => {
        console.log(tasks);
        saveJSON(key, tasks);
    }, [tasks]);


    const addTask = (text) =>
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                text
            },
        ]);

    const resetTasks = () =>
        setTasks([]);

    const sortTasks = () =>
        setTasks([...tasks].reverse());

    const doneTask = (id) =>
        setTasks(tasks.filter(item => item.id !== id));

    return (
        <TaskContext.Provider value={{tasks, addTask, resetTasks, sortTasks, doneTask}}>
            {children}
        </TaskContext.Provider>
    );
}

TasksProvider.propTypes = {
    children: PropTypes.element
}