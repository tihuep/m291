import User from '../../domains/User';
import styled from '@emotion/styled';

const StyledTable = styled.table `
    thead> tr {
        padding: 30px;
    }
`

type UserIndexProps = {
    users?: User[],
    editPress: (userId: number) => void,
    deletePress: (userId: number) => void
}

function UserIndex({users, editPress, deletePress}: UserIndexProps) {
    return <div>
        {!users && <span>Keine Benutzer vorhanden</span>}
        {users && 
            <StyledTable>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Birthdate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.forename}</td>
                            <td>{user.surname}</td>
                            <td>{user.birthdate.toDateString()}</td>
                            <td>
                                <button onClick={() => {editPress(user.id)}}>Edit</button>
                                <button onClick={() => {deletePress(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        }
    </div>
}

export default UserIndex;