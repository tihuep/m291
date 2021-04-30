import { NavLink } from "react-router-dom";

function Dashboard() {
    return (
    <div>dashboard
        <NavLink to="/users">Users</NavLink>
    </div>);
}

export default Dashboard;