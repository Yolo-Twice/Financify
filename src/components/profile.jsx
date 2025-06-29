import { auth,db } from "../firebase/firebase"
import { useState } from "react"


export default function Profile(){
    const [userDetails,setUserDetails]=useState(null)
    const fetchUserData = async() => {
        auth.onAuthStateChange(async (user)=>{
            console.log(user)
            setUserDetails(user)
        })
    }

    return (
        <div>
            <button onClick={fetchUserData}>Click ME!</button>
        </div>
    )
}
