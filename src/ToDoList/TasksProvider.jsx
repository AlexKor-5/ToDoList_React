import React, {createContext, useState, useContext} from "react";
import tasksData from "./tasks-data.json";

const TaskContext = createContext([]);
export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(tasksData);
    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    );
}