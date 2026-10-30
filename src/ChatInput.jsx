import {useState} from 'react';
function ChatInput(props){
    const chatMessages=props.chatMessages;
    const setChatMessages=props.setChatMessages;
   const [input,setInput] =useState("");
function addMessage(){
  setChatMessages([...chatMessages,{message:input,sender:"You"}]);
  setInput("");

}
function saveInputText(event){
    setInput(event.target.value);
}
return (
  <div className="inputRow">
    <input className="commentInput"  placeholder="Write a comment..."  value={input} onChange={saveInputText} />
    <button onClick={addMessage} className="postButton">Post</button>
  </div>
);
}
export default ChatInput