import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUpWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

        //Update User Profile
        const updateUserProfile = (displayName, photoURL) => {
            setLoading(true);
            return updateProfile(auth.currentUser, { displayName, photoURL });
        }
        //Update Profile
        const profileUpdatd = (displayName, photoURL) => {
            setLoading(true);
            return updateProfile(auth.currentUser, { displayName, photoURL })
        }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribed();
    }, [])

    const authValue = {
        user,
        signUpWithEmail,
        signInWithEmail,
        updateUserProfile,
        profileUpdatd,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        loading

    }
    return (
        <AuthProvider.Provider value={authValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;