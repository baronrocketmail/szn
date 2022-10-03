// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, query, where, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPGmgTxlAsVkakZrGbs8NTF2r0RcWu_ig",
    authDomain: "luminous-lambda-364207.firebaseapp.com",
    projectId: "luminous-lambda-364207",
    storageBucket: "luminous-lambda-364207.appspot.com",
    messagingSenderId: "518969290682",
    appId: "1:518969290682:web:d7be744cb378ec83d4f783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

getUnpaid()

export async function getUnpaid() {
    return new Promise(function(resolve, reject) {
        const unpaidQuery = query(collection(getFirestore(), "/units/18572 cull canyon/payments"), where("status", "==", "unpaid"))

         getDocs(unpaidQuery).then(snapshot => {
             let unpaidArry = [];
            snapshot.docs.forEach(elem => unpaidArry.push(elem.data()))
            console.log((snapshot.docs).length)
            console.log(unpaidArry)
             resolve(unpaidArry)
        })

    })

    // return unpaidArry;
}
getName()
export async function getName() {
    return new Promise(function(resolve, reject) {
        const unpaidQuery = query(collection(getFirestore(), "/units/18572 cull canyon/payments"), where("status", "==", "unpaid"))

        const colRef = collection(getFirestore(), "/units/18572 cull canyon/info")
        getDocs(colRef).then(snapshot => {
            let unpaidArry = [];
            snapshot.docs.forEach(elem => unpaidArry.push(elem.data()))
            console.log((snapshot.docs).length)
            console.log(unpaidArry)
            resolve(unpaidArry)
        })

    })
    // return{url: "/", name: "18572 cull canyon"}



    // return unpaidArry;
}



