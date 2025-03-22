import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input ,InputGroup, InputRightElement} from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";


const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const submitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, pic);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log("Signup Response:", {data});
      toast({
        title: "Registration Successful! Please login now",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/");
    } catch (error) {
      toast({
        title: "Signup failed!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dvisweqm3");
      fetch("https://api.cloudinary.com/v1_1/dvisweqm3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;






///////this is my code

// import {React, useState} from "react";
// // import "../../App.css";
// import axios from "axios";
// import {useHistory} from 'react-router-dom'
// // import { Button } from "@chakra-ui/react";

// const Signup = () => {

//   const [name,setName]=useState();
//   const [password,setPassword]=useState();
//   const [email,setEmail]=useState();
//   const [cpassword,setCpassword]=useState();
//   const [pic,setPic]=useState();
//   const [show,setShow]=useState(false);
//   const [cshow,setCshow]=useState(false);
//   const [loading,setLoading] = useState(false);
//   const history = useHistory();

//   // const toast=useToast();

//   const [notification, setNotification] = useState({
//     message: "",
//     type: "",
//     visible: false,
//   });

//   // Show notification
//   const showNotification = (message, type = "info") => {
//     setNotification({ message, type, visible: true });

//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ message: "", type: "", visible: false });
//     }, 3000);
//   };


//   const handleClickPass=()=>{
//     setShow(!show);
//   }

//   const handleClickConfPass=()=>{
//     setCshow(!cshow);
//   }


//   const postDetails=(pics)=>{
//      setLoading(true);
// //      if(pics===undefined){
//        if (!pics) {
//        showNotification("Please Select an Image!", "warning");
//        setLoading(false);
//        return;
//        }

//      if(pics.type==="image/jpeg" || pics.type==="image/png"){
//       const data=new FormData();
//       data.append("file",pics);
//       data.append("upload_preset","chat-app");
//       data.append("cloud_name","dvisweqm3");
//       // fetch("cloudinary://943858365123144:FKUlSw-3B@dvisweqm3",{
//         fetch("https://api.cloudinary.com/v1_1/dvisweqm3/image/upload", {
//         method:"POST",
//         body:data,
//         })
//       // }).then((res)=>res.json())
//       //   .then(data=>{
//       //     setPic(data.url.toString());
//       //     console.log(data.url.toString());
//       //     setLoading(false);

//           .then((res) => res.json())
//                   .then((data) => {
//                     setPic(data.url.toString());
//                     console.log(data)
//                     showNotification("Image uploaded successfully!", "success");
//                     setLoading(false);
//                   })
//         // })
//         .catch((err)=>{
//           console.log(err);
//           setLoading(false);
//         });

//      }else{
//       showNotification("Please Select a Valid Image!", "warning");
//       setLoading(false);
//        return;
//      }
//   };

   
//   const validateEmail = (email) => {
//     // Regular expression for validating an email
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };
  
//     const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (!name || !email || !password || !cpassword) {
//       showNotification("Please fill all fields!", "error");
//       setLoading(false);
//       return;
//     }
//     if (password !== cpassword) {
//       showNotification("Passwords do not match!", "error");
//       return;
//     }
//     if (!validateEmail(email)) {
//       showNotification("Please enter a valid email address!", "error");
//       setLoading(false);
//       return;
//     }
//     try{
//       const config = {
//         headers:{
//           "Content-type":"application/json"
//         },
//       };
//       const {data} = await axios.post("/api/user",{name,email,password,pic},config);
 
//       showNotification("Signup successful!", "success");

//       localStorage.setItem("userInfo",JSON.stringify(data));
//       setLoading(false);

//       history.push('/chats');

//     }catch(error){
//      showNotification(error.response.data.message);
//      setLoading(false);
//     }
    
//   };



//   return (
//     <div>
//       {/* toast*/}
//       {notification.visible && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20px",
//             right: "20px",
//             backgroundColor:
//               notification.type === "success"
//                 ? "#4caf50"
//                 : notification.type === "error"
//                 ? "#f44336"
//                 : "#ff9800",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             zIndex: 9999,
//           }}
//         >
//           {notification.message}
//         </div>
//       )}


//       <form onSubmit={submitHandler}>
//         <div>
//           <label>Name *</label>
//           <input type="text" placeholder="Enter your name" required onChange={(e)=>setName(e.target.value)} />
//         </div>

//         <div>
//           <label>Email Address *</label>
//           <input type="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
//         </div>

//         <div>
//           <label>Password *</label>
//           <div style={{ display: "flex", alignItems: "center" }}>
//           <input type={show ? "text":"password"} placeholder="Confirm your password" required onChange={(e)=>setPassword(e.target.value)}/>
          
//           <span onClick={handleClickPass} 
//           style={{
//           marginLeft: "10px",
//           padding: "5px 10px",
//           fontSize: "12px",
//           cursor: "pointer",
//           }}> {show ? "Hide":"Show"} </span>
//           </div>
//         </div>

//         <div>
//           <label>Confirm Password *</label>
//           <div style={{ display: "flex", alignItems: "center" }}>
//           <input type={cshow ? "text":"password"} placeholder="Confirm your password" required onChange={(e)=>setCpassword(e.target.value)}/>
          
//           <span onClick={handleClickConfPass} 
//           style={{
//           marginLeft: "10px",
//           padding: "5px 10px",
//           fontSize: "12px",
//           cursor: "pointer",
//         }}> {cshow ? "Hide":"Show"} </span>
//           </div>
//         </div>

//         <div>
//         <label>Upload Your Picture</label>
//          <input type="file" onChange={(e)=>postDetails(e.target.files[0])}/>
//        </div>

//         <button type="submit" onClick={submitHandler} isLoading={loading}>Sign Up</button>
        
//       </form>
//     </div>
//   );
// };

// export default Signup;









///////ye aur upper vala same h

// import React, { useState } from "react";
// import { Button } from "@chakra-ui/react";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [cpassword, setCpassword] = useState("");
//   const [pic, setPic] = useState("");
//   const [show, setShow] = useState(false);
//   const [cshow, setCshow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Custom toast state
//   const [notification, setNotification] = useState({
//     message: "",
//     type: "",
//     visible: false,
//   });

//   // Show notification
//   const showNotification = (message, type = "info") => {
//     setNotification({ message, type, visible: true });

//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ message: "", type: "", visible: false });
//     }, 3000);
//   };

//   const handleClickPass = () => {
//     setShow(!show);
//   };

//   const handleClickConfPass = () => {
//     setCshow(!cshow);
//   };

//   const postDetails = (pics) => {
//     setLoading(true);
//     if (!pics) {
//       showNotification("Please Select an Image!", "warning");
//       setLoading(false);
//       return;
//     }
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "chat-app");
//       data.append("cloud_name", "dvisweqm3");
//       fetch("https://api.cloudinary.com/v1_1/dvisweqm3/image/upload", {
//         method: "POST",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           showNotification("Image uploaded successfully!", "success");
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           showNotification("Failed to upload image!", "error");
//           setLoading(false);
//         });
//     } else {
//       showNotification("Please Select a Valid Image!", "warning");
//       setLoading(false);
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!name || !email || !password || !cpassword) {
//       showNotification("Please fill all fields!", "error");
//       return;
//     }
//     if (password !== cpassword) {
//       showNotification("Passwords do not match!", "error");
//       return;
//     }
//     showNotification("Signup successful!", "success");
//   };

//   return (
//     <div>
//       {/* Custom Toast */}
//       {notification.visible && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20px",
//             right: "20px",
//             backgroundColor:
//               notification.type === "success"
//                 ? "#4caf50"
//                 : notification.type === "error"
//                 ? "#f44336"
//                 : "#ff9800",
//             color: "white",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             zIndex: 9999,
//           }}
//         >
//           {notification.message}
//         </div>
//       )}

//       <form>
//         <div>
//           <label>Name *</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Email Address *</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label>Password *</label>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <input
//               type={show ? "text" : "password"}
//               placeholder="Enter your password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span
//               onClick={handleClickPass}
//               style={{
//                 marginLeft: "10px",
//                 padding: "5px 10px",
//                 fontSize: "12px",
//                 cursor: "pointer",
//               }}
//             >
//               {show ? "Hide" : "Show"}
//             </span>
//           </div>
//         </div>

//         <div>
//           <label>Confirm Password *</label>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <input
//               type={cshow ? "text" : "password"}
//               placeholder="Confirm your password"
//               required
//               onChange={(e) => setCpassword(e.target.value)}
//             />
//             <span
//               onClick={handleClickConfPass}
//               style={{
//                 marginLeft: "10px",
//                 padding: "5px 10px",
//                 fontSize: "12px",
//                 cursor: "pointer",
//               }}
//             >
//               {cshow ? "Hide" : "Show"}
//             </span>
//           </div>
//         </div>

//         <div>
//           <label>Upload Your Picture</label>
//           <input
//             type="file"
//             onChange={(e) => postDetails(e.target.files[0])}
//           />
//         </div>

//         <Button type="submit" onClick={submitHandler} isLoading={loading}>
//           Sign Up
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
