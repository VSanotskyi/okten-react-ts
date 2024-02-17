import {useEffect, useState} from 'react';

import {userService} from '../services';
import {IUser} from '../interfaces';
import UsersList from '../components/Users/UsersList/UsersList';
import {Outlet} from 'react-router-dom';

const UserPages = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const getAllUsers = async () => {
        setIsLoading(true);
        try {
            const {data} = await userService.getAll();
            setError(null);
            setUsers(data);
        } catch (error) {
            const e = error as Error;
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {users.length > 0 && <UsersList users={users}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UserPages;