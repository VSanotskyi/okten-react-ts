import {FC, PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    const {currentUser} = useAppSelector(state => state.authReducer);

    return (
        <div>
            <div>Cars</div>
            <div>
                {currentUser
                    ? <div>{currentUser.username} -- {currentUser.last_login}</div>
                    : <div>
                        <Link to={'/login'}>Login</Link>
                        <br/>
                        <Link to={'/register'}>Register</Link>
                    </div>
                }
            </div>

        </div>
    );
};

export {Header};