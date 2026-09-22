import React from 'react';
import {getFirestore, collection, addDoc , getDocs, query} from "firebase/firestore";


const explore =()=>{
    return getDocs(collection(firestore, "vehicles"));
}