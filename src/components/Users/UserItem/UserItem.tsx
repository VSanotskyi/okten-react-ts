import {FC, PropsWithChildren} from 'react';
import {IUser} from '../../../interfaces';
import {useNavigate} from 'react-router-dom';

interface IProps extends PropsWithChildren {
    user: IUser;
}

const UserItem: FC<IProps> = ({user}) => {
    const navigation = useNavigate();
    const {id, name} = user;

    const handlerClick = () => {
        navigation(id.toString(), {state: {user}});
    };

    return (
        <li>
            <p>{id}. {name} </p>
            <button onClick={handlerClick}>Details</button>
            <hr/>
        </li>
    );
};

export default UserItem;