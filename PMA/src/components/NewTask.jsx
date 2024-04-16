import React, { useState } from 'react'

const NewTask = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const handleChange = (event) => {
        setEnteredValue(event.target.value);
    }
    return (
        <div className='flex items-center gap-4'>
            <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleChange} value={enteredValue}/>
            <button className='text-stone-700 hover:text-stone-950'>Add Task</button>
        </div>
    )
}

export default NewTask;
