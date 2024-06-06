import {rtdb }from '@/app/firebaseinits/fbaseinit'
import bcrypt from 'bcryptjs';
import { ref, get, set } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // console.log("Requesndjksdnfkj ", req.body)

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const userRef = ref(rtdb, `users/${username}`);
    const userSnapshot = await get(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      const isPasswordCorrect = await bcrypt.compare(password, userData.password);

      if (isPasswordCorrect) {
        const notes = [];
        if (userData.notes) {
          for (const noteId of userData.notes) {
            const noteSnapshot = await get(ref(rtdb, `notes/${noteId}`));
            if (noteSnapshot.exists()) {
              notes.push({ id: noteId, ...noteSnapshot.val() });
            }
          }
        }
        return res.status(200).json({ message: 'Login successful', notes });
      } else {
        return res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await set(userRef, { password: hashedPassword, notes: [] });
      return res.status(201).json({ message: 'User registered successfully', notes: [] });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
