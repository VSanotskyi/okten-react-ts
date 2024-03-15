import {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {meThunk} from '../../store';
import {authService} from '../../services';
import {useAppDispatch, useAppSelector} from '../../hooks';
import css from './Header.module.css';

const Header = () => {
    const dispatch = useAppDispatch();
    const {currentUser} = useAppSelector(state => state.authReducer);

    const access = authService.getAccessToken();

    useEffect(() => {
        if (access && !currentUser) {
            dispatch(meThunk());
        }
    }, []);

    return (
        <div className={css.header}>
            <b className={css.navLogo}>Cars</b>
            <div className={css.navLink}>
                {currentUser
                    ? <span>User: {currentUser.username}</span>
                    : <>
                        <Link to={'/login'}>Sing In</Link>
                        <br/>
                        <Link to={'/register'}>Sing Up</Link>
                    </>
                }
            </div>
        </div>
    );
};

export {Header};