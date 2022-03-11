import { Route, Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/teams">Team History</Link>
      &nbsp; | &nbsp;
      <Link to="/teams/new">New Team</Link>
      &nbsp; | &nbsp;
      <span>
        <b>Welcome, {user.name}</b>
      </span>
    </nav>
  );
}
