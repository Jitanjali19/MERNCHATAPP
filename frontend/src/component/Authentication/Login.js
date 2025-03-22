
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {  VStack } from '@chakra-ui/react'
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { setUser } = ChatState();

  // const chatContext = ChatState();  // Call ChatState()
  // console.log(chatContext);  // Debugging ke liye check karein


  // if (!chatContext) {
  //   console.error("ChatState() is returning undefined");
  //   return <p>Error: ChatState() is not available.</p>;
  // }

  // const {setUser} = chatContext;
  // const { setUser } = ChatState();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      
  
  
      console.log("Response:", data);

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setUser(data);
      console.log("Login Successful", data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");

    } catch (error) {
      console.error("Login Failed", error.response?.data || error.message);
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("jitanjalipatel19@gmail.com");
          setPassword("123456");
        }}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    );
  };

export default Login;






       ///////this is my code

// import { React , useState } from "react";
// import axios from "axios";
// // import "../../App.css";
// import {useHistory} from 'react-router-dom'


// const Login = () => {

//     const [password,setPassword]=useState();
//     const [email,setEmail]=useState();
//     const [show,setShow]=useState(false);
//     const [loading,setLoading] = useState(false);
  
//     const history = useHistory();

//       const [notification, setNotification] = useState({
//         message: "",
//         type: "",
//         visible: false,
//       });
    
//       // Show notification
//       const showNotification = (message, type = "info") => {
//         setNotification({ message, type, visible: true });
    
//         // Hide notification after 3 seconds
//         setTimeout(() => {
//           setNotification({ message: "", type: "", visible: false });
//         }, 3000);
//       };
    

//     const handleClickPass=()=>{
//       setShow(!show);
//     }

//     const validateEmail = (email) => {
//       // Regular expression for validating an email
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       return emailRegex.test(email);
//     };
  
//     const submitHandler = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       if ( !email || !password  ) {
//         showNotification("Please fill all fields!", "error");
//         setLoading(false);
//         return;
//       }

//       if (!validateEmail(email)) {
//         showNotification("Please enter a valid email address!", "error");
//         setLoading(false);
//         return;
//       }
     
//       try{
//         const config = {
//           headers:{
//             "Content-type":"application/json"
//           },
//         };
//         const {data} = await axios.post("/api/user/login",{email,password},config);
   
//         showNotification("Login successful!", "success");
  
//         localStorage.setItem("userInfo",JSON.stringify(data));
//         setLoading(false);
  
//         history.push('/chats');
  
//       }catch(error){
//        showNotification(error.response?.data?.message || "Something went wrong","error");
//        setLoading(false);
//       }
      
//     };
  


//   return (
//     <div>
//         {/* toast*/}
//         {notification.visible && (
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
//           <label>Email Address *</label>
//           <input type="email" placeholder="Enter your email" required value={email} onChange={(e) =>setEmail(e.target.value)} />
//         </div>

//         <div>
//           <label>Password *</label>
//           <div style={{ display: "flex", alignItems: "center" }}>
//           <input type={show ? "text":"password"} placeholder="Enter your password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
//           <span onClick={handleClickPass} 
//           style={{
//           marginLeft: "10px",
//           padding: "5px 10px",
//           fontSize: "12px",
//           cursor: "pointer",
//           }}> {show ? "Hide":"Show"} </span>
//           </div>
//         </div>

//         <button type="submit" onClick={submitHandler} disabled={loading}>Login</button>

//         <button
//         type="button"
//          style={{ backgroundColor: "red", color: "white" }} className="userCred" onClick={()=>{
//           setEmail("jitanjalipatel19@gmail.com");
//           setPassword("@jittu19");
//          }}
//        >
//           Get Guest User Credentials
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Login;
