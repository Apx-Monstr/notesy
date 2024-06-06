import { useState } from 'react';

export default function NotesForm({ username }) {
  const [note, setNote] = useState('');
//   const [noteId, setNoteId] = useState('');
  const [message, setMessage] = useState('');


  function generateCustomID(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteId = generateCustomID(10);
    const response = await fetch(`/api/notes/${noteId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, note }),
    });

    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="w-full flex items-center p-16">
      <form className='flex gap-12 flex-col' onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Note ID"
          value={noteId}
          onChange={(e) => setNoteId(e.target.value)}
        /> */}
        <textarea
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className='bg-green-500 w-36 py-4 rounded' type="submit">Add Note</button>
        {/* {message && <p>{message}</p>} */}
      </form>
    </div>
  );
}
