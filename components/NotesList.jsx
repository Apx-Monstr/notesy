import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import NotesModal from "./NotesModal";
export default function NotesList({username}) {
    const [notes,setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [noteId, setNoteId] = useState('');
    const [note, setNote] = useState('');
    function generateCustomID(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    const openModal = (id = '', content = '') => {
        console.log(id, content)
        setNoteId(id)
        setNote(content);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSave = async () => {
      console.log('Note ID:', noteId);
      if (noteId === ''){
        const newId = generateCustomID(10);
        const response = await fetch(`/api/notes/${newId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, note }),
        });
        const data = response.json();
        setNotes([...notes, newId]);
      } else{
        const response = await fetch(`/api/notes/${noteId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note }),
          });
      
        const data = await response.json();
        setNotes(notes.map(n => n === noteId ? noteId : n));
      }
    //   console.log(data.message || data.error);
      closeModal();
      fetchNotes()
    };
  
    const fetchNotes = async () => {
        try {
            const res = await fetch(`/api/userNotes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username })
            });
            const data = await res.json();
            setNotes(data.notes || []);
            // console.log(notes)
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };
    useEffect(() => {
        fetchNotes();
    }, [username]);
    // useEffect(()=>(
    //     fetchNotes()
    // ), [])
    return (
      <div className="w-full bg-white p-16">
        <h3 className="text-4xl pb-8">Your Notes🙂</h3>
            {(
                <div className="flex gap-4 flex-wrap">
                    <NotesModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        noteId={noteId}
                        note={note}
                        setNote={setNote}
                        setNoteId={setNoteId}
                        handleSave={handleSave}
                    />
                    <button onClick={()=>openModal()} className="h-56 w-56 flex items-center justify-center text-2xl border rounded border-black border-dotted"> +Add Notes </button>
                    {notes.map((note) => (
                        // have individual notes to be fetched by individual note card
                        <NoteCard openModal={openModal} key={note} noteid={note}/>
                    ))}
                </div>
            )}
      </div>
    );
  }
  