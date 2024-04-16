import React from 'react'
import NewTask from './NewTask'

const Tasks = ({ tasks, handleAddTask, handleDeleteTask }) => {
    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 my-4'>Tasks</h2>
            <NewTask handleAddTask={handleAddTask} />
            {
                tasks.length === 0 &&
                <p className='text-stone-800 mb-4'>This project doesnot have any tasks yet</p>
            }
            {
                tasks.length > 0 &&
                <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                    {
                        tasks.map(task =>
                            <li key={task.id} className='flex my-4 justify-between'>
                                <span>{task.task}</span>
                                <button className='text-stone-700 hover:text-red-600' onClick={() => handleDeleteTask(task.id)}>
                                    Clear
                                </button>
                            </li>
                        )
                    }
                </ul>
            }
        </section>
    )
}

export default Tasks
