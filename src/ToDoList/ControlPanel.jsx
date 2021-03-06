import React, {useState} from "react";
import {useTasks} from "./TasksProvider";
import PropTypes from 'prop-types';


export const ControlPanel = () => {
    const [inputText, setInputText] = useState("");

    return (
        <div className="control-panel">
            <Title/>
            <Input inputText={inputText} inputChanger={setInputText}/>
            <Buttons inputText={inputText} inputAction={setInputText}/>
        </div>
    );
}

const Title = () =>
    <div className="control-panel__title">
        <h1>Great To Do List</h1>
    </div>

const Input = ({inputText = "", inputChanger = f => f}) =>
    <div className="control-panel__input">
        <input value={inputText} type="text" placeholder="Enter your task ..."
               onChange={event => inputChanger(event.target.value)}/>
    </div>

Input.propTypes = {
    inputText: PropTypes.string,
    inputChanger: PropTypes.func
}

const Buttons = ({inputText = "default text", inputAction = f => f}) => {
    const {addTask, resetTasks, sortTasks} = useTasks();

    return (
        <div className="control-panel__buttons">
            <form action="#" method="post" className="form"
                  onSubmit={e => e.preventDefault()}>

                <AddButton addAction={addTask} inputText={inputText} inputAction={inputAction}/>
                <SortButton sortAction={sortTasks}/>
                <ResetButton resetAction={resetTasks}/>
            </form>
        </div>
    )
}

Buttons.propTypes = {
    inputText: PropTypes.string,
    inputAction: PropTypes.func
}

const AddButton = ({addAction = f => f, inputText = "default text", inputAction = f => f}) => {
    const addButtonAction = () => {
        if (inputText !== "")
            addAction(inputText);
        inputAction("");
    };
    return (
        <button className="form__buttons form__buttons-add" onClick={addButtonAction}>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-wrapper" viewBox="0 0 512 512">
                <path className="svg-path"
                      d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 475.429c-120.997 0-219.429-98.432-219.429-219.429S135.003 36.571 256 36.571 475.429 135.003 475.429 256 376.997 475.429 256 475.429z"/>
                <path className="svg-path"
                      d="M256 134.095c-10.1 0-18.286 8.186-18.286 18.286v207.238c0 10.1 8.186 18.286 18.286 18.286 10.1 0 18.286-8.186 18.286-18.286V152.381c0-10.1-8.186-18.286-18.286-18.286z"/>
                <path className="svg-path"
                      d="M359.619 237.714H152.381c-10.1 0-18.286 8.186-18.286 18.286 0 10.1 8.186 18.286 18.286 18.286h207.238c10.1 0 18.286-8.186 18.286-18.286 0-10.1-8.186-18.286-18.286-18.286z"/>
            </svg>
            <span className="form__buttons-text">Add</span>
        </button>
    );
}

AddButton.propTypes = {
    inputText: PropTypes.string,
    addAction: PropTypes.func,
    inputAction: PropTypes.func
}

const SortButton = ({sortAction = f => f}) =>
    <button className="form__buttons form__buttons-sort" onClick={() => sortAction()}>
        <svg viewBox="0 0 32 32" className="svg-wrapper" xmlns="http://www.w3.org/2000/svg">
            <path className="svg-path"
                  d="M13 28a1 1 0 01-.53-.15A1 1 0 0112 27v-9.62L4.28 8.81A5 5 0 013 5.46V5a1 1 0 011-1h24a1 1 0 011 1v.46a5 5 0 01-1.28 3.35L20 17.38v5.38a3 3 0 01-1.66 2.69l-4.89 2.44A1 1 0 0113 28zM5.05 6a3 3 0 00.72 1.47l8 8.86A1 1 0 0114 17v8.38l3.45-1.72a1 1 0 00.55-.9V17a1 1 0 01.26-.67l8-8.86A3 3 0 0027 6z"
                  data-name="Layer 2"/>
            <path fill="none" d="M0 0h32v32H0z"/>
        </svg>
        <span className="form__buttons-text">Sort</span>
    </button>

SortButton.propTypes = {
    sortAction: PropTypes.func
}

const ResetButton = ({resetAction = f => f}) =>
    <button className="form__buttons form__buttons-reset" onClick={() => resetAction()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-wrapper" viewBox="0 0 512 512">
            <path className="svg-path"
                  d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"/>
            <path className="svg-path"
                  d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0"/>
            <path className="svg-path"
                  d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0"/>
        </svg>
        <span className="form__buttons-text">Reset</span>
    </button>

ResetButton.propTypes = {
    resetAction: PropTypes.func
}