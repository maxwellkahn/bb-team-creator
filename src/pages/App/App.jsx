import "./App.css";
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewTeamPage from "../NewTeamPage/NewTeamPage";
import TeamHistoryPage from "../TeamHistoryPage/TeamHistoryPage";

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/teams/new">
            <NewTeamPage />
          </Route>
          <Route path="/teams">
            <TeamHistoryPage />
          </Route>
          <Navigate to="/teams" />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
