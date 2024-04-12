import Input from './Input.jsx'
import React, { useRef } from 'react'

const NewProject = ({ onAddingNewProject }) => {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    const handleSave = () => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const date = dateRef.current.value;
        onAddingNewProject({
            title,
            desc,
            date
        })
    }

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end my-4 gap-4'>
                <li>
                    <button className='text-stone-800 hover:text-stone-950'>
                        Cancel
                    </button>
                </li>
                <li>
                    <button className='px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md' onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={titleRef} label="Title" />
                <Input ref={descRef} label="Description" isTextArea />
                <Input type="date" ref={dateRef} label="Due Date" />
            </div>
        </div>
    )
}

export default NewProject
