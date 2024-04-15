import Input from './Input.jsx'
import React, { useRef } from 'react'
import Modal from './Modal.jsx';

const NewProject = ({ onAddingNewProject, cancelProject }) => {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const modalRef = useRef();

    const handleSave = () => {
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const date = dateRef.current.value;
        if (title.trim() === "" || desc.trim() === "" || date.trim() === "") {
            modalRef.current.open();
            return;
        }
        onAddingNewProject({
            title,
            desc,
            date
        })
    }

    return (
        <>
            <Modal ref={modalRef} buttonTitle="Close">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Ooops... Looks like you forgot to enter a value</p>
                <p className='text-stone-600 mb-4'>Please make sure that you enter value for each input field</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end my-4 gap-4'>
                    <li>
                        <button className='text-stone-800 hover:text-stone-950' onClick={cancelProject}>
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
        </>
    )
}

export default NewProject
