import React from 'react'
import Tasks from './Tasks'

const SelectedProject = ({ project, onDeleteingProject, handleAddTask, handleDeleteTask, tasks }) => {
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
  return (
    <>
      <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold mb-2 text-stone-600'>{project.title}</h1>
            <button className='text-stone-500 hover:text-stone-950' onClick={onDeleteingProject}>DELETE</button>
          </div>
          <p className='text-stone-400 mb-4'>{formattedDate}</p>
          <p className='text-stone-600 whitespace-pre-wrap'>{project.desc}</p>
        </header>
        <Tasks handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} tasks={tasks}/>
      </div>
    </>
  )
}

export default SelectedProject
