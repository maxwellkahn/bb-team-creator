import "./App.css";
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewTeamPage from "../NewTeamPage/NewTeamPage";
import TeamHistoryPage from "../TeamHistoryPage/TeamHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/teams/new">
              <NewTeamPage />
            </Route>
            <Route path="/teams">
              <TeamHistoryPage />
            </Route>
            <Navigate to="/teams" />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
