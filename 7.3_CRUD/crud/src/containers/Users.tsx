import User from '../domains/User';
import UserForm from '../components/users/UserForm';
import UserIndex from '../components/users/UserIndex';
import { useState } from 'react';
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";

function Users() {
    const navigate = useNavigate();

    const initialUsers: User[] = [
        {id: 1, username: 'scarry', forename: 'Scarlett', surname: 'Johansson', birthdate: new Date()},
        {id: 2, username: 'theRock', forename: 'Dwayne', surname: 'Johnson', birthdate: new Date()},
        {id: 3, username: 'ueli', forename: 'Ueli', surname: 'Maurer', birthdate: new Date()}
    ];

    const [users, setUsers] = useState(initialUsers);

    const editUser = (userId: number) => {
        alert("edit " + userId);
    }

    const deleteUser = (userId: number) => {
        alert("delete " + userId);
        setUsers(users.filter(user => user.id !== userId));
    }

    const submitPress = (user: User) => {
        setUsers([...users, user]);
        navigate('/users');
    }

    return (
        <Routes>
            <Route path="" element={<>
                <NavLink to="new">Create New</NavLink>
                <UserIndex users={users} editPress={editUser} deletePress={deleteUser} />
            </>} />
            <Route path="new" element={<>
                <UserForm mode={1} submitPress={submitPress}/>
            </>} />
        </Routes>);
}

export default Users;