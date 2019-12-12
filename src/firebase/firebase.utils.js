import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAWH2_Ebpt6HxPkU5qazmKKs8WNzmh680",
    authDomain: "react-lyrics-app.firebaseapp.com",
    databaseURL: "https://react-lyrics-app.firebaseio.com",
    projectId: "react-lyrics-app",
    storageBucket: "react-lyrics-app.appspot.com",
    messagingSenderId: "329575215546",
    appId: "1:329575215546:web:507421d11e7ddafe306d83",
    measurementId: "G-8C3SX85FBW"
  };

//creating user profile document if it doesn't exist
export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const favSongs = [];
       const counter = 0;
       const createdAt = new Date();

       try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            favSongs,
            counter,
            ...additionalData
        })

       }catch(error){
            console.log('error creating user', error.message)

       }
    }

    return userRef;

}

//adding user's favorite songs
export const saveFavSongs = async (userID, file) =>{
    const docRef = firestore.doc(`users/${userID}`)
    const snapshot = await docRef.get()
    if(snapshot.exists){
        try{
            await docRef.update({
                "favSongs": firebase.firestore.FieldValue.arrayUnion(file)
            })
        }catch(err){
            console.log(err);
        }
    }    
}

//deleting user's favorite songs
export const deleteFavSongs = async (userID, file) =>{
    const docRef = firestore.doc(`users/${userID}`)
    const snapshot = await docRef.get();
    if(snapshot.exists){
        try{
            await docRef.update({
                "favSongs": firebase.firestore.FieldValue.arrayRemove(file)
            })
        }catch(err){
            console.log(err);
        }
    }
}

//increasing counter when checkings lyrics
export const incCounter = async userID =>{
    const docRef = firestore.doc(`users/${userID}`)
    const snapshot = await docRef.get();
    const snapshotData = snapshot.data();

    if(snapshot.exists){
        try{
            await docRef.update({
                "counter": snapshotData["counter"]+1
            })
        }catch(err){
            console.log(err);
        }
    }
}


firebase.initializeApp(config);

//adding collections and docs of items to firebase
export const addCollectionAndDocs = async (collectionName, objToAdd) =>{
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();

    objToAdd.forEach(obj =>{
        const newRefDoc = collectionRef.doc();

        batch.set(newRefDoc, obj)
    })
    return await batch.commit();
}

//converting snapshot with data from firebase into object to redux
export const convertAlbumsSnapshotToMap = albums =>{
    const transformedAlbums = albums.docs.map(doc =>{
        const {id, title, imageUrl, imageUrlHeader, wikiUrl, routeName, producer, length, year, spotifyUri, info, songs} = doc.data();

        return{
            id, title, imageUrl, imageUrlHeader, wikiUrl, routeName, producer, length, year, spotifyUri, info, songs
        }

    })
    return transformedAlbums.reduce((acc, album) =>{
        acc[album.title.toLowerCase().replace(/\s+/g, '')] = album;
        return acc;
    }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();






const providerGoogle = new firebase.auth.GoogleAuthProvider()
const providerFacebook = new firebase.auth.FacebookAuthProvider();

providerGoogle.setCustomParameters({
    prompt: 'select_account'
})

providerFacebook.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export default firebase;