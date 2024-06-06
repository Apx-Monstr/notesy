// pages/index.js
"use client"
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import NotesList from '../components/NotesList';
import Header from '@/components/Header';

export default function Home() {
  const [username, setUsername] = useState('');
  const [notes, setNotes] = useState([]);


  const handleLogin = async (username) => {
    setUsername(username)
  };

  return (
    <div className='bg-white w-full'>
      {username ? (
        <div className='max-w-screen-2xl mx-auto'>
          <Header username={username}/>
          <NotesList username={username} />          
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
