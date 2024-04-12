import React from 'react'
import noProjectImg from "../assets/no-projects.png"
import Button from './Button.jsx'

const NoProjectSelected = ({ onAddingNewProject }) => {
    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImg} alt="Empty List" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl text-stone-500 font-bold my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or get started with new one</p>
            <p className='mt-8'>
                <Button onClick={onAddingNewProject}>
                    Create New Project
                </Button>
            </p>
        </div>
    )
}

export default NoProjectSelected
