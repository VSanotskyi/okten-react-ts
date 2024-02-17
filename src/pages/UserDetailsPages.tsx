import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {useAppLocation} from '../hooks';
import {IUser} from '../interfaces';
import {userService} from '../services';
import UserDetails from '../components/Users/UserDetails/UserDetails';

const UserDetailsPages: FC = () => {
    const [userDetails, setUserDetails] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const {id} = useParams();
    const {state} = useAppLocation<{ user: IUser }>();

    const getUserById = async (id: number) => {
        setIsLoading(true);
        try {
            const {data} = await userService.getById(id);
            setError(null);
            setUserDetails(data);
        } catch (error) {
            const e = error as Error;
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (state?.user) setUserDetails(state.user);
        if (!state?.user) getUserById(Number(id));
    }, [id, state]);

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error.message}</h2>}
            {userDetails && <UserDetails user={userDetails}/>}
        </div>
    );
};

export default UserDetailsPages;