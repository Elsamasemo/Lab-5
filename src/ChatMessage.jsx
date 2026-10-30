import { useState } from 'react'

function ChatMessage(props) {
  const message = props.message;
  const sender = props.sender;
  const [likes, setLikes] = useState(0);

  return (
    <div className="comment">
      <div className="avatar">{sender[0]}</div>
      <div className="bubble">
        <div className="sender">{sender}</div>
        <div className="text">{message}</div>
        <button className="likeButton" onClick={() => setLikes(likes + 1)}>
          ♥ {likes}
        </button>
      </div>
    </div>
  );
}

export default ChatMessage