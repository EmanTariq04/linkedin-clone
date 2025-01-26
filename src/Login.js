// import React, { useState } from 'react'
// import './Login.css'
// import { useDispatch } from 'react-redux';
// import { auth, createUserWithEmailAndPassword } from "./firebase"
// import { login } from './features/userSlice'

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [profilePic, setProfilePic] = useState("");
//     const dispatch = useDispatch();


//     const loginToApp = (e) => {
//         e.preventDefault();
//     };
    
//     const register = () => {
//       if (!name) {
//         return alert("please enter ur full name")
//       }

//       createUserWithEmailAndPassword(auth, email, password) 

//       .then((userAuth) => {
//         userAuth.user.updateProfile({
//           displayName: name,  
//           photoURL: profilePic,  
//         })

//         .then(() => {
          
//           dispatch(login({
//             email: userAuth.user.email,  
//             uid: userAuth.user.uid,      
//             displayName: name,           
//             photoURL: profilePic         
//           }));
//         });
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <div className='login'>
//      <img src='images/LinkedIn_Logo_2013.svg.png' alt='big-logo' />

//      <form>
//         <input
//         value={name}
//         onChange={(e) => setName(e.target.value)} placeholder='Full Name (required while registering)' type='text' />


//         <input
//         value={profilePic}
//         onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Picture URL (optional)'
//         type='text' />


//         <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder='Email'
//         type='email' />


//         <input 
//         value={password}
//         onChange={e => setPassword(e.target.value)}placeholder='Password' 
//         type='Password' />


//         <button type='submit' onClick={loginToApp}> Sign In </button>
//          </form>


//          <p> Not a member?{""}
//          <span className='login-register' onClick={register}> Register Now </span>
//          </p>
//     </div>
//   )
// }

// export default Login













import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase';
import { login } from './features/userSlice';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();




  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password) => password.length >= 6;

  // Handle user login
  const loginToApp = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    if (!isValidEmail(email)) {
      return alert('Please enter a valid email address');
    }


    if (!isValidPassword(password)) {
      return alert('Password should be at least 6 characters');
    }


    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        alert(`Error: ${error.message}`);
      });
  };

  // Handle user registration
  const register = () => {
    if (!name) {
      return alert('Please enter your full name');
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img src='images/LinkedIn_Logo_2013.svg.png' alt='big-logo' />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name (required while registering)'
          type='text'
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile Picture URL (optional)'
          type='text'
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{' '}
        <span className='login-register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
