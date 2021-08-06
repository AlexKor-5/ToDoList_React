import React, {useEffect, useRef, useState} from "react";
import {useTasks} from "./TasksProvider";
import PropTypes from "prop-types";

export const Task = ({text = "", orderNumber = 0, id = ""}) => {
    const {doneTask} = useTasks();
    const refTextArea = useRef(null);
    const [textareaRead, setTextareaRead] = useState(true);

    return (
        <div className="task">
            <div className="display-panel__wrapper">
                <TaskNumber number={orderNumber}/>
                <TaskText txt={text}
                          refTextArea={refTextArea}
                          textareaRead={textareaRead}
                          setTextareaRead={setTextareaRead}
                          id={id}
                />
            </div>
            <div className="display-panel__buttons">
                <EditButton refTextArea={refTextArea} setTextareaRead={setTextareaRead}/>
                <CheckButton doneAction={doneTask} id={id}/>
                <CrossButton crossAction={doneTask} id={id}/>
            </div>
        </div>
    );
}

Task.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    orderNumber: PropTypes.number
}

const TaskNumber = (props) =>
    <div className="display-panel__number">
        <span className="display-panel__circle">{props.number}</span>
    </div>

TaskNumber.propTypes = {
    number: PropTypes.number
}

const fixTextareaSize = textarea => {
    if (textarea === null) return
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 2 + "px"
}

const TaskText = (props) => {
    const {tasks, addEditedTextContent} = useTasks();

    const blurAction = () => {
        if (!props.refTextArea.current) return
        props.refTextArea.current.blur();
        props.setTextareaRead(true);
    }

    const inputAction = (e) => {
        const textContent = e.target.value;
        addEditedTextContent(props.id, textContent);
    }

    useEffect(() => {
        fixTextareaSize(props.refTextArea.current);
    }, [tasks, props.refTextArea]);


    return (
        <div className="display-panel__text">
           <textarea ref={props.refTextArea} defaultValue={props.txt}
                     onInput={(e) => {
                         fixTextareaSize(props.refTextArea.current);
                         inputAction(e);
                     }}
                     readOnly={props.textareaRead}
                     onBlur={blurAction}
           />
        </div>
    )
}

TaskText.defaultProps = {
    txt: "",
    refTextArea: null,
    textareaRead: true,
    setTextareaRead: (f) => f,
    id: ""
};

TaskText.propTypes = {
    txt: PropTypes.string,
    refTextArea: PropTypes.object,
    textareaRead: PropTypes.bool,
    setTextareaRead: PropTypes.func,
    id: PropTypes.string
};

const EditButton = ({refTextArea = {}, setTextareaRead = f => f}) => {
    const EditButtonAct = () => {
        if (!refTextArea.current) return
        setTextareaRead(false);
        refTextArea.current.focus();
    }
    return (
        <button className="display-panel__button" onClick={EditButtonAct}>
            <svg xmlns="http://www.w3.org/2000/svg" className="display-panel__svg"
                 viewBox="0 0 512.001 512.001">
                <path className="display-panel__path"
                      d="M496.063 62.299l-46.396-46.4c-21.2-21.199-55.69-21.198-76.888 0l-18.16 18.161 123.284 123.294 18.16-18.161c21.248-21.249 21.251-55.643 0-76.894zM22.012 376.747L.251 494.268a15.002 15.002 0 0017.48 17.482l117.512-21.763-113.231-113.24zM333.407 55.274L38.198 350.506l123.284 123.293 295.209-295.231z"/>
            </svg>
        </button>
    );
}
EditButton.propTypes = {
    refTextArea: PropTypes.object,
    setTextareaRead: PropTypes.func
}

const CheckButton = ({doneAction = f => f, id = ""}) =>
    <button className="display-panel__button"
            onClick={() => doneAction(id)}>
        <svg viewBox="0 0 512 512" className="display-panel__svg" xmlns="http://www.w3.org/2000/svg">
            <path className="display-panel__path"
                  d="M369.164 174.77c7.813 7.812 7.813 20.476 0 28.285L234.992 337.23c-7.812 7.81-20.472 7.81-28.285 0l-63.871-63.875c-7.813-7.808-7.813-20.472 0-28.28 7.809-7.813 20.473-7.813 28.281 0l49.73 49.73L340.88 174.77c7.812-7.81 20.476-7.81 28.285 0zM512 256c0 141.504-114.516 256-256 256C114.496 512 0 397.484 0 256 0 114.496 114.516 0 256 0c141.504 0 256 114.516 256 256zm-40 0c0-119.395-96.621-216-216-216-119.395 0-216 96.621-216 216 0 119.395 96.621 216 216 216 119.395 0 216-96.621 216-216zm0 0"/>
        </svg>
    </button>

CheckButton.propTypes = {
    doneAction: PropTypes.func,
    id: PropTypes.string
}

const CrossButton = ({crossAction = f => f, id = ""}) =>
    <button className="display-panel__button" onClick={() => crossAction(id)}>
        <svg viewBox="0 0 512 512" className="display-panel__svg" xmlns="http://www.w3.org/2000/svg">
            <path className="display-panel__path"
                  d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"/>
            <path className="display-panel__path"
                  d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 01-12.925 5.36zm0 0"/>
            <path className="display-panel__path"
                  d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 01-12.93 5.36zm0 0"/>
        </svg>
    </button>

CrossButton.propTypes = {
    crossAction: PropTypes.func,
    id: PropTypes.string
}