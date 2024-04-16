import React from 'react'
import Button from './Button.jsx'

const ProjectSidebar = ({ onAddingNewProject, projects, onSelectingProject, selectedProjectId }) => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
                Your Projects
            </h2>
            <Button onClick={onAddingNewProject}>
                + Add Projects
            </Button>
            <ul className='mt-8'>
                {
                    projects.map(project => {
                        const normalProjectClass = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
                        const selectedProjectClass = normalProjectClass + " bg-stone-800 text-stone-200";
                        return (
                            <>
                                <li key={project.id}>
                                    <button
                                        className={selectedProjectId === project.id ? selectedProjectClass : normalProjectClass}
                                        onClick={() => { onSelectingProject(project.id) }}>
                                        {project.title}
                                    </button>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default ProjectSidebar
