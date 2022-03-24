import { useState, useEffect } from "react";

export default function NewTeamPage() {
  const [rosterItems, setRosterItems] = useState([]);

  useEffect(function () {
    console.log("NewTeamPage rendered");
  });

  useEffect(
    function () {
      console.log("useEffect with dependency array ran");
    },
    [rosterItems]
  );

  return (
    <>
      <h1>NewTeamPage</h1>
      <button onClick={() => setRosterItems(Date.now())}>
        Trigger re-render
      </button>
    </>
  );
}
