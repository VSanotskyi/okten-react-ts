import {FC, PropsWithChildren} from 'react';
import {IUser} from '../../../interfaces';
import UserItem from '../UserItem/UserItem';

interface IProps extends PropsWithChildren {
    users: IUser[];
}

const UsersList: FC<IProps> = ({users}) => {
    return (
        <ul>
            {users.map(user => <UserItem key={user.id}
                                         user={user}
            />)}
        </ul>
    );
};

export default UsersList;