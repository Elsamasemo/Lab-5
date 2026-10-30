import {useState} from 'react'
import ChatInput from './ChatInput.jsx'
import ChatMessages from './ChatMessages.jsx'
import Comments from './Comments.jsx' 
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([
    {message: "Great explaination of components!", sender: "Sara"},
    {message: "Propd finally make sense to me.", sender: "Omar"},
    {message: "Thanks for the lab, it was fun.", sender: "Ali"}
  ]);

  return (
    <>
      <Comments count={chatMessages.length} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
      <ChatMessages chatMessages={chatMessages}/>
    </>
  );
}

export default App