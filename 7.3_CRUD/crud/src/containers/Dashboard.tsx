import { NavLink } from "react-router-dom";

function Dashboard() {

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });

    return (
    <div>dashboard
        <NavLink to="/users">Users</NavLink>
    </div>);
}

export default Dashboard;