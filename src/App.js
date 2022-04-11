
import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';

const auth=getAuth(app)

function App() {
  const [user,setUser]=useState({})
  const gooleProvider =new GoogleAuthProvider();
  const githubProvider =new GithubAuthProvider();
 

  const handleGoogleSignin=()=>{
    console.log("working");
    signInWithPopup(auth,gooleProvider)
    .then(result =>{
      const user =result.user;
      setUser(user)
      console.log(user);

    })
    .catch(error=>{
      console.log(error );
    })
  }
  const handleGithubSignIn=()=>{
     signInWithPopup(auth,githubProvider)
     .then(result =>{
       const user = result.user
       setUser(user)
       console.log(user);
     })
     .catch(error =>{
       console.log(error);
     })
  }
  // const handleGoogleSignOut=()=>{
  //   signOut(auth)
  //  .then(()=>{
  //   setUser({})
  //   console.log("signout working");
  //  })
  //   .catch(error =>{
  //     setUser({});
  //   })
  // }

  const handleSignOut =()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      setUser({})
    })
  }
  
  return (
    <div className="App">
       <h1>Name : {user.displayName}</h1>
       <h2>Email : {user.email}</h2>
     { 
       !user.displayName? <> 
       <button onClick={handleGoogleSignin}>Google SignIn</button>
       <button onClick={handleGithubSignIn}>Github SignIn</button>
       <button onClick={handleGithubSignIn}>Facebook SignIn</button>
       </>
       :
       <>
       
       <button onClick={ handleSignOut}>Sign Out</button>
       </>
      
      }
    </div>
  );
}

export default App;
