import {rtdb} from "@/app/firebaseinits/fbaseinit"
import {ref, get} from "firebase/database"

export default async function handler(req, res) {
    if (req.method === "POST"){
        const {username} = req.body;
        const userRef = ref(rtdb, `users/${username}/notes`);
        const userNotes = await get(userRef);
        if (userNotes.exists()){
            // console.log(userNotes.val())
            return res.status(200).json({message:"User notes Fetched Successfully", notes:userNotes.val()})
        }
        return res.status(404).json({error:"User Not Found"})
    }
}