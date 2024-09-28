import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ChatArea } from "./components/chatArea";
import { UserLogin } from "./components/userLogin";
import { socket } from "./socket";

function App() {
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);
  console.log("socket.connected", socket.connected);

  function onConnect() {
    setIsConnected(true);
  }
  useEffect(() => {
    socket.on("connect", onConnect);
  }, []);

  if (login) {
    return (
      <>
        <ChatArea userName={userName} />
      </>
    );
  } else {
    return (
      <>
        <UserLogin
          setLogin={setLogin}
          userName={userName}
          setUserName={setUserName}
        />
      </>
    );
  }
}

export default App;
