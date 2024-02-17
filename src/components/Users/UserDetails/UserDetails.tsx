import {FC, PropsWithChildren} from 'react';
import {IUser} from '../../../interfaces';

interface IProps extends PropsWithChildren {
    user: IUser;
}

const UserDetails: FC<IProps> = ({user}) => {
    const {id, username, name, email} = user;
    return (
        <div>
            <p>id: {id}</p>
            <p>username: {username}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default UserDetails;