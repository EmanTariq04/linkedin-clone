// import React, { useEffect, useState } from 'react'
// import "./Feed.css"
// import  CreateIcon  from '@mui/icons-material/Create';
// import InputOption from './InputOption';
// import ImageIcon from '@mui/icons-material/Image';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
// import Post from './Post';
// import { Avatar } from '@mui/material';
// import { db, collection, getDocs } from './firebase'; 





// function Feed() {
//   const[input, setInput] = useState('');
//   const [posts, setPosts] = useState([]);
  

//   useEffect(() => {
//     db.collection("posts").onSnapshot((snapshot) => 
//       setPosts(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           data: doc.data(),
//         }))
//       )
//     )
//   }, [])

//   const sendPost = (e) => {
//     e.preventDefault();

//     db.collection('posts').add({
//       name: 'Eman Tariq',
//       description: 'this is a test',
//       message: input,
//       photoUrl: '',
//       timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     })
//   };




//   return (
//     <div className='feed'>
//             <div className='feed-inputContainer'>
//                <div className='feed-input'>
//                 <Avatar />
//                 <form>
//                   <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Start a post, try writing with AI'/>
//                   <button type='submit'> Send </button>
//                 </form>
//                </div>
//                <div className="feed-inputOptions">
//                 <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
//                 <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
//                 <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
//                </div>
//         </div>


//         {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
//           <Post
//           key={id}
//           name={name}
//           description={description}
//           message={message}
//           photoUrl={photoUrl}
//            />
//         ))}
      
//     </div>
//   )
// }

// export default Feed;










import React, { useEffect, useState } from 'react'
import "./Feed.css"
import  CreateIcon  from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { Avatar } from '@mui/material';
import { app } from './firebase'; 

import { getFirestore, collection, getDocs, addDoc, serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';




const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);


  const db = getFirestore(app); 
  const postsCollection = collection(db, "posts"); 
  

  useEffect(() => {
    const q = query(postsCollection, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsubscribe(); 
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();


    try {
      await addDoc(postsCollection, {
        name: user.displayName, 
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "", 
        timestamp: serverTimestamp(),
      });

     
      setInput('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed-inputContainer'>
        <div className='feed-input'>
          <Avatar />
          <form onSubmit={sendPost}>
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              type="text" 
              placeholder='Start a post, try writing with AI'
            />
            <button type='submit'> Send </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={ImageIcon} title="Media" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

         
         <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
