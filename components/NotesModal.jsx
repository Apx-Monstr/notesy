import React from 'react'
const NotesModal = ({ isOpen, onClose, noteId, note, setNote, setNoteId, handleSave }) => {
  if (!isOpen) return null;

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Note </h2>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        <textarea
          value={note}
          onChange={handleNoteChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          rows="5"
          placeholder="Type your note here..."
        />
        <button
          onClick={handleSave}
          className="mt-4 w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default NotesModal;
