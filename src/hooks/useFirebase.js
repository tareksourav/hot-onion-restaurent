import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setUser(user);
                    console.log(user);
                } else {
                    setUser({});
                }
                setIsLoading(false);
            });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));

    }

    return {
        user,
        isLoading,
        SignInWithGoogle,
        logOut
    };
};

export default useFirebase;