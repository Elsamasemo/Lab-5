import ChatMessage from './ChatMessage.jsx'

function ChatMessages(props) {
  const chatMessages = props.chatMessages;

  const chatMessageComponents = chatMessages.map((chatMessage, index) => {
    return (
      <ChatMessage key={index} message={chatMessage.message} sender={chatMessage.sender} />
    );
  });

  return (
    <>
      {chatMessageComponents}
    </>
  );
}

export default ChatMessages