import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase =()=> {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setAuthError("");
          const newUser = { email, displayName: name };
          setUser(newUser);
          // save user to database
          //saveUser(email, name, "POST");

          // send name to firebase After creation
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {});
          history.replace("/");
        })
        .catch((error) => {
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    };

    const logInUser = (email, password, history, location) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || "/";
          history.replace(destination);
          // Signed in
          setAuthError("");
          // ...
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };
    //observe
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          
         
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribe;
    }, []);
    
    //Logout
    const logOut = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    };
    
     return {
       user,
       registerUser,
       logOut,
       logInUser,
       isLoading,
       authError,
     };
}
export default useFirebase;