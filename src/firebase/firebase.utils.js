import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import collectionItem from '../components/collection-item/collection-item';

const config = {
    apiKey: "AIzaSyBea7RfKEXywYvqyiDVjs7RnHJ6d06gNJA",
    authDomain: "crown-db-a2e96.firebaseapp.com",
    databaseURL: "https://crown-db-a2e96.firebaseio.com",
    projectId: "crown-db-a2e96",
    storageBucket: "crown-db-a2e96.appspot.com",
    messagingSenderId: "207596729696",
    appId: "1:207596729696:web:cc1bf81c08a85f47a61a05",
    measurementId: "G-ST061RL4M0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
        
    }

    return userRef;
} 

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const covertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;