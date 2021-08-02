import React, {createContext, useState, useContext, useEffect} from "react";
import tasksData from "./tasks-data.json";
import {v4 as uuidv4} from 'uuid';

const TaskContext = createContext([]);

export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(tasksData);

    useEffect(() => {
        console.log("tasks have just been changed");
        console.log(tasks);
    }, [tasks]);


    const addTask = (text) =>
        setTasks([
            ...tasks,
            {
                id: uuidv4(),
                text
            },
        ]);


    return (
        <TaskContext.Provider value={{tasks, addTask}}>
            {children}
        </TaskContext.Provider>
    );
}