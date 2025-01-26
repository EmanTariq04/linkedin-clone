import "./App.css";
import Header from './Header.js';
import Sidebar from "./Sidebar.js"
import Feed from "./Feed.js";
import { login, logout, selectUser } from "./features/userSlice.js";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login.js";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import  Widgets from "./Widgets.js";




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
          //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user is logged out
        dispatch(logout())
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="app">
          <Header />
           
           {!user ? (
            <Login />
           ) : (
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
            </div>
            )}
           </div>
  );
}

export default App;





















