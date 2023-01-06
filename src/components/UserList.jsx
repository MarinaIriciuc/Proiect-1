import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    let { users, deleteUser } = props;



    return (
        <div>
            <div className="container-fluid">
                <h4 className="mt-4 ms-3">Lista utilizatorilor:</h4>
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        img={user.img}
                        key={ index }
                        deleteUser={deleteUser}
                    />
                })}
            </div>
        </div>
    );
}

export default UserList;