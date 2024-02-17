import css from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.list}>
                    <li>
                        <NavLink className={css.link}
                                 to="/users"
                        >
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={css.link}
                                 to="/posts"
                        >
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;