import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config'; // Make sure your firebase config is correctly exported

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginuser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithgoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
        setCurrentUser(userData);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    registerUser,
    loginuser,
    signInWithgoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
