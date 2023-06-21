import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import Addnote from './Addnote'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context
    return (
        <>
            <Addnote />
        <div className="row my-3">
            <h1>Your notes</h1>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note} />
            }
            )}
        </div>
        </>)
}

export default Notes