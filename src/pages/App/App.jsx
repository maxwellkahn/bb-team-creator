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
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/teams/new" element={<NewTeamPage />} />
            <Route path="/teams" element={<TeamHistoryPage />} />
          </Routes>
          {/* <Navigate to="/teams" /> */}
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
