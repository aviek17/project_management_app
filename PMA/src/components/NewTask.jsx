import React, { useState } from 'react'

const NewTask = ({ handleAddTask }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    }
    const handleAddNewTask = () => {
        handleAddTask(enteredValue);
        setEnteredValue("");
    }
    return (
        <div className='flex items-center gap-4'>
            <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} value={enteredValue} />
            <button className='text-stone-700 hover:text-stone-950' onClick={handleAddNewTask}>Add Task</button>
        </div>
    )
}

export default NewTask;

