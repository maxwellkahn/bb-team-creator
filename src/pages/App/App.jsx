import "./App.css";
import React, { useState } from "react";
import NewTeamPage from "../NewTeamPage/NewTeamPage";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(null);
  return <main className="App">{user ? <NewTeamPage /> : <AuthPage />}</main>;
}

export default App;
