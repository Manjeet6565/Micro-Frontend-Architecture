// src/components/Chat.js

import { useSelector, useDispatch } from "react-redux";
// import { addMessage, setNewMessage } from "./chatSlice";
import {
  addMessage,
  setNewMessages,
} from "../../../shared-state/src/Component/ChatSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Chat = () => {
  const messages = useSelector((state) => state.chat.messages);
  const newMessage = useSelector((state) => state.chat.newMessage);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (newMessage && newMessage.trim() !== "") {
      dispatch(addMessage({ sender: "User", text: newMessage }));
      dispatch(setNewMessages(""));
    }
  };

  return (
    <div className="container">
      <div className="card shadow-lg mt-3">
        <div className="card-header bg-primary text-white text-center">
          <h4 className="mb-0">Chat Application</h4>
        </div>
        <div
          className="card-body"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`alert ${
                  msg.sender === "User" ? "alert-info" : "alert-secondary"
                }`}
              >
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))
          ) : (
            <p className="text-muted text-center">
              No messages yet. Start chatting!
            </p>
          )}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={newMessage}
              onChange={(e) => dispatch(setNewMessages(e.target.value))}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
