import { storage } from "./base";
import { ref, getBytes, getDownloadURL } from "firebase/storage";

export const getDocumentFromPublicBucket = async ( fileName ) =>{
    const storageRef = ref(storage, `public/${fileName}`);
    const bytes = await getBytes(storageRef);
    return bytes;
}
export const getDownloadUrlFromPublicBucket = async ( fileName ) =>{
    const storageRef = ref(storage, `public/${fileName}`);
    const url = await getDownloadURL(storageRef);
    return url;
}