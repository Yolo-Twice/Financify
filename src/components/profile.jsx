import { useAuth } from "../Effects/AuthContext"
import { useState } from "react"
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Profile(){
    const { user,userData } = useAuth();
    
    return (
            <p className="mx-auto">Welcome to FinaciFY, {userData?.name.split(" ")[0]}</p>
    )
}
