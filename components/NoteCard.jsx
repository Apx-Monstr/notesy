import React from 'react'
import { useState, useEffect } from 'react';
import NotesModal from './NotesModal';
const NoteCard = ({noteid, openModal}) => {
    const [note, setNote] = useState('');
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await fetch(`/api/notes/${noteid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({ username })
                });
                const data = await res.json();
                if (res.ok) {
                    setNote(data.note);
                    // console.log(data)
                    // setMessage('');
                } else {
                    // setMessage(data.error);
                    setNote(null);
                }
                // setNote(data.note || '');
                // console.log(note)
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, [noteid]);
    return (
        <div onClick={()=> openModal(noteid,note)} className='bg-gray-200 rounded border p-4 max-w-56 w-56 text-ellipsis max-h-56 h-56 select-none cursor-pointer overflow-hidden'>
            {note}
        </div>
    )
}

export default NoteCard