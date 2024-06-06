
import {rtdb } from '@/app/firebaseinits/fbaseinit'
import { ref, get, set, update } from 'firebase/database';

export default async function handler(req, res) {
    // console.log("Request ", req.body, req.query)
    const noteid = req.query['id']
  const {
    // query: { noteid },
    method,
    body,
  } = req;
  // console.log(method, body, noteid)
  switch (method) {
    case 'POST':
      {
        const { username, note } = body;
        console.log(noteid, username, note)
        if (!username || !note) {
          return res.status(400).json({ error: 'Username and note are required' });
        }
        // const ref = ref(rtdb, `notes/${noteid}`)
        const noteRef = ref(rtdb, `notes/${noteid}`);
        await set(noteRef, { note });
        const userNotesRef = ref(rtdb, `users/${username}/notes`);
        const userNotesSnapshot = await get(userNotesRef);
        const userNotes = userNotesSnapshot.val() || [];
        userNotes.push(noteid);

        await update(ref(rtdb, `users/${username}`), { notes: userNotes });

        res.status(201).json({ message: 'Note added successfully', noteId: noteid });
      }
      break;
    case 'GET':
      {
        const noteRef = ref(rtdb, `notes/${noteid}/note`);
        const noteSnapshot = await get(noteRef);

        if (noteSnapshot.exists()) {
          // console.log(noteSnapshot.val())
          res.status(200).json({ note: noteSnapshot.val() });
        } else {
          res.status(404).json({ error: 'Note not found' });
        }
      }
      break;
    case 'PUT':
      {
          const { note } = body;
          if (!note) {
              return res.status(400).json({ error: 'Note content is required' });
          }

          const noteRef = ref(rtdb, `notes/${noteid}`);
          await update(noteRef, { note });

          res.status(200).json({ message: 'Note updated successfully' });
      }
      break;
    default:
      res.status(405).json({ error: 'Given Method not allowed' });
      break;
  }
}
