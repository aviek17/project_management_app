import React from 'react'
import NewTask from './NewTask'

const Tasks = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 my-4'>Tasks</h2>
      <NewTask/>
      <p className='text-stone-800 mb-4'>This project doesnot have any tasks yet</p>
      <ul></ul>
    </section>
  )
}

export default Tasks
