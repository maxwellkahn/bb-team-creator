import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // delegate to the users-service
    userService.logOut();
    // update state to cause re-render
    setUser(null);
  }
  return (
    <nav>
      <Link to="/teams">Team History</Link>
      &nbsp; | &nbsp;
      <Link to="/teams/new">New Team</Link>
      &nbsp; | &nbsp;
      <span>
        <b>Welcome, {user.name}</b>
      </span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
