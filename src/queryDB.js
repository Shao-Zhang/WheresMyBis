import db from "./fireBaseDB";
import { doc, getDoc } from "firebase/firestore"; 



async function queryDataBase(docName){
    const docRef = doc(db, "ulduar", docName);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        return docSnap.data();
    } else {
        alert("Error getting BIS list");
    }
}


export default queryDataBase;


