import React from 'react'
import './TodoItems.css'
import tick_icon from './Assets/tick.png';
import not_tick_icon from './Assets/not_tick.png';
import cross_icon from './Assets/cross.png';

const TodoItems = ({ no, text, display, setTodo }) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todo"));
        data = data.filter((todo) => todo.no!==no);
        setTodo(data);
    }
    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todo"));
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through";
                }
                else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodo(data);
    }
    return (
        <div className='todoitems'>
            <div className={`todoitems-container ${display}`} onClick={() => { toggle(no) }}>
                {display === "" ? <img src={not_tick_icon} alt="" /> : <img src={tick_icon} alt="" />}


                <div className='todoitems-text'>{text}</div>
            </div>
            <img className='todoitems-cross-icon' onClick={() => {deleteTodo(no)}} src={cross_icon} alt="" />
        </div>
    )
}

export default TodoItems;
