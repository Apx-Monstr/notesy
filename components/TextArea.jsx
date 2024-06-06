import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const TextArea = ({ value, onChange }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    const textArea = textAreaRef.current;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
      rows="1"
      placeholder="Type something..."
    />
  );
};

export default TextArea;
