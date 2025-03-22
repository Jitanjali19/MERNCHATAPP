import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider";
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from "./Context/ChatProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  // <ChatProvider>
  //   <App />
  // </ChatProvider>
  // </BrowserRouter>
  
  <React.StrictMode>
    <BrowserRouter> 
      <ChatProvider> 
        <ChakraProvider> 
          <App /> 
        </ChakraProvider>
      </ChatProvider>
    </BrowserRouter>
  </React.StrictMode>
);
