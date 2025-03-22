// import React from 'react'
// import './App.css';
// // import { Route } from 'react-router-dom/cjs/react-router-dom.min';
// import { Route } from 'react-router-dom';
// // import Homepage from './pages/Homepage';
// import Chatpage from './pages/Chatpage';
// import Login from './component/authentication/Login.js';
// import Signup from './component/authentication/Signup.js';
// import LoginSignup from './component/authentication/LoginSignup.js';
// // import { Button } from "@/components/ui/button"
// // import Button from './components/ui/button';


// function App() {
//   return (
//     <div className='App'>

//         <Route path='/' component={LoginSignup}/>
//         <Route path='/chats' component={Chatpage}/>
//         <Route path='/login' component={Login}/>
//         <Route path='/signup' component={Signup}/> 
       
//         {/*listen when we run with /chats then both route shown why? coz '/' includen in '/chats' */}
//     </div>
//   );
// }

// export default App;




/*


import React, { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import Login from "./component/authentication/Login";
import Signup from "./component/authentication/Signup";
// import LoginSignup from "./component/authentication/LoginSignup"
import "./App.css";
import { BrowserRouter as  Route } from "react-router-dom";

const App = () => {

  //this is for ->chats
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats"); 
  }, [history]); 

//yha tk

  const [isLogin, setIsLogin] = useState(true); // Manages which form is visible

  const toggleFormForSwitch = () => {
      setIsLogin(!isLogin); 
  }
  

  const toggleForm = (page) => {
    setIsLogin(page === "login"); // Updates the state based on the clicked button
  };

  return (
     <>
     
<div className="container">
<div className="card">
     <h1>Talk-A-Tive</h1>
   <div>
   <button
     className={isLogin ? "active" : "inactive"}
     onClick={() => toggleForm("login")}
   >
     Login
   </button>
   <button
     className={!isLogin ? "active" : "inactive"}
     onClick={() => toggleForm("signup")}
   >
     Sign Up
   </button>
 </div>

 </div>
      {isLogin ? (
     <Route exact path="/login">
        <div>
           <Login />
         <p>
            Don't have an account?{' '}
            <span className="switch-link" onClick={toggleFormForSwitch}>
              Sign up
            </span>
          </p>
          </div>
        </Route>
      ) : (
        <Route exact path="/signup">
        <div>
          <Signup/>
          <p>
            Already have an account?{' '}
            <span className="switch-link" onClick={toggleFormForSwitch}>
              Login
            </span>
          </p>
        </div> 
      </Route>
      )}

    </div> 
    
     </>
   
  );
};

export default App;  */









// import React, { useState } from "react";
// import { BrowserRouter as  Route, Switch, useHistory } from "react-router-dom";
// import Login from "./component/authentication/Login";
// import Signup from "./component/authentication/Signup";
// import Chatpage from "./pages/Chatpage";
// import "./App.css";

// const App = () => {
//   const [isLogin, setIsLogin] = useState(true); // For toggling between login and signup
//   const history = useHistory();

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     history.push(isLogin ? "/signup" : "/login"); // Redirect to the appropriate route
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <h1>Talk-A-Tive</h1>
//           <Switch>
//             <Route exact path="/">
//               <div>
//                 <button
//                   className={isLogin ? "active" : "inactive"}
//                   onClick={() => history.push("/login")}
//                 >
//                   Login
//                 </button>
//                 <button
//                   className={!isLogin ? "active" : "inactive"}
//                   onClick={() => history.push("/signup")}
//                 >
//                   Sign Up
//                 </button>
//               </div>
              
//             </Route>

//             <Route exact path="/login">
//               <div>
//                 <Login />
//                 <p>
//                   Don't have an account?{" "}
//                   <span className="switch-link" onClick={toggleForm}>
//                     Sign up
//                   </span>
//                 </p>
//               </div>
//             </Route>

//             <Route exact path="/signup">
//               <div>
//                 <Signup />
//                 <p>
//                   Already have an account?{" "}
//                   <span className="switch-link" onClick={toggleForm}>
//                     Login
//                   </span>
//                 </p>
//               </div>
//             </Route>

//             <Route exact path="/chats" component={Chatpage} />
//           </Switch>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;







// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
// import Login from "./component/authentication/Login";
// import Signup from "./component/authentication/Signup";
// import "./App.css";
// import Chats from "./Pages/Chatpage"; // ✅ Import your chats page

// const App = () => {
//   const [user, setUser] = useState(null);
//   const history = useHistory(); // ✅ Correctly using useHistory()

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setUser(userInfo);
//     if (userInfo) {
//       history.push("/chats"); // ✅ Redirect if user exists
//     }
//   }, [history]);

//   return (
//     <Router>
//       <Switch>
//         {/* ✅ Redirect to /chats if user is logged in */}
//         <Route exact path="/">
//         {localStorage.getItem("userInfo") ? <Chats /> : <Redirect to="/chats" />}
//        </Route>

//         <Route exact path="/chats">
//         {localStorage.getItem("userInfo") ? <Chats /> : <Redirect to="/" />}
//        </Route>
//       </Switch>
//     </Router>
//   );
// };

// // ✅ Separated Authentication Page (Login/Signup)
// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const toggleForm = () => setIsLogin(!isLogin);

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Talk-A-Tive</h1>
//         <div>
//           <button className={isLogin ? "active" : "inactive"} onClick={() => setIsLogin(true)}>Login</button>
//           <button className={!isLogin ? "active" : "inactive"} onClick={() => setIsLogin(false)}>Sign Up</button>
//         </div>
//       </div>

//       {isLogin ? <Login /> : <Signup />}
//       <p>
//         {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//         <span className="switch-link" onClick={toggleForm}>
//           {isLogin ? "Sign up" : "Login"}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default App;



import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}


export default App;