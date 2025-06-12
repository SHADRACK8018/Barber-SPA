import React, { useState } from "react";

const chatIconStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#001f3f",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0, 31, 63, 0.3)",
  zIndex: 1000,
};

const chatWindowStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "300px",
  height: "400px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 31, 63, 0.3)",
  display: "flex",
  flexDirection: "column",
  zIndex: 1000,
};

const headerStyle = {
  backgroundColor: "#001f3f",
  color: "#fff",
  padding: "10px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  fontWeight: "bold",
  textAlign: "center",
};

const messagesStyle = {
  flex: 1,
  padding: "10px",
  overflowY: "auto",
  fontSize: "0.9rem",
};

const inputContainerStyle = {
  display: "flex",
  borderTop: "1px solid #ccc",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
};

const buttonStyle = {
  backgroundColor: "#001f3f",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  cursor: "pointer",
};

const ChatIcon = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleOpen = () => setOpen(!open);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Simulate admin response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          text: "Thank you for reaching out! How can I help you?",
          sender: "admin",
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div style={chatIconStyle} onClick={toggleOpen} title="Chat with us">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="30px"
          height="30px"
        >
          <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
      </div>
      {open && (
        <div style={chatWindowStyle}>
          <div style={headerStyle}>Chat with Admin</div>
          <div style={messagesStyle}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "16px",
                    backgroundColor:
                      msg.sender === "user" ? "#001f3f" : "#e0e0e0",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={inputStyle}
            />
            <button onClick={sendMessage} style={buttonStyle}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;
