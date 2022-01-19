import { Route } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Route path="/teams">Team History</Route>
      &nbsp; | &nbsp;
      <Route path="/teams/new">New Team</Route>
    </nav>
  );
}
