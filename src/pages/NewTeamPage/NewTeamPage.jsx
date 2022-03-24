import { useState, useEffect } from "react";

export default function NewTeamPage() {
  const [rosterItems, setRosterItems] = useState([]);

  useEffect(function () {
    console.log("NewTeamPage rendered");
  });

  return (
    <>
      <h1>NewTeamPage</h1>
      <button onClick={setRosterItems}>Trigger re-render</button>
    </>
  );
}
