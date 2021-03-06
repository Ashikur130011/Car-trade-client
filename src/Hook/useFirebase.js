import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase =()=> {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
// console.log(admin);

    const registerUser = (email, password, name, history,uri) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          // Signed in
          setAuthError("");
          // const newUser = { email, displayName: name };
          
          // save user to database
          saveUser(email, name, "POST");

          // send name to firebase After creation
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {});
          history.replace(uri);
        })
        .catch((error) => {
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    };

    const logInUser = (email, password, history, uri) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          history.replace(uri);
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
    }, [auth]);
    
    //set admin
    useEffect( () => {
      fetch(`https://stormy-coast-87051.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data))
    },[user.email])

    //Save user
    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch(`https://stormy-coast-87051.herokuapp.com/users`, {
        method: method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json)
        .then((body) => {
          console.log(body);
        });
    };
    //Logout
    const logOut = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setUser({})
        })
        .catch((error) => {
          // An error happened.
        })
        .finally(() => setIsLoading(false));
    };
    
     return {
       user,
       admin,
       registerUser,
       logOut,
       logInUser,
       isLoading,
       authError,
     };
}
export default useFirebase;